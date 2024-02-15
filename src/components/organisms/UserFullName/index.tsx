import { FC } from "react";
import { Skeleton } from "@nextui-org/react";
import { User } from "../../../types/user";
// import { GENERIC_MESSAGE_ERROR } from "../../../Constants";

interface UserFullNameProps {
  user: User | undefined;
  isLoading: Boolean | undefined;
}

export const UserFullName: FC<UserFullNameProps> = ({ user, isLoading }) => {
  return (
    <p className="mb-5 text-left text-fonts-secondary">
      {isLoading && (
        <Skeleton className="h-3 w-3/5 mt-2 rounded-lg bg-skeleton" />
      )}
      {user &&
        `Hey, ${user?.firstname} ${user?.lastname}! how you doing today?`}
    </p>
  );
};
