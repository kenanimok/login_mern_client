import React from "react";
import { useState } from "react";
import {
  Button,
  Select,
  Modal,
  Checkbox,
  Form,
  Input,
  Alert,
  Space,
} from "antd";
import { updateUser } from "../../core/action/user";
import { error, success } from "./modalalert";
const Modalform = ({ record }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, set_id] = useState(record._id);

  const onFinish = async (values) => {
    const newpass = {
      _id: id,
      password: values.password,
    };
    await updateUser(id, newpass);
    success();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    error();
  };

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        new password
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
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
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => setIsModalOpen(false)}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Modalform;
