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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await getMovements(userId);
      if (!res) {
        setErrorMessage(GENERIC_MESSAGE_ERROR);
        return;
      }
      setMovements(res?.data);
      // return;
    };
    try {
      fetchData();
    } catch (err: any) {
      setErrorMessage(GENERIC_MESSAGE_ERROR);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { movements, isLoading, errorMessage };
};
