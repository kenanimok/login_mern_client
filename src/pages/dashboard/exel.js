import React, { useMemo } from "react";
import { origData, columnsReport } from "./data";

const Excel = () => {
  const newData = [];
  origData.forEach((actoObj) => {
    for (let i = 0; i < 1; i++) {
      newData.push({
        pos: actoObj.pos,
        line_type: "เช้า",
        refund: "450",
        line_voids: "104",
        line_voids1: "58",
        line_voids2: "3333",
      });
      newData.push({
        pos: actoObj.pos,
        line_type: "กลางวัน",
        refund: "520",
        line_voids: "100",
        line_voids1: "99",
        line_voids2: "136/35",
      });
      newData.push({
        pos: actoObj.pos,
        line_type: "เย็น",
        refund: "900",
        line_voids: "67",
        line_voids1: "11",
        line_voids2: "136/35",
      });
    }
  });
  return <></>;
};
export default Excel;
