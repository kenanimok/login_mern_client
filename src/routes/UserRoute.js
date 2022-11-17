import React from "react";
import { useSelector } from "react-redux";
import LoadingToredirec from "./LoadingToredirec";

const UserRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  return user && user.token ? children : <LoadingToredirec />;
};

export default UserRoute;
