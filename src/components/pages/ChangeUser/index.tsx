import { Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsers } from "../../../hooks/useGetUsers";
import { PageTitle } from "../../atoms/PageTitle";
import classes from "./changeuser.module.css";

export const ChangeUser = () => {
  const [value, setValue] = useState("");
  const [users] = useGetUsers();
  const navigate = useNavigate();

  return (
    <>
      <PageTitle title="Welcome to Digital Wallet App!" className="mb-5" />
      {users && (
        <Select
          label="Select an user"
          className={`max-w-xs ${classes.select}`}
          color="primary"
          onChange={(e) => setValue(e.target.value)}
        >
          {users.map((user) => (
            <SelectItem key={user._id} value={user._id}>
              {`${user.firstname} ${user.lastname}`}
            </SelectItem>
          ))}
        </Select>
      )}
      <Button
        onClick={() => navigate(`/home/${value}`)}
        disabled={value === ""}
        color="primary"
        className="mt-4"
      >
        Login
      </Button>
    </>
  );
};
