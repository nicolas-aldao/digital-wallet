import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GENERIC_MESSAGE_ERROR } from "../../../Constants";
import { ModalOneButton } from "../../organisms/ModalOneButton";

interface ModalResultTransferProps {
  response?: string;
  errorMessage?: string;
  setErrorMessage?: (val: string) => void;
  userId: string;
}

export const ModalResultTransfer: FC<ModalResultTransferProps> = ({
  response,
  errorMessage,
  setErrorMessage,
  userId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageModal, setMessageModal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (response) {
      setMessageModal(response);
      setIsOpen(true);
    }
    if (errorMessage) {
      setMessageModal(GENERIC_MESSAGE_ERROR);
      setIsOpen(true);
    }
  }, [response, errorMessage]);

  return (
    <ModalOneButton
      isOpen={isOpen}
      messageModal={messageModal}
      color={errorMessage ? "danger" : "success"}
      onPress={() => {
        if (errorMessage) {
          setIsOpen(false);
          setErrorMessage ? setErrorMessage("") : null;
        } else {
          navigate(`/home/${userId}`);
        }
      }}
      buttonText={response ? "Back to home" : "Close"}
    />
  );
};
