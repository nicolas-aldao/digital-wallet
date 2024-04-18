import { FC, ReactElement } from "react";
import { Modal as ModalUI, ModalContent, ModalHeader } from "@nextui-org/react";
import classes from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  messageModal: string;
  children?: ReactElement;
}

export const Modal: FC<ModalProps> = ({ isOpen, messageModal, children }) => {
  return (
    <ModalUI isOpen={isOpen} className={classes.modal}>
      <ModalContent className="w-fit bg-primary-50">
        <>
          <ModalHeader className="flex flex-col gap-1 text-fonts-secondary border-colors-secondary">
            {messageModal}
          </ModalHeader>
          {children}
        </>
      </ModalContent>
    </ModalUI>
  );
};
