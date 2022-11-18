import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { data } from "./data";
import {
  Button,
  Table,
  Switch,
  Space,
  Checkbox,
  Dropdown,
  Tag,
  Menu,
  Select,
  Form,
  Input,
  Modal,
  Radio,
} from "antd";
import axios from "axios";
const Admin = () => {
  const [datauser, setDataUser] = useState();
  const { user } = useSelector((state) => ({ ...state }));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a style={{ display: "none" }}>{text}</a>,
    },
    {
      title: "username",
      dataIndex: "username",
      key: "ausernamege",
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "updatedAt",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },

    {
      title: "enabled",
      key: "enabled",
      render: (_, record) => (
        <>
          <Select
            defaultValue={record.enabled === true ? "อนุมัติ" : "ไม่อนุมัติ"}
            style={{
              width: 120,
            }}
            options={[
              {
                value: "undisabled",
                label: (
                  <p onClick={() => changeEnable(record, false)}>ไม่อนุมัติ</p>
                ),
              },
              {
                value: "disabled",
                label: (
                  <p onClick={() => changeEnable(record, true)}>อนุมัติ</p>
                ),
              },
            ]}
          />
        </>
      ),
    },
    {
      title: "role",
      key: "role",
      render: (_, record) => (
        <>
          <Select
            defaultValue={record.role}
            style={{
              width: 120,
            }}
            options={[
              {
                value: "undisabled",
                label: (
                  <p onClick={() => handleChange(record, "admin")}>admin</p>
                ),
              },
              {
                value: "disabled",
                label: <p onClick={() => handleChange(record, "user")}>user</p>,
              },
            ]}
          />
        </>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button type="primary" onClick={() => deletUser(record)}>
            Delete user
          </Button>
        </>
      ),
    },
  ];

  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const getUser = async () => {
    const res = await axios.get("http://localhost:4000/api/listusers");
    console.log("get=>", res);
    const datatb = res.data;
    setDataUser(datatb);
  };

  const handleChange = async (record, role) => {
    console.log("role", record._id, role);
    const data = {
      _id: record._id,
      role: role,
    };
    await axios.put("http://localhost:4000/api/role", data);
  };

  const deletUser = async (record) => {
    const _id = record._id;
    console.log("rec___id", record._id);
    await axios.delete(`http://localhost:4000/api/remove/${_id}`);
  };

  const changeEnable = async (record, stattus) => {
    console.log("statsu", stattus, record._id);
    const data = {
      _id: record._id,
      enabled: stattus,
    };
    await axios.put("http://localhost:4000/api/status", data);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button onClick={logout}>logout</Button>

      <Container>
        <Table columns={columns} dataSource={datauser} />
      </Container>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>
        </Form>
      </Modal>
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
