import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../core/action/auth";
import { useDispatch } from "react-redux";
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
    } catch (err) {
      console.log(err);
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
      <form onSubmit={handleSubmit}>
        username: <input type="text" name="username" onChange={handleChange} />
        password: <input type="text" name="password" onChange={handleChange} />
        <button>sumit</button>
      </form>
    </>
  );
};

export default Login;
