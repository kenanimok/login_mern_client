import React from "react";
import { useState } from "react";
import { Button, Select, Modal, Checkbox, Form, Input } from "antd";
import axios from "axios";
const Modalform = ({ record }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, set_id] = useState(record._id);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = async (values) => {
    const newpass = {
      _id: id,
      password: values.password,
    };

    console.log("newpass", newpass);

    const res = await axios.put(
      "http://localhost:4000/api/update/" + id,
      newpass
    );
    console.log("res", res);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        new password
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
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
            username: record.username,
            // password: record.password,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="username" name="username">
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
            wrapperCol={{
              offset: 20,
              span: 25,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={handleOk}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Modalform;
