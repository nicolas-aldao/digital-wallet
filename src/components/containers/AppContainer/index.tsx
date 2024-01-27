import { FC, ReactElement } from "react";
import "./appContainer.css";

interface AppContainerProps {
  children: ReactElement;
}

export const AppContainer: FC<AppContainerProps> = ({ children }) => {
  return (
    <div className="outerContainer">
      <div className="wrapper">{children}</div>
    </div>
  );
};
