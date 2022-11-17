import React from "react";
import { useState, useEffect } from "react";
import { currentAdmin } from "../core/action/auth";
import { useSelector } from "react-redux";
import LoadingToredirec from "./LoadingToredirec";
const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);
  useEffect(() => {
    if (user && user.token) {
      currentAdmin(user.token)
        .then((res) => {
          console.log(res);
          setOk(true);
        })
        .catch((err) => {
          console.log(err);
          setOk(false);
        });
    }
  }, [user]);
  return ok ? children : <LoadingToredirec />;
};

export default AdminRoute;
