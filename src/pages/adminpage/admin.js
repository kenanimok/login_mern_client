import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { columns } from "./data";
import { Button, Table } from "antd";
import { listUser } from "../../core/action/user";
import { columns } from "./data";
import Sidebar from "../../components/Layout/sidebar/sidebar";
const Admin = () => {
  const [datauser, setDataUser] = useState();
  const { user } = useSelector((state) => ({ ...state }));

  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const getUser = () => {
    listUser()
      .then((res) => {
        setDataUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
  align-items: center;
  margin-top: 50px;
`;
