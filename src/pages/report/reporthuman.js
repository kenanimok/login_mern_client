import React from "react";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Button, Table } from "antd";
import { listUser } from "../../core/action/user";
import { columns } from "./data";
import { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx-js-style";
import { saveAs } from "file-saver";
import ButtonDropdown from "../../components/ButtonDropdown";
import ReportPdf from "../reportPdf";
import { columnsReport, origData } from "./data";
const Reporthuman = () => {
  const [dataUser, setDatauser] = useState();
  console.log("dataUser ===> ", dataUser);
  const ref = useRef();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    listUser()
      .then((res) => {
        setDatauser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  const newData = [];
  const mockData = () => {
    origData?.forEach((actorObj) => {
      const body = {
        pos: actorObj.pos,
        line_type: "กลางวัน",
        refund: "37.5",
        line_voids: "1111",
        line_voids1: "2222",
        line_voids2: "3333",
      };
      // newData.push({
      //   pos: actorObj.pos,
      //   line_type: "กลางวัน",
      //   refund: "37.5",
      //   line_voids: "1111",
      //   line_voids1: "2222",
      //   line_voids2: "3333",
      // });
      newData.push(body);
      // console.log("body===>", body);
    });
    return newData;
  };
  console.log("mockdata===>", mockData());

  return (
    <>
      <Container>
        <ButtonDropdown
          onExportPdf={handlePrint}
          // onExportExel={() => exportToCSV()}
        >
          ส่งออกข้อมูล
        </ButtonDropdown>
        <Table columns={columns} dataSource={dataUser} />

        {/* <div style={{ display: "none" }}> */}
        <ReportPdf
          reportRef={ref}
          title={"รายงานการบริโภคอาหารรายบุคคลของ ภูริท บุญคงเจริญ"}
          date={"ข้อมูลวันที่ 15 มิถุนายน 2565 ถึง วันที่ 15 กรกฎาคม 2565"}
          // data={mockData()}
          data={dataUser}
          columns={columnsReport}
          type="consumption"
        />
        {/* </div> */}
      </Container>
    </>
  );
};

export default Reporthuman;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
