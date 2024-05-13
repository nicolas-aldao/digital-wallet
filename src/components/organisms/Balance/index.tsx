import { FC, useState } from "react";
import { Skeleton, Button } from "@nextui-org/react";
import { User } from "../../../types/user";
import EyeIcon from "../../../assets/eye";
import ClosedEyeIcon from "../../../assets/closedEye";
import classes from "./balance.module.css";

interface BalanceProps {
  info: User | undefined;
}

export const Balance: FC<BalanceProps> = ({ info }) => {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <p
      className={`${classes.balance_card} flex text-xl font-bold text-fonts-primary`}
      data-testid="balance"
    >
      $
      {info === undefined ? (
        <Skeleton className="self-center ml-3 h-3 w-3/5 rounded-lg" />
      ) : showBalance ? (
        info?.balance.toFixed(2)
      ) : (
        "*******"
      )}
      {info && (
        <Button
          variant="bordered"
          onClick={() => setShowBalance(!showBalance)}
          className={classes.eye}
          data-testid="eye-icon"
        >
          {showBalance ? <EyeIcon /> : <ClosedEyeIcon />}
        </Button>
      )}
    </p>
  );
};
