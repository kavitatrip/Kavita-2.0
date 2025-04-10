import React from "react";
import SideMenuBar from "./SideMenuBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <SideMenuBar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
