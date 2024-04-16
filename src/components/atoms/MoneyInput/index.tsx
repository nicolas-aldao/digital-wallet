import { FC } from "react";
import { Input } from "@nextui-org/react";
import classes from "./moneyinput.module.css";

interface MoneyInputProps {
  value: string;
  onChange: (e: any) => void;
}

export const MoneyInput: FC<MoneyInputProps> = ({ value, onChange }) => {
  return (
    <Input
      type="number"
      className={`p-1 ${classes.input}`}
      label="Price"
      color="primary"
      placeholder="0.00"
      labelPlacement="outside"
      value={value}
      onChange={onChange}
      startContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-small">$</span>
        </div>
      }
    />
  );
};
