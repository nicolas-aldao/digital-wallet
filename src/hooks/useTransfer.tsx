import { useEffect, useState } from "react";
import { doTransfer } from "../services/apiDigitalWallet";

export const useTransfer = (
  idSender: string,
  idReceiver: string,
  amount: number,
  runCode: boolean
) => {
  const [response, setResponse] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    if (runCode) {
      const runTransfer = async () => {
        const res = await doTransfer(idSender, idReceiver, amount);
        setResponse(res?.data?.message);
        return;
      };
      try {
        runTransfer();
      } catch (err: any) {
        setErrorMessage(err?.data?.error?.toString());
      }
    }
  }, [runCode]);

  return { response, errorMessage };
};
