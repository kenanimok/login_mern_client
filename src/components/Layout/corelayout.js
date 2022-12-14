import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import Header from "./Header/Header";
import Content from "./Content/Content";
import styled from "styled-components";
const Corelayout = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "" }}>
      <Sidebar />
      <Container>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </div>
  );
};

export default Corelayout;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 70px auto;
  height: 100vh;

  @media only screen and (max-width: 1500px) {
    height: auto;
  }
`;
