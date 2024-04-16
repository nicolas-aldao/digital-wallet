import { FC } from "react";
import { Button } from "@nextui-org/react";
import classes from "./transferbutton.module.css";

interface TransferButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

export const TransferButton: FC<TransferButtonProps> = ({
  isDisabled,
  onClick,
}) => {
  return (
    <Button
      color="primary"
      size="lg"
      className={`mt-2 w-fit flex self-center px-16 ${classes.button} bg-gradient-to-r from-green-500 to-blue-500
        hover:cursor-pointer`}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      Transfer
    </Button>
  );
};
