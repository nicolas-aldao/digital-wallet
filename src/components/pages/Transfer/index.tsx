import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTransfer } from "../../../hooks/useTransfer";
import { GoBackButton } from "../../atoms/GoBackButton";
import { PageTitle } from "../../atoms/PageTitle";
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
      <GoBackButton text="Back to Home" />
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
        className="mt-5"
        disabled={isLoading || amount === 0}
        onClick={() => {
          setRunHook(true);
        }}
      >
        Transfer
      </Button>
      {isLoading && <Spinner color="primary" />}
      <Modal isOpen={isOpen} className={classes.modal}>
        <ModalContent className="w-fit bg-primary-50">
          <>
            <ModalHeader className="flex flex-col gap-1 text-fonts-secondary border-colors-secondary">
              {messageModal}
            </ModalHeader>
            <ModalFooter>
              <Button
                color={errorMessage ? "danger" : "success"}
                onPress={() =>
                  errorMessage
                    ? setIsOpen(false)
                    : navigate(`/home/${user?._id}`)
                }
              >
                {response ? "Back to home" : "Close"}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};
