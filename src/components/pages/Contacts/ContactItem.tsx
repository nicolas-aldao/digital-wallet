import { ListboxItem, Avatar } from "@nextui-org/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { API_GET_RANDOM_AVATARS } from "../../../Constants";
import { User } from "../../../types/user";

interface ContactItemProps {
  item: User;
}

export const ContactItem: FC<ContactItemProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <ListboxItem key={item._id} textValue={item.firstname}>
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
  );
};
