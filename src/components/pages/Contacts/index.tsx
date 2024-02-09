import {
  Listbox,
  ListboxItem,
  // Chip,
  // ScrollShadow,
  Avatar,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { User } from "../../../types/user";
import { useGetUserByIds } from "../../../hooks/useGetUserByIds";

export const Contacts = () => {
  const user = useSelector((state: any) => state.user.value);
  const [data] = useGetUserByIds(user.contacts);

  return (
    <>
      <p>Contacts Page</p>
      {data && (
        <Listbox
          // topContent={topContent}
          classNames={{
            base: "max-w-xs",
            list: "max-h-[300px] overflow-scroll",
          }}
          defaultSelectedKeys={["1"]}
          items={data}
          label="Assigned to"
          selectionMode="multiple"
          // onSelectionChange={setValues}
          variant="flat"
        >
          {(item: User) => (
            <ListboxItem key={item.firstname} textValue={item.firstname}>
              <div className="flex gap-2 items-center">
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
                    placeholder
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
