import React from "react";
import { useState } from "react";
import { changeEnable } from "../../core/action/user";
import { deletUser } from "../../core/action/user";
import { changeRole } from "../../core/action/user";
import { Button, Select, Modal, Checkbox, Form, Input } from "antd";
import Modalform from "../../components/modal/modalform";
export const columns = [
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
              label: <p onClick={() => changeEnable(record, true)}>อนุมัติ</p>,
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
              label: <p onClick={() => changeRole(record, "admin")}>admin</p>,
            },
            {
              value: "disabled",
              label: <p onClick={() => changeRole(record, "user")}>user</p>,
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
        <Modalform record={record} />
      </>
    ),
  },
  {
    title: "deletuer",
    key: "deletuer",
    render: (_, record) => (
      <>
        <Button type="primary" onClick={() => deletUser(record)}>
          Delete user
        </Button>
      </>
    ),
  },
];
