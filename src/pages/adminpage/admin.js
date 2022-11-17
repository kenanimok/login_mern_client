import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { data, columns } from "./data";
import { Button, Table } from "antd";
import axios from "axios";
const Admin = () => {
  const [datauser, setDataUser] = useState();
  const dispatch = useDispatch;
  const { user } = useSelector((state) => ({ ...state }));

  const navigate = useNavigate();
  console.log("datauser", datauser);
  useEffect(() => {
    getUser();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const getUser = async () => {
    const res = await axios.get("http://localhost:4000/api/listusers");
    console.log(res);
    const datatb = res.data;
    setDataUser(datatb);
  };

  return (
    <>
      <Button onClick={logout}>logout</Button>

      <Container>
        <Table columns={columns} dataSource={datauser} />
      </Container>
    </>
  );
};

export default Admin;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-content: center; */
  align-items: center;
  margin-top: 50px;
`;
