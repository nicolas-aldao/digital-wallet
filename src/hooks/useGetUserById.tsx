import { useEffect, useState } from "react";
import { getUserById } from "../services/apiDigitalWallet";
import { User } from "../types/user";

export const useGetUserById = (userId: string) => {
  const [data, setData] = useState<User>();
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserById(userId);
      setData(res?.data);
      return;
    };
    try {
      fetchData();
    } catch (err: any) {
      setErrorMessage(err.toString());
    }
  }, []);

  return [data, errorMessage];
};
