import { Switch, Space } from "antd";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

export const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //     render: (text) => <a>{text}</a>,
  //   },
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
    title: "Enable",
    key: "enable",
    render: (record) => {
      //   const tf = record.enable;
      //   console.log("tf", tf);
      return (
        <>
          <Space size="middle">
            <Switch defaultChecked={record.enabled} onChange={onChange} />
          </Space>
        </>
      );
    },
  },

  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <a>Invite {record.name}</a>
  //         <a>Delete</a>
  //       </Space>
  //     ),
  //   },
];

export const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
