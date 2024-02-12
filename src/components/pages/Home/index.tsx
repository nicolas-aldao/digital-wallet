import { useDispatch } from "react-redux";
// import { Listbox, ListboxItem, Spinner } from "@nextui-org/react";
// import { formatDateTime } from "../../../utils/formatDateTime";
import { saveUserData } from "../../../features/userSlice";
import { UserFullName } from "../../organisms/UserFullName/index";
import { CardBalance } from "../../organisms/CardBalance/index";
import { useGetUserById } from "../../../hooks/useGetUserById";
import { useGetMovements } from "../../../hooks/useGetMovements";
// import { Movements } from "../../../types/movements";
// import classes from "./home.module.css";
// import { PageTitle } from "../../atoms/PageTitle";
// import { CenteredSpinner } from "../../atoms/CenteredSpinner";
import { MovementsList } from "../../organisms/MovementsList";
import { useParams } from "react-router-dom";
import { GoBackButton } from "../../atoms/GoBackButton";

export const Home = () => {
  const { id } = useParams();
  const [user] = useGetUserById(id!);
  const [movements] = useGetMovements(id!);
  const dispatch = useDispatch();
  dispatch(saveUserData(user));

  return (
    <>
      <GoBackButton />
      <UserFullName user={user} />
      <CardBalance info={user} />
      <MovementsList movements={movements} userId={user?._id} />
      {/* {(!movements || !user?._id) && <CenteredSpinner />}
      {movements && user?._id && (
        <>
          <PageTitle title="Movements" className="mt-4" />
          <Listbox
            items={movements}
            // emptyContent={<CenteredSpinner />}
            color="primary"
            variant="light"
            className={`${classes.movementsList}`}
          >
            {(item: Movements) => (
              <ListboxItem key={item._id}>
                <div key={item._id}>
                  <span
                    className={
                      item.senderId === user?._id
                        ? "text-danger"
                        : "text-success"
                    }
                  >
                    {item.senderId === user?._id ? "You sent " : "You receive "}
                  </span>
                  <span
                    className={
                      item.senderId === user?._id
                        ? "text-danger"
                        : "text-success"
                    }
                  >
                    ${item.amount}{" "}
                  </span>
                  <span>{item.senderId === user?._id ? "to " : "from "}</span>
                  <span>
                    {item.senderId === user?._id
                      ? item.receiverFullname
                      : item.senderFullname}
                  </span>
                  <p>{formatDateTime(item.date.toString())}</p>
                </div>
              </ListboxItem>
            )}
          </Listbox>
        </>
      )} */}
    </>
  );
};
