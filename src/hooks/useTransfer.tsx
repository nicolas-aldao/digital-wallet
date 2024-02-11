import { useEffect, useState } from "react";
import { doTransfer } from "../services/apiDigitalWallet";

export const useTransfer = (
  idSender: string,
  idReceiver: string,
  amount: number,
  runCode: boolean
) => {
  const [response, setResponse] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    if (runCode) {
      const runTransfer = async () => {
        setIsLoading(true);
        const res = await doTransfer(idSender, idReceiver, amount);
        setResponse(res?.data?.message);
        setIsLoading(false);
        return;
      };
      try {
        runTransfer();
      } catch (err: any) {
        setErrorMessage(err?.data?.error?.toString());
        setIsLoading(false);
      }
    }
  }, [runCode]);

  return { response, isLoading, errorMessage };
};
