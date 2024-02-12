import { Button } from "@nextui-org/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./gobackbutton.module.css";

interface GoBackButtonProps {
  text?: String;
  route?: String;
}

export const GoBackButton: FC<GoBackButtonProps> = ({ text, route }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => (route ? navigate(route.toString()) : navigate(-1))}
      color="primary"
      variant="light"
      className={`w-fit mb-3 p-0 ${classes.button}`}
    >
      {text ? text : "Go back"}
    </Button>
  );
};
