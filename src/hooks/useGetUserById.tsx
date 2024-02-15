import { useEffect, useState } from "react";
import { GENERIC_MESSAGE_ERROR } from "../Constants";
import { getUserById } from "../services/apiDigitalWallet";
import { User } from "../types/user";

export const useGetUserById = (userId: string) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<String | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await getUserById(userId);
      if (!res) {
        //throw new Error();
        setErrorMessage(GENERIC_MESSAGE_ERROR);
        return;
      }
      setUser(res?.data);
      // setIsLoading(false);
      // return;
    };
    try {
      fetchData();
    } catch (err: any) {
      setErrorMessage(GENERIC_MESSAGE_ERROR);
      // setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { user, isLoading, errorMessage };
};
