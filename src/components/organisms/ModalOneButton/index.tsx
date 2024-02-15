import { FC } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { colors } from "../../../types/colors";
import classes from "./modalonebutton.module.css";

interface ModalOneButtonProps {
  isOpen: boolean;
  messageModal: string;
  color: colors;
  onPress: () => void;
  buttonText: string;
}

export const ModalOneButton: FC<ModalOneButtonProps> = ({
  isOpen,
  messageModal,
  color,
  onPress,
  buttonText,
}) => {
  return (
    <Modal isOpen={isOpen} className={classes.modal}>
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
