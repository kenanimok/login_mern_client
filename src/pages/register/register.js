import React from "react";
import { useContext, useState } from "react";
import { useGlobalContext } from "../../core/context";
import styled from "styled-components";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import backgroundhelt from "../../components/image/bghelt.png";
import { MyGlobalContext } from "../../core/context";
import { Button } from "antd";
import Form_ctrl from "./form_ctrl/form_ctrl";

const Register = () => {
  const [stastusform, setStatusform] = useGlobalContext();
  const [dataUser, setDataUser] = useState("");

  const changeStatus = () => {
    setStatusform("box2");
  };

  return (
    <Container>
      <LayoutBg></LayoutBg>
      <LayoutForm>
        <h1>สร้างผู้ใช้งาน</h1>
        <Progress />
        <Boxform>
          {stastusform === "default" ? (
            <Form_ctrl />
          ) : stastusform === "box2" ? (
            <Box2 />
          ) : (
            <Box3 />
          )}
        </Boxform>
        <Button onClick={changeStatus}>clickadd</Button>
      </LayoutForm>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LayoutBg = styled.div`
  background-color: red;
  background: url(${backgroundhelt});
  background-size: cover;
`;
const LayoutForm = styled.div`
  /* background-color: green; */
`;

const Progress = styled.div`
  height: 1px;
  width: 100px;
  background-color: green;
`;

const Boxform = styled.div``;
