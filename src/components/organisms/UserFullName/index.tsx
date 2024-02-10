import { FC } from "react";
import { Skeleton } from "@nextui-org/react";
import { User } from "../../../types/user";

interface UserFullNameProps {
  user: User | undefined;
}

export const UserFullName: FC<UserFullNameProps> = ({ user }) => {
  return (
    <p className="m-6 ml-2 text-left text-fonts-secondary">
      {user === undefined ? (
        <Skeleton className="h-3 w-3/5 mt-2 rounded-lg bg-skeleton" />
      ) : (
        `${user?.firstname} ${user?.lastname}`
      )}{" "}
    </p>
  );
};
