import { useEffect, useState } from "react";
import { getMovements } from "../services/apiDigitalWallet";
import { Movements } from "../types/movements";

export const useGetMovements = (userId: string) => {
  const [movements, setMovements] = useState<Movements[]>([]);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovements(userId);
      setMovements(res?.data);
      return;
    };
    try {
      fetchData();
    } catch (err: any) {
      setErrorMessage(err.toString());
    }
  }, []);

  return [movements, errorMessage];
};
