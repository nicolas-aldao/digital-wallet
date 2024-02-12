import { Button, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsers } from "../../../hooks/useGetUsers";
import classes from "./changeuser.module.css";

export const ChangeUser = () => {
  const [value, setValue] = useState("");
  const [users] = useGetUsers();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("val ", value);
  }, [value]);

  return (
    <>
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
        className="mt-4"
      >
        Login
      </Button>
    </>
  );
};
