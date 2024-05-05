import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function Root() {
  return (
    <>
      <Navbar />
      <div id="body">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
