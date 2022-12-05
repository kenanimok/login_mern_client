import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import Header from "./Header/Header";
import Content from "./Content/Content";
const Corelayout = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "#f6f6f6" }}>
      <Sidebar />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "grid",
          gridTemplateRows: "70px auto",
        }}
      >
        <Header />

        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  );
};

export default Corelayout;
