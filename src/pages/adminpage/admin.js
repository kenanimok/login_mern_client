import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { data, columns } from "./data";
import { Table } from "antd";
import axios from "axios";
const Admin = () => {
  const [datauser, setDataUser] = useState();
  console.log("datauser", datauser);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get("http://localhost:4000/api/listusers");
    console.log(res);
    const datatb = res.data;
    setDataUser(datatb);
  };

  return (
    <>
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
