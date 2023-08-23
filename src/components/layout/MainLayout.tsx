import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="flex-col">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
