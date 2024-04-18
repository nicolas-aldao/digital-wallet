import { useEffect, useState } from "react";
import { GENERIC_MESSAGE_ERROR } from "../Constants";
import { WalletService } from "../services/walletService";
import { provider } from "../services/main";

export const useTransfer = (
  idSender: string,
  idReceiver: string,
  amount: number,
  runCode: boolean
) => {
  const walletService = new WalletService(provider);

  const [response, setResponse] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (runCode) {
      const runTransfer = async () => {
        setIsLoading(true);
        try {
          const res = await walletService.doTransfer(
            idSender,
            idReceiver,
            amount
          );
          setResponse(res);
          return;
        } catch (err: any) {
          setErrorMessage(GENERIC_MESSAGE_ERROR);
        } finally {
          setIsLoading(false);
        }
      };
      runTransfer();
    }
  }, [runCode]);

  return { response, isLoading, errorMessage, setErrorMessage };
};
