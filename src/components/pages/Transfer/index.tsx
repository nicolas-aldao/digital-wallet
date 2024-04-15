import { Button, Input, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTransfer } from "../../../hooks/useTransfer";
import { GoBackButton } from "../../atoms/GoBackButton";
import { PageTitle } from "../../atoms/PageTitle";
import { ModalOneButton } from "../../organisms/ModalOneButton";
import classes from "./transfer.module.css";

export const Transfer = () => {
  const user = useSelector((state: any) => state.user.value);
  const { id } = useParams();
  const [amount, setAmount] = useState<number>(0);
  const [runHook, setRunHook] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messageModal, setMessageModal] = useState("");
  const navigate = useNavigate();
  const { response, isLoading, errorMessage } = useTransfer(
    user?._id,
    id!,
    amount,
    runHook
  );

  useEffect(() => {
    if (response) {
      setMessageModal(response);
      setIsOpen(true);
    }
    if (errorMessage) {
      setMessageModal(errorMessage);
      setIsOpen(true);
    }
  }, [response, errorMessage]);

  return (
    <>
      <GoBackButton />
      <PageTitle title="Transfer Money" />
      <Input
        type="number"
        className={`p-1 ${classes.input}`}
        label="Price"
        color="primary"
        placeholder="0.00"
        labelPlacement="outside"
        value={amount.toFixed(2)}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-small">$</span>
          </div>
        }
      />
      <Button
        color="primary"
        variant="shadow"
        size="lg"
        className={`mt-2 w-fit flex self-center px-16 ${classes.button} hover:cursor-pointer`}
        disabled={isLoading || amount === 0}
        onClick={() => {
          setRunHook(true);
        }}
      >
        Transfer
      </Button>
      {isLoading && <Spinner color="primary" />}
      <ModalOneButton
        isOpen={isOpen}
        messageModal={messageModal}
        color={errorMessage ? "danger" : "success"}
        onPress={() =>
          errorMessage ? setIsOpen(false) : navigate(`/home/${user?._id}`)
        }
        buttonText={response ? "Back to home" : "Close"}
      />
    </>
  );
};
