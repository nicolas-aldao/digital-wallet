import { useEffect, useState } from "react";
import { getUserById } from "../services/apiDigitalWallet";
import { User } from "../types/user";

export const useGetUserById = (userId: string) => {
  const [user, setUser] = useState<User>();
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserById(userId);
      setUser(res?.data);
      return;
    };
    try {
      fetchData();
    } catch (err: any) {
      setErrorMessage(err.toString());
    }
  }, []);

  return [user, errorMessage];
};
