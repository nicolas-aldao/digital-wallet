import { Listbox, ListboxItem, Avatar } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User } from "../../../types/user";
import { useGetUserByIds } from "../../../hooks/useGetUserByIds";

export const Contacts = () => {
  const user = useSelector((state: any) => state.user.value);
  const [data] = useGetUserByIds(user.contacts);
  const navigate = useNavigate();

  return (
    <>
      <p>Contacts</p>
      {data && (
        <Listbox
          defaultSelectedKeys={["1"]}
          items={data}
          label="Assigned to"
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
                  src={`https://xsgames.co/randomusers/assets/avatars/male/${
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
