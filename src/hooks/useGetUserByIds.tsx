import { useEffect, useState } from "react";
import { WalletService } from "../services/walletService";
import { provider } from "../services/main";
import { User } from "../types/user";
import { CONTACTS_MESSAGE_ERROR } from "../Constants";

export const useGetUserByIds = (ids: Array<string>) => {
  const walletService = new WalletService(provider);

  const [data, setData] = useState<User[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await walletService.getUsersByIds(ids);
        setData(res);
        return;
      } catch (err: any) {
        setErrorMessage(CONTACTS_MESSAGE_ERROR);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [ids]);

  return { data, isLoading, errorMessage };
};
