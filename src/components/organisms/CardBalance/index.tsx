import { FC } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { User } from "../../../types/user";
import { Balance } from "../Balance/index";
import classes from "./cardbalance.module.css";

interface CardBalanceProps {
  info: User | undefined;
}

export const CardBalance: FC<CardBalanceProps> = ({ info }) => {
  const navigate = useNavigate();

  return (
    <Card className="max-w-[250px] min-w-[200px] bg-background">
      <CardHeader>
        <p className="text-md text-fonts-primary">My balance</p>
      </CardHeader>
      <Divider className={classes.divider} />
      <CardBody className="flex justify-center">
        <Balance info={info} />
      </CardBody>
      <Divider className={classes.divider} />
      <CardFooter>
        <Button
          className="bg-primary text-fonts-secondary"
          onClick={() => {
            navigate("/contacts");
          }}
          disabled={info === undefined}
        >
          Transfer Money
        </Button>
      </CardFooter>
    </Card>
  );
};
