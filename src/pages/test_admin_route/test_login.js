import React from "react";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./test.css";

let checkUsername = false;
let checkPassword = false;

const Test_login = () => {
  const [form] = Form.useForm();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // console.log(username);

  useEffect(() => {
    checkUsername = false;
    checkPassword = false;
    if (sessionStorage.user) {
      setUser(sessionStorage.user);
      navigate("/");
    }
    user && navigate("/");
    // eslint-disable-next-line
  }, []);

  const onFinish = (values) => {
    if (
      values?.username &&
      (values?.username === "admin@email.com" ||
        values?.username === "user@email.com")
    ) {
      checkUsername = true;
    } else {
      form.setFields([
        {
          name: "username",
          errors: ["Username error"],
        },
      ]);
      checkUsername = false;
    }
    if (
      values?.password &&
      (values?.password === "admin1234" || values?.password === "user1234")
    ) {
      checkPassword = true;
    } else {
      form.setFields([
        {
          name: "password",
          errors: ["Password error"],
        },
      ]);
      checkPassword = false;
    }
    if (checkPassword && checkUsername) {
      sessionStorage.user =
        values?.username === "admin@email.com" ? "admin" : "user";
      setUser(values?.username === "admin@email.com" ? "admin" : "user");
      navigate("/");
    }
  };

  return (
    <>
      {/* <h2>Sign in</h2>
      <Form
        form={form}
        className="box-form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}

      <Container>
        <Boxcard>
          <Layoutlogo>
            <Logo />
          </Layoutlogo>
          <Layoutlogo>
            <Titletext>Smart Tracking</Titletext>
          </Layoutlogo>
          <Line />

          <form>
            <div style={{ marginTop: "15px" }}>
              <Titleform>ชื่อผู้ใช้</Titleform>

              <Boxform>
                <Inputcs type="text" placeholder="ชื่อผู้ใช้" />
              </Boxform>
            </div>

            <div style={{ marginTop: "10px" }}>
              <Titleform>รหัสผ่าน</Titleform>
              <Boxform>
                <Inputcs type="text" placeholder="รหัสผ่าน" />
              </Boxform>
            </div>

            <input type="checkbox" />
          </form>
        </Boxcard>
      </Container>
    </>
  );
};

export default Test_login;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #537647;
`;

const Boxcard = styled.div`
  width: 540px;
  height: 579px;
  background-color: white;
  border-radius: 50px;
`;

const Layoutlogo = styled.div`
  display: flex;
  justify-content: center;
`;
const Logo = styled.div`
  width: 106px;
  height: 83px;
  background: #3e5835;
  border-radius: 10px;
  margin: 30px;
`;

const Titletext = styled.div`
  font-family: "Prompt";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
`;

const Line = styled.hr`
  border: 1px solid #828282;
  width: 90%;
`;

const Boxform = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* .coln {
    display: flex;
    justify-content: start;
    flex-direction: column;
    margin-bottom: 80px;
  } */
`;

const Inputcs = styled.input`
  margin: 10px;
  width: 75%;
  height: 50px;
  background-color: #e2e1e1;
  border: none;
  border-radius: 10px;
`;

const Titleform = styled.span`
  font-family: "Prompt";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #304f25;
  padding-left: 40px;
  position: relative;
  top: 5px;
  left: 30px;
`;
