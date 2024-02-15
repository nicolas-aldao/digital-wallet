import { FC } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import classes from "./modalonebutton.module.css";

interface ModalOneButtonProps {
  isOpen: Boolean;
  messageModal: String;
  color: String;
  onPress: () => void;
  buttonText: String;
}

export const ModalOneButton: FC<ModalOneButtonProps> = ({
  isOpen,
  messageModal,
  color,
  onPress,
  buttonText,
}) => {
  return (
    <Modal isOpen={isOpen ? isOpen : false} className={classes.modal}>
      <ModalContent className="w-fit bg-primary-50">
        <>
          <ModalHeader className="flex flex-col gap-1 text-fonts-secondary border-colors-secondary">
            {messageModal}
          </ModalHeader>
          <ModalFooter>
            <Button color={color} onPress={() => onPress()}>
              {buttonText}
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};
