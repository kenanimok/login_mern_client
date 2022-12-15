import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Table } from "antd";
import { listUser } from "../../core/action/user";
import { columns } from "./data";
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
        {/* <Boxglass /> */}
      </Container>
    </>
  );
};

export default Admin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Boxglass = styled.div`
  width: 500px;
  height: 500px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`;
