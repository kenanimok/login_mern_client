import React from "react";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { currentUser } from "../core/action/auth";
import { useDispatch } from "react-redux";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const idtoken = localStorage.token;
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState(false);

  useEffect(() => {
    getUser();
  }, [userProfile]);

  const getUser = () => {
    if (idtoken) {
      currentUser(idtoken)
        .then((res) => {
          dispatch({
            type: "LOGIN",
            payload: {
              token: idtoken,
              username: res.data.username,
              role: res.data.role,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
      setUserProfile(true);
    } else {
      setUserProfile(false);
      return navigate("/login");
    }
  };

  return <>{userProfile ? <Outlet /> : navigate("/login")}</>;
};

export default ProtectedRoute;
