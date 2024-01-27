import { FC } from "react";
import { Skeleton } from "@nextui-org/react";
import { User } from "../../../types/user";

interface BalanceProps {
  info: User | undefined;
}

export const Balance: FC<BalanceProps> = ({ info }) => {
  return (
    <p className="flex text-xl font-bold text-fonts-primary">
      $
      {info === undefined ? (
        <Skeleton className="self-center ml-3 h-3 w-3/5 rounded-lg" />
      ) : (
        info?.balance
      )}
    </p>
  );
};
