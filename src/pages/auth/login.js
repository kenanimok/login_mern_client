import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../core/action/auth";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { error } from "../../components/modal/modalalert";
import { success } from "../../components/modal/modalalert";
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const roleRedirect = (role) => {
    if (role === "admin") {
      navigate("/admin/index");
    } else {
      navigate("/user/index");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(user);
      console.log(res);
      dispatch({
        type: "LOGIN",
        payload: {
          token: res.data.token,
          username: res.data.payload.user.username,
          role: res.data.payload.user.role,
        },
      });
      localStorage.setItem("token", res.data.token);
      roleRedirect(res.data.payload.user.role);
      success();
    } catch (err) {
      console.log(err);
      error();
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Section>
        <Container>
          <FormBox>
            <Title>Login Form</Title>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
              <Inputbox
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              ></Inputbox>
              <Inputbox
                type="text"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              ></Inputbox>
              <Conbtn>
                <Button onClick={handleSubmit}>Login</Button>
                <Button>Register</Button>
              </Conbtn>
            </form>
          </FormBox>
        </Container>
      </Section>
    </>
  );
};

export default Login;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, rgb(221, 94, 137), rgb(247, 187, 151));
  /* background-image: url("https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"); */

  .box {
    position: relative;
  }
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  min-height: 400px;
  background: #000;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
`;

const FormBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
`;

const Inputbox = styled.input`
  margin-top: 20px;
  height: 50px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 10px 20px;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgb(0 0 0 / 5%);
  outline: none;
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
  ::placeholder {
    color: #fff;
  }
`;

const Conbtn = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  margin: 20px 10px;
  width: 250px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 18px;
`;

const Submit = styled.button`
  margin: 20px 10px;
  width: 250px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 18px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;
