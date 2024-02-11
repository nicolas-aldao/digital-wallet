import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTransfer } from "../../../hooks/useTransfer";

export const Transfer = () => {
  const user = useSelector((state: any) => state.user.value);
  const { id } = useParams();
  const [amount, setAmount] = useState<number>(0);
  const [runHook, setRunHook] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { response, errorMessage } = useTransfer(
    user?._id,
    id!,
    amount,
    runHook
  );

  useEffect(() => {
    if (response) setIsOpen(true);
    if (errorMessage) console.log("errorMessage ", errorMessage);
  }, [response, errorMessage]);

  return (
    <>
      <p>Transfer Page</p>
      <Input
        type="number"
        className="p-5"
        label="Price"
        color="primary"
        placeholder="0.00"
        labelPlacement="outside"
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
        onClick={() => {
          setRunHook(true);
        }}
      >
        Transfer
      </Button>
      <Modal
        isOpen={isOpen}
        // onOpenChange={onOpenChange}
      >
        <ModalContent className="w-fit bg-primary-50">
          {/* {(onClose) => ( */}
          <>
            <ModalHeader className="flex flex-col gap-1 text-fonts-secondary border-colors-secondary">
              Successful transfer!
            </ModalHeader>
            {/* <ModalBody>
                <p className="text-fonts-primary">Successful transfer</p>
              </ModalBody> */}
            <ModalFooter>
              <Button color="success" onPress={() => navigate("/")}>
                Close
              </Button>
            </ModalFooter>
          </>
          {/* )} */}
        </ModalContent>
      </Modal>
    </>
  );
};
