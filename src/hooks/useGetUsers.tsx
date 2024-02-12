import { useEffect, useState } from "react";
import { getUsers } from "../services/apiDigitalWallet";
import { User } from "../types/user";

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUsers();
      setUsers(res?.data);
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
