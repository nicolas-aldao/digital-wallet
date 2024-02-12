import { useEffect, useState } from "react";
import { GENERIC_MESSAGE_ERROR } from "../Constants";
import { getMovements } from "../services/apiDigitalWallet";
import { Movements } from "../types/movements";

export const useGetMovements = (userId: string) => {
  const [movements, setMovements] = useState<Movements[] | undefined>(
    undefined
  );
  const [errorMessage, setErrorMessage] = useState<String | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovements(userId);
      setMovements(res?.data);
      return;
    };
    try {
      fetchData();
    } catch (err: any) {
      setErrorMessage(GENERIC_MESSAGE_ERROR);
    }
  }, []);

  return { movements, errorMessage };
};
