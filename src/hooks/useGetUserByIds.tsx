import { useEffect, useState } from "react";
import { getUsersByIds } from "../services/apiDigitalWallet";
import { User } from "../types/user";

export const useGetUserByIds = (ids: Array<string>) => {
  const [data, setData] = useState<User>();
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUsersByIds(ids);
      setData(res?.data);
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
