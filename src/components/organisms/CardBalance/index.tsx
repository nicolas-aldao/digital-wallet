import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

export const CardBalance = () => {
  return (
    <Card className="max-w-[250px] min-w-[200px] bg-background">
      <CardHeader>
        <p className="text-md text-fonts-primary">My balance</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-xl font-bold text-fonts-primary">$1.014</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button className="bg-primary text-white">Transfer Money</Button>
      </CardFooter>
    </Card>
  );
};
