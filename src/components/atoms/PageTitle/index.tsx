import { FC } from "react";
import classes from "./pagetitle.module.css";

interface PageTitleProps {
  title: string;
  className?: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title, className }) => {
  return <p className={`mb-1 ${classes.title} ${className}`}>{title}</p>;
};
