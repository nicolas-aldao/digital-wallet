import { useEffect, useState } from "react";
import { WalletService } from "../services/walletService";
import { provider } from "../services/main";
import { User } from "../types/user";

export const useGetUsers = () => {
  const walletService = new WalletService(provider);

  const [users, setUsers] = useState<User[] | undefined>([]);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await walletService.getUsers();
      setUsers(res);
      return;
    };
    try {
      fetchData();
    } catch (err: any) {
      setErrorMessage(err.toString());
    }
  }, []);

  return [users, errorMessage];
};
