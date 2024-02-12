import { FC } from "react";
import classes from "./pagetitle.module.css";

interface PageTitleProps {
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return <p className={`mb-1 ${classes.title}`}>{title}</p>;
};
