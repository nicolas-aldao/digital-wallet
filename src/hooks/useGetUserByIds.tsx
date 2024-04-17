import { useEffect, useState } from "react";
import { WalletService } from "../services/walletService";
import { provider } from "../services/main";
import { User } from "../types/user";

export const useGetUserByIds = (ids: Array<string>) => {
  const walletService = new WalletService(provider);

  const [data, setData] = useState<User[] | undefined>([]);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await walletService.getUsersByIds(ids);
      setData(res);
      return;
    };
    try {
      fetchData();
    } catch (err: any) {
      setErrorMessage(err.toString());
    }
  }, [ids]);

  return [data, errorMessage];
};
