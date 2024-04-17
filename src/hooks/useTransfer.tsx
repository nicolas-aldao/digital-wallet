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
        const res = await walletService.doTransfer(
          idSender,
          idReceiver,
          amount
        );
        if (res?.request?.status === 200) {
          setResponse(res?.data?.message);
        } else if (res?.response?.status === 400) {
          setErrorMessage(res?.response?.data?.error);
        }
        setIsLoading(false);
        return;
      };
      try {
        runTransfer();
      } catch (err: any) {
        setErrorMessage(GENERIC_MESSAGE_ERROR);
        setIsLoading(false);
      }
    }
  }, [runCode]);

  return { response, isLoading, errorMessage };
};
