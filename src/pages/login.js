import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/login", user);
      console.log(res);
      navigate("/admin");
    } catch (err) {
      alert("err");
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
