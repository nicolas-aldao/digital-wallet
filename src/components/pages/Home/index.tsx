import { useSelector, useDispatch } from "react-redux";
import { saveUserData } from "../../../features/userSlice";
import { increment } from "../../../features/counterSlice";
import { CardBalance } from "../../organisms/CardBalance/index";
import { useGetUserById } from "../../../hooks/useGetUserById";
import { UserFullName } from "../../organisms/UserFullName/index";

export const Home = () => {
  const [data] = useGetUserById("65b32b744548d2c06ed245b2");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  dispatch(saveUserData(data));

  return (
    <>
      <UserFullName user={data} />
      <CardBalance info={data} />
      <div>
        <span>{count}</span>
        <br />
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
};
