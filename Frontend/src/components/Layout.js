import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div>
        <Header />

        <div className="grid grid-cols-12 ">
          <div className="grid col-span-2 ">
            <Sidebar />
          </div>

          <div className="grid grid-flow-col col-span-10 ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
