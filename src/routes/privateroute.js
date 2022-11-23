import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/userContext";
import { useContext } from "react";

const Privateroute = () => {
  // const auth = localStorage.getItem("token");
  // console.log("auth", auth);
  // return auth ? <Outlet /> : <Navigate to="/login" />;
  const { user } = useContext(UserContext);
  return user || sessionStorage.user ? <Outlet /> : <Navigate to="/login" />;
};

export default Privateroute;
