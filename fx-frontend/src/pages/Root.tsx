import { Outlet } from "react-router-dom";
import { ResponsiveAppBar } from "../components/AppBar/AppBar";

export const Root = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
