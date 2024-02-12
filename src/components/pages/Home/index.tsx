import { useDispatch } from "react-redux";
import { Listbox, ListboxItem, Spinner } from "@nextui-org/react";
import { formatDateTime } from "../../../utils/formatDateTime";
import { saveUserData } from "../../../features/userSlice";
import { UserFullName } from "../../organisms/UserFullName/index";
import { CardBalance } from "../../organisms/CardBalance/index";
import { useGetUserById } from "../../../hooks/useGetUserById";
import { useGetMovements } from "../../../hooks/useGetMovements";
import { Movements } from "../../../types/movements";
import classes from "./home.module.css";
import { PageTitle } from "../../atoms/PageTitle";

export const Home = () => {
  const userId = "65b32b744548d2c06ed245b2";
  const [data] = useGetUserById(userId);
  const [movements] = useGetMovements(userId);
  const dispatch = useDispatch();
  dispatch(saveUserData(data));

  return (
    <>
      <UserFullName user={data} />
      <CardBalance info={data} />
      {movements && (
        <>
          <PageTitle title="Movements" className="mt-4" />
          <Listbox
            items={movements}
            emptyContent={
              <div className="flex justify-center items-center mt-8">
                <Spinner color="primary" />
              </div>
            }
            color="primary"
            variant="light"
            className={`${classes.movementsList}`}
          >
            {(item: Movements) => (
              <ListboxItem key={item._id}>
                <div key={item._id}>
                  <span
                    className={
                      item.senderId === data?._id
                        ? "text-danger"
                        : "text-success"
                    }
                  >
                    {item.senderId === data?._id ? "You sent " : "You receive "}
                  </span>
                  <span
                    className={
                      item.senderId === data?._id
                        ? "text-danger"
                        : "text-success"
                    }
                  >
                    ${item.amount}{" "}
                  </span>
                  <span>{item.senderId === data?._id ? "to " : "from "}</span>
                  <span>
                    {item.senderId === data?._id
                      ? item.receiverFullname
                      : item.senderFullname}
                  </span>
                  <p>{formatDateTime(item.date.toString())}</p>
                </div>
              </ListboxItem>
            )}
          </Listbox>
        </>
      )}
    </>
  );
};
