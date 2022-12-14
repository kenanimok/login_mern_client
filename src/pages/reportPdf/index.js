import React, { useMemo } from "react";
import { Container, Box } from "./report.style";

const ReportPdf = (props) => {
  const { reportRef } = props;
  //   const data = useMemo(() => props?.data, []);
  const data = props?.data;
  console.log("datata", data);

  //   console.log("data====>pdf", data);
  const columns = useMemo(() => props?.columns, []);
  const arrayOfArrays = [];
  const size = 22;
  for (var i = 0; i < data?.length; i += size) {
    // console.log("size====>", (i += size));
    // console.log("iiiii", i);
    arrayOfArrays.push(data.slice(i, i + size));
    console.log("arrayOfArrays===>", arrayOfArrays);
  }

  const getRowsData = (listData) => {
    let keys = listData.reduce((a, e) => {
      let estKey = e["pos"];
      (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
      return a;
    }, {});

    const styleTableTd = {
      color: "#000000",
      height: "30px",
      textAlign: "center",
      border: "1px solid #000",
      backgroundColor: "#fff",
      fontSize: props?.type === "clock" ? "10px" : "12px",
    };

    return Object.keys(keys).map((value) => {
      return keys[value].map((obj, index2) => {
        const data = (({ pos, ...o }) => o)(obj);
        return (
          <tr key={"m" + index2} style={styleTableTd}>
            <>
              {index2 === 0 ? (
                <td style={styleTableTd} rowSpan={keys[value].length}>
                  {value}
                </td>
              ) : null}
              <>
                {Object.values(data).map((val, index) => {
                  return (
                    <>
                      {index > 1 ? (
                        <td style={styleTableTd}>{val}</td>
                      ) : (
                        <td style={styleTableTd}>{val}</td>
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

  //   const getRowsDatas = (listData) => {
  //     console.log("lisdata=>>", listData);
  //     const styleTableTd = {
  //       color: "#000000",
  //       height: "30px",
  //       textAlign: "center",
  //       border: "1px solid #000",
  //       backgroundColor: "#fff",
  //       fontSize: props?.type === "clock" ? "10px" : "12px",
  //     };
  //     const x = listData?.map((item) => {
  //       return (
  //         <tr>
  //           <td style={styleTableTd}>{item}</td>
  //         </tr>
  //       );
  //     });
  //     return x;
  //   };

  const styleTableTd = {
    color: "#000000",
    height: "30px",
    textAlign: "center",
    border: "1px solid #000",
    backgroundColor: "#fff",
    fontSize: props?.type === "clock" ? "10px" : "12px",
  };

  //   const Ken = Object.values(data);
  //   console.log("Ken=====>", Ken);

  return (
    <Container
      ref={reportRef}
      style={{ backgroundColor: "#fff", width: "100%", height: "100%" }}
    >
      {/* {arrayOfArrays?.map((rowItem, indexKey) => {
        return (
          <Box
            key={indexKey}
            style={{
              width: "100%",
              height: "100%",
              padding:
                props?.type === "clock"
                  ? "5px 40px 50px 10px"
                  : "5px 100px 50px 50px",
              color: "#000",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "15px",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              <div>{props?.title}</div>
              <div>{props?.date}</div>
            </div>
            <table style={{ width: "100%", border: "1px solid #000" }}>
              <thead>
                <tr style={{ border: "1px solid #000" }}>
                  {columns?.map((item, i) => (
                    <th
                      style={{
                        border: "1px solid #000",
                        fontSize: props?.type === "clock" ? "10" : "12px",
                        fontWeight: "400",
                      }}
                      key={"n" + i}
                    >
                      {item.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody
                style={{
                  border: "1px solid #000",
                  fontSize: props?.type === "clock" ? "10" : "12px",
                  fontWeight: "400",
                }}
              >
              

              </tbody>
            </table>
          </Box>
        );
      })} */}

      <Box
        style={{
          width: "100%",
          height: "100%",
          padding:
            props?.type === "clock"
              ? "5px 40px 50px 10px"
              : "5px 100px 50px 50px",
          color: "#000",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "15px",
            fontSize: "12px",
            fontWeight: "400",
          }}
        >
          <div>{props?.title}</div>
          <div>{props?.date}</div>
        </div>
        <table style={{ width: "100%", border: "1px solid #000" }}>
          <thead>
            <tr style={{ border: "1px solid #000" }}>
              {columns?.map((item, i) => (
                <th
                  style={{
                    border: "1px solid #000",
                    fontSize: props?.type === "clock" ? "10" : "12px",
                    fontWeight: "400",
                  }}
                  key={"n" + i}
                >
                  {item.Header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            style={{
              border: "1px solid #000",
              fontSize: props?.type === "clock" ? "10" : "12px",
              fontWeight: "400",
            }}
          >
            {arrayOfArrays[0]?.map((item, index) => {
              return (
                <tr>
                  <td style={styleTableTd}>{index + 1}. </td>

                  <td style={styleTableTd}>{item?.username}</td>
                  <td style={styleTableTd}>{item?.role}</td>
                  <td style={styleTableTd}>
                    {item?.enabled === true ? "อนุุมัติ" : "ไม่"}
                  </td>
                </tr>
              );
            })}
            {/* <td>sdsdf</td> */}
          </tbody>
        </table>
      </Box>
    </Container>
  );
};

export default ReportPdf;
