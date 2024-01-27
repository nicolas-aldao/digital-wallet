import { CardBalance } from "../../organisms/CardBalance/index";
import { useGetUserById } from "../../../hooks/useGetUserById";
import { UserFullName } from "../../organisms/UserFullName/index";

export const Home = () => {
  const [data] = useGetUserById("65b32b744548d2c06ed245b2");

  return (
    <>
      <UserFullName user={data} />
      <CardBalance info={data} />
    </>
  );
};
