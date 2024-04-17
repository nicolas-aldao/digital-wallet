import { useEffect, useState } from "react";
import { GENERIC_MESSAGE_ERROR } from "../Constants";
import { WalletService } from "../services/walletService";
import { provider } from "../services/main";
import { Movements } from "../types/movements";

export const useGetMovements = (userId: string) => {
  const walletService = new WalletService(provider);

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
      const res = await walletService.getMovements(userId);
      if (!res) {
        setErrorMessage(GENERIC_MESSAGE_ERROR);
        return;
      }
      setMovements(res);
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
