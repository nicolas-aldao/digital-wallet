import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { useGetUsers } from "../../../hooks/useGetUsers";
import { PageTitle } from "../../atoms/PageTitle";
import { Modal } from "../../organisms/Modal";
import classes from "./changeuser.module.css";

export const ChangeUser = () => {
  const { users, isLoading, errorMessage } = useGetUsers();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <PageTitle
        title="Welcome to Digital Wallet App!"
        className="mb-10 flex self-center"
      />
      {users && (
        <>
          <p className="mb-3">Select an user to test the demo:</p>
          <Select
            className={`max-w-xs ${classes.select}`}
            color="default"
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Selected User"}
            isLoading={isLoading}
          >
            {users?.map((user) => (
              <SelectItem key={user._id} value={user._id}>
                {`${user.firstname} ${user.lastname}`}
              </SelectItem>
            ))}
          </Select>
          <Button
            onClick={() => navigate(`/home/${value}`)}
            isDisabled={value === ""}
            color="primary"
            className="mt-4 w-fit flex self-center"
          >
            Login
          </Button>
        </>
      )}
      {!users ||
        (errorMessage && (
          <Modal isOpen={errorMessage !== ""} messageModal={errorMessage} />
        ))}
    </>
  );
};
