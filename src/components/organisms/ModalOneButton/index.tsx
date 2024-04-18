import { FC } from "react";
import { Button, ModalFooter } from "@nextui-org/react";
import { colors } from "../../../types/colors";
import { Modal } from "../Modal";

interface ModalOneButtonProps {
  isOpen: boolean;
  messageModal: string;
  color: colors;
  onPress: () => void;
  buttonText?: string;
}

export const ModalOneButton: FC<ModalOneButtonProps> = ({
  isOpen,
  messageModal,
  color,
  onPress,
  buttonText = "Close",
}) => {
  return (
    <Modal isOpen={isOpen} messageModal={messageModal}>
      <ModalFooter>
        <Button color={color} onPress={() => onPress()}>
          {buttonText}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
