import { useEffect, useState } from "react";
import { GENERIC_MESSAGE_ERROR } from "../Constants";
import { WalletService } from "../services/walletService";
import { provider } from "../services/main";
import { User } from "../types/user";

export const useGetUsers = () => {
  const walletService = new WalletService(provider);

  const [users, setUsers] = useState<User[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await walletService.getUsers();
        setUsers(res);
        return;
      } catch (err: any) {
        setErrorMessage(GENERIC_MESSAGE_ERROR);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { users, isLoading, errorMessage };
};
