import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import { useTransfer } from "../../../hooks/useTransfer";
import { GoBackButton } from "../../atoms/GoBackButton";
import { MoneyInput } from "../../atoms/MoneyInput";
import { PageTitle } from "../../atoms/PageTitle";
import { TransferButton } from "../../atoms/TransferButton";
import { ModalResultTransfer } from "./modalResultTransfer";

export const Transfer = () => {
  const user = useSelector((state: any) => state.user.value);
  const { id } = useParams();
  const [amount, setAmount] = useState<number>(0);
  const [runHook, setRunHook] = useState(false);
  const { response, isLoading, errorMessage } = useTransfer(
    user?._id,
    id!,
    amount,
    runHook
  );

  return (
    <>
      <GoBackButton />
      <PageTitle title="Transfer Money" />
      <MoneyInput
        value={amount.toFixed(2)}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
      />
      <TransferButton
        isDisabled={isLoading || amount === 0}
        onClick={() => {
          setRunHook(true);
        }}
      />
      {isLoading && <Spinner color="primary" />}
      <ModalResultTransfer
        response={response}
        errorMessage={errorMessage}
        userId={user?._id}
      />
    </>
  );
};
