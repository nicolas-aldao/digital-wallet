import { Outlet } from "react-router-dom";
import { AppContainer } from "./components/containers/AppContainer/index";

export const App = () => {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};
