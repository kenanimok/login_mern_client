import React from "react";
import { useContext, useState } from "react";
import { useGlobalContext } from "../../core/context";
import styled from "styled-components";
import backgroundhelt from "../../components/image/bghelt.png";
import { MyGlobalContext } from "../../core/context";
import { Steps, Button, Checkbox, Form, Input } from "antd";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
import LoginRegist from "./formregis/login-regis";
import Profile from "./formregis/progfile";

const Register = () => {
  const [current, setCurrent] = useState(0);
  const [loginDetail, setLoginDetails] = useState();
  const [progfile, setProfile] = useState();
  const [allValues, setAllValues] = React.useState();
  console.log("loginDetail===>", loginDetail);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoginDetails(values);
    setCurrent(1);
  };

  const onFinish_Profile = (values) => {
    setProfile(values);
    setCurrent(2);
  };

  const onValuesChange = (e) => {
    setLoginDetails(e);
  };

  const form = [
    <LoginRegist
      onFinish={onFinish}
      initialValues={loginDetail}
      onValuesChange={onValuesChange}
    />,
    <Profile onFinish={onFinish_Profile} initialValues={progfile} />,
  ];

  return (
    <Container>
      <LayoutBg></LayoutBg>
      <LayoutForm>
        <h1>สร้างผู้ใช้งาน</h1>
        <Progress />
        <Boxform>
          <Steps
            size="small"
            current={current}
            onChange={setCurrent}
            items={[
              {
                title: "Waiting",
              },
              {
                title: "In Progress",
              },

              {
                title: "Finished",
              },
            ]}
          />
          {form[current]}
        </Boxform>
        {/* <Button onClick={changeStatus}>clickadd</Button> */}
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

const Boxform = styled.div`
  padding: 30px;
`;
