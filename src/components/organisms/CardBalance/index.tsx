import { FC } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { User } from "../../../types/user";
import { Balance } from "../Balance/index";

interface CardBalanceProps {
  info: User | undefined;
}

export const CardBalance: FC<CardBalanceProps> = ({ info }) => {
  return (
    <Card className="max-w-[250px] min-w-[200px] bg-background">
      <CardHeader>
        <p className="text-md text-fonts-primary">My balance</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <Balance info={info} />
      </CardBody>
      <Divider />
      <CardFooter>
        <Button className="bg-primary text-white">Transfer Money</Button>
      </CardFooter>
    </Card>
  );
};
