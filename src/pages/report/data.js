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
    title: "enabled",
    dataIndex: "enabled",
    key: "enabled",
    render: (record) => (record === true ? "อนุมัติ" : "ไม่อนุมัติ"),
  },

  {
    title: "updatedAt",
    dataIndex: "updatedAt",
    key: "updatedAt",
  },
];

export const columnsReport = [
  //   {
  //     Header: "วันที่",
  //     accessor: "meal",
  //     enableRowSpan: true,
  //   },
  {
    Header: "ชื่อ",
    accessor: "username",
  },
  {
    Header: "ตำแหน่ง",
    accessor: "role",
  },
  {
    Header: "สถานะ",
    accessor: "enabled",
  },
  //   {
  //     Header: "ไขมัน (g)",
  //     accessor: "fat",
  //   },
  //   {
  //     Header: "โปรตีน (g)",
  //     accessor: "protein",
  //   },
  //   {
  //     Header: "คาร์โบไฮเดรต (g)",
  //     accessor: "line_voids2",
  //   },
];

export const origData = [
  {
    pos: "15/06/2565",
    pos_count: {
      line_type_count: "count",
      refund_count: 1,
      line_voids_count: 1,
    },
    pos_value: {
      line_type_value: "dollar",
      refund_value: 5.25,
      line_voids_value: 12.95,
    },
  },
  {
    pos: "17/06/2565",
    pos_count: {
      line_type_count: "count",
      refund_count: 1,
      line_voids_count: 1,
    },
    pos_value: {
      line_type_value: "dollar",
      refund_value: 3.25,
      line_voids_value: 5.48,
    },
  },
  {
    pos: "18/06/2565",
    pos_count: {
      line_type_count: "count",
      refund_count: 1,
      line_voids_count: 1,
    },
    pos_value: {
      line_type_value: "dollar",
      refund_value: 3.25,
      line_voids_value: 5.48,
    },
  },
  {
    pos: "19/06/2565",
    pos_count: {
      line_type_count: "count",
      refund_count: 1,
      line_voids_count: 1,
    },
    pos_value: {
      line_type_value: "dollar",
      refund_value: 3.25,
      line_voids_value: 5.48,
    },
  },
  //   {
  //     pos: "20/06/2565",
  //     pos_count: {
  //       line_type_count: "count",
  //       refund_count: 1,
  //       line_voids_count: 1,
  //     },
  //     pos_value: {
  //       line_type_value: "dollar",
  //       refund_value: 3.25,
  //       line_voids_value: 5.48,
  //     },
  //   },
  //   {
  //     pos: "30/06/2565",
  //     pos_count: {
  //       line_type_count: "count",
  //       refund_count: 1,
  //       line_voids_count: 1,
  //     },
  //     pos_value: {
  //       line_type_value: "dollar",
  //       refund_value: 3.25,
  //       line_voids_value: 5.48,
  //     },
  //   },
];
