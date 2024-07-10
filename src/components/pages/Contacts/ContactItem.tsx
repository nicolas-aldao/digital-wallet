import { FC } from "react";
import { Avatar } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { User } from "../../../types/user";

interface ContactItemProps {
  item: User;
}

export const ContactItem: FC<ContactItemProps> = ({ item }) => {
  const navigate = useNavigate();
  console.log("item! ", item);

  return (
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
        src={item.profile_pic}
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
  );
};
