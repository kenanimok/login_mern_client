import React from "react";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

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
      <h2>Sign in</h2>
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
      </Form>
    </>
  );
};

export default Test_login;
