import { useEffect, useState } from "react";
import { GENERIC_MESSAGE_ERROR } from "../Constants";
import { WalletService } from "../services/walletService";
import { provider } from "../services/main";
import { User } from "../types/user";

export const useGetUserById = (userId: string) => {
  const walletService = new WalletService(provider);

  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<String | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await walletService.getUserById(userId);
      if (!res) {
        //throw new Error();
        setErrorMessage(GENERIC_MESSAGE_ERROR);
        return;
      }
      setUser(res);
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
