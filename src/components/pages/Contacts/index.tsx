import { Listbox, ListboxItem, Avatar, Spinner } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_GET_RANDOM_AVATARS } from "../../../Constants";
import { User } from "../../../types/user";
import { useGetUserByIds } from "../../../hooks/useGetUserByIds";
import { GoBackButton } from "../../atoms/GoBackButton";
import { PageTitle } from "../../atoms/PageTitle";

export const Contacts = () => {
  const user = useSelector((state: any) => state.user.value);
  const [data] = useGetUserByIds(user.contacts);
  const navigate = useNavigate();

  return (
    <>
      <GoBackButton text="Back to Home" />
      <PageTitle title="Your Contacts" />
      {data && (
        <Listbox
          items={data}
          emptyContent={
            <div className="flex justify-center items-center mt-8">
              <Spinner color="primary" />
            </div>
          }
          color="primary"
          variant="flat"
        >
          {(item: User) => (
            <ListboxItem key={item.firstname} textValue={item.firstname}>
              <div
                className="flex gap-2 items-center"
                onClick={() => {
                  navigate(`/transfer/${item._id}`);
                }}
              >
                <Avatar
                  alt={item.firstname}
                  className="flex-shrink-0"
                  size="sm"
                  src={`${API_GET_RANDOM_AVATARS}/male/${
                    Math.floor(Math.random() * 30) + 1
                  }.jpg`}
                />
                <div className="flex flex-col">
                  <span className="text-small">
                    {item.firstname} {item.lastname}
                  </span>
                  <span className="text-tiny text-default-400">
                    National Bank Account
                  </span>
                </div>
              </div>
            </ListboxItem>
          )}
        </Listbox>
      )}
    </>
  );
};
