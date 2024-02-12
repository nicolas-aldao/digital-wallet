import { useDispatch } from "react-redux";
import { saveUserData } from "../../../features/userSlice";
import { UserFullName } from "../../organisms/UserFullName/index";
import { CardBalance } from "../../organisms/CardBalance/index";
import { useGetUserById } from "../../../hooks/useGetUserById";
import { MovementsList } from "../../organisms/MovementsList";
import { useParams } from "react-router-dom";
import { GoBackButton } from "../../atoms/GoBackButton";

export const Home = () => {
  const { id } = useParams();
  const [user] = useGetUserById(id!);
  const dispatch = useDispatch();
  dispatch(saveUserData(user));

  return (
    <>
      <GoBackButton />
      <UserFullName user={user} />
      <CardBalance info={user} />
      <MovementsList userId={id} />
    </>
  );
};
