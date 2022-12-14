import React, { useMemo } from "react";
import { origData, columnsReport } from "./data";

const Excelreport = () => {
  const newData = [];
  origData.forEach((actorObj) => {
    for (let i = 0; i < 1; i++) {
      newData.push({
        pos: actorObj.pos,
        line_type: "เช้า",
        refund: "450",
        line_voids: "104",
        line_voids1: "58",
        line_voids2: "3333",
      });
      //   newData.push({
      //     pos: actorObj.pos,
      //     line_type: "กลางวัน",
      //     refund: "520",
      //     line_voids: "100",
      //     line_voids1: "99",
      //     line_voids2: "136/35",
      //   });
      //   newData.push({
      //     pos: actorObj.pos,
      //     line_type: "เย็น",
      //     refund: "900",
      //     line_voids: "67",
      //     line_voids1: "11",
      //     line_voids2: "136/35",
      //   });
    }
  });

  const data = useMemo(() => newData, []);
  console.log("data=>>", data);
  const columns = useMemo(() => columnsReport, []);
  const tdStyle = {
    padding: "1px",
    border: "1px solid black",
    textAlign: "center",
  };
  const thStyle = { padding: "5px", border: "1px solid black" };

  const getRowsData = (listData) => {
    let keys = listData.reduce((a, e) => {
      let estKey = e["pos"];
      (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
      return a;
    }, {});
    // console.log('keys', keys)
    return Object.keys(keys).map((value) => {
      return keys[value].map((obj, index2) => {
        const data = (({ pos, ...o }) => o)(obj);
        return (
          <tr key={index2}>
            <>
              {index2 === 0 ? (
                <td style={tdStyle} rowSpan={keys[value].length}>
                  {value}
                </td>
              ) : null}
              <>
                {Object.values(data).map((val, index) => {
                  return (
                    <>
                      {index > 1 ? (
                        <td style={tdStyle}>{val}</td>
                      ) : (
                        <td style={tdStyle}>{val}</td>
                      )}
                    </>
                  );
                })}
              </>
            </>
          </tr>
        );
      });
    });
  };

  return (
    <>
      <thead>
        <tr>
          <th colSpan={columns.length}>
            รายงานการตรวจสุขภาพรายบุคคลของ ภูริท บุญคงเจริญ
          </th>
        </tr>
        <tr>
          <th colSpan={columns.length}>
            ข้อมูลวันที่ 15 มิถุนายน 2565 ถึง วันที่ 15 กรกฎาคม 2565
          </th>
        </tr>
        <tr>
          {columns?.map((item, i) => (
            <th style={thStyle} key={i}>
              {item.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{getRowsData(data)}</tbody>
    </>
  );
};
export default Excelreport;
