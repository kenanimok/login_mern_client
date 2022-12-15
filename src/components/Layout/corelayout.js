import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import Header from "./Header/Header";
import Content from "./Content/Content";
import styled from "styled-components";
const Corelayout = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "#f6f6f6" }}>
      <Sidebar />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "grid",
          gridTemplateRows: "50px auto",
        }}
      >
        <Header />
        <div style={{ padding: "35px", height: "100%", overflow: "auto" }}>
          <Content>
            <Outlet />
          </Content>
        </div>
      </div>
    </div>
  );
};

export default Corelayout;
