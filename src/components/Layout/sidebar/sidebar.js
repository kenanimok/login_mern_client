import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiFillBulb } from "react-icons/ai";
import { VscOctoface } from "react-icons/vsc";

const Sidebar = () => {
  const [toogle, setToogle] = useState(true);

  const ontoogle = () => {
    setToogle(!toogle);
  };

  return (
    <>
      <Sidenav onClick={ontoogle} width={toogle ? "100px" : ""}>
        <VscOctoface size={55} />

        <Boxmenu>
          <Textmenu>
            <AiFillBulb size={35} />
            <Boxtext toogle={toogle}>โครงการ</Boxtext>
          </Textmenu>
          <Textmenu>sdfsdf</Textmenu>
        </Boxmenu>
      </Sidenav>
    </>
  );
};

export default Sidebar;
const Sidenav = styled.div`
  width: ${(props) => (props.width ? "300px" : `${props.width}`)};
  /* background: linear-gradient(345deg, #59d0da 50%, #00b7ad 62%); */
  background: linear-gradient(
      0deg,
      rgba(35, 93, 58, 0.4),
      rgba(35, 93, 58, 0.4)
    ),
    linear-gradient(0deg, rgba(57, 125, 84, 0.37), rgba(57, 125, 84, 0.37)),
    rgba(200, 234, 209, 0.29);
  color: black;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  text-align: center;
  height: 100vh;
`;

const Textmenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? "300px" : `${props.width}`)};
  height: 50px;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 10px;
  margin: 10px;
`;

const Boxmenu = styled.div`
  position: relative;
  top: 20%;
`;

const Boxtext = styled.div`
  display: ${(props) => (props.toogle ? "block" : "none")};
  font-weight: 400;
  font-size: 22px;
  margin: 10px;
`;
