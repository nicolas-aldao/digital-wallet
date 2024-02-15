import { Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GENERIC_MESSAGE_ERROR } from "../../../Constants";
import { useGetUsers } from "../../../hooks/useGetUsers";
import { PageTitle } from "../../atoms/PageTitle";
import classes from "./changeuser.module.css";

export const ChangeUser = () => {
  const [value, setValue] = useState("");
  const [users] = useGetUsers();
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
          >
            {users.map((user) => (
              <SelectItem key={user._id} value={user._id}>
                {`${user.firstname} ${user.lastname}`}
              </SelectItem>
            ))}
          </Select>
          <Button
            onClick={() => navigate(`/home/${value}`)}
            disabled={value === ""}
            color="primary"
            className="mt-4 w-fit flex self-center"
          >
            Login
          </Button>
        </>
      )}
      {!users && <p className="flex text-center">{GENERIC_MESSAGE_ERROR}</p>}
    </>
  );
};
