import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import classes from "./gobackbutton.module.css";

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      color="primary"
      variant="light"
      className={`w-fit mb-3 p-0 ${classes.button}`}
    >
      Go back
    </Button>
  );
};
