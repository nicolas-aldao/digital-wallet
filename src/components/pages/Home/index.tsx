import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GENERIC_MESSAGE_ERROR } from "../../../Constants";
import { useGetUserById } from "../../../hooks/useGetUserById";
import { saveUserData } from "../../../features/userSlice";
import { GoBackButton } from "../../atoms/GoBackButton";
import { UserFullName } from "../../organisms/UserFullName/index";
import { CardBalance } from "../../organisms/CardBalance/index";
import { MovementsList } from "../../organisms/MovementsList";
import { ModalOneButton } from "../../organisms/ModalOneButton";

export const Home = () => {
  const { id } = useParams();
  const { user, isLoading, errorMessage } = useGetUserById(id!);
  const dispatch = useDispatch();
  dispatch(saveUserData(user));
  const navigate = useNavigate();

  return (
    <>
      <GoBackButton text="Sign out" route="/" />
      <UserFullName user={user} isLoading={isLoading} />
      <CardBalance info={user} />
      <MovementsList userId={id} />
      {/* {errorMessage && <p>something went wrong!</p>} */}
      <ModalOneButton
        isOpen={Boolean(errorMessage)}
        messageModal={GENERIC_MESSAGE_ERROR}
        color={"danger"}
        onPress={() => navigate("/")}
        buttonText="Close"
      />
    </>
  );
};
