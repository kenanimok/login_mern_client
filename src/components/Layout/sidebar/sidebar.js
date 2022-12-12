import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiFillBulb } from "react-icons/ai";
import { VscOctoface } from "react-icons/vsc";
import { AiFillBank } from "react-icons/ai";
import { Row, Col } from "antd";
import { GiAbstract009 } from "react-icons/gi";
import { AiFillAlert } from "react-icons/ai";

const Sidebar = () => {
  const [toogle, setToogle] = useState(false);

  const ontoogle = () => {
    setToogle(!toogle);
  };

  return (
    <>
      <Sidenav toogle={toogle}>
        <Boxlogo toogle={toogle} onClick={ontoogle}>
          <VscOctoface size={205} />
        </Boxlogo>

        <Menu>
          <Boxmenu>
            <div style={{ marginLeft: "10px" }}>
              <AiFillAlert size={25} style={{ color: "blue" }} />
            </div>
            <Textmenu toogle={toogle}>Dashboard</Textmenu>
          </Boxmenu>
        </Menu>

        <Menu>
          <Boxmenu>
            <div style={{ marginLeft: "10px" }}>
              <GiAbstract009 size={25} />
            </div>
            <Textmenu toogle={toogle}>Dashboard</Textmenu>
          </Boxmenu>
        </Menu>

        <Menu>
          <Boxmenu>
            <div style={{ marginLeft: "10px" }}>
              <AiFillAlert size={25} />
            </div>
            <Textmenu toogle={toogle}>Dashboard</Textmenu>
          </Boxmenu>
        </Menu>

        <Menu>
          <Boxmenu>
            <div style={{ marginLeft: "10px" }}>
              <AiFillAlert size={25} />
            </div>
            <Textmenu toogle={toogle}>Dashboard</Textmenu>
          </Boxmenu>
        </Menu>

        <Menu>
          <Boxmenu>
            <div style={{ marginLeft: "10px" }}>
              <AiFillAlert size={25} />
            </div>
            <Textmenu toogle={toogle}>Dashboard</Textmenu>
          </Boxmenu>
        </Menu>

        <Menu>
          <Boxmenu>
            <div style={{ marginLeft: "10px" }}>
              <AiFillAlert size={25} />
            </div>
            <Textmenu toogle={toogle}>Dashboard</Textmenu>
          </Boxmenu>
        </Menu>
      </Sidenav>
    </>
  );
};

export default Sidebar;
const Sidenav = styled.div`
  width: ${(props) => (props.toogle ? "300px" : `100px`)};
  padding: 6px;
  position: relative;
  background-color: rgb(249, 250, 251);
`;

const Boxlogo = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;

  border-radius: 10px;
  padding: 10px;
  margin: 0px 0px 10px 0px;

  :hover {
    background-color: rgba(145, 158, 171, 0.16);
  }
`;
const Textmenu = styled.div`
  display: ${(porps) => (porps.toogle ? "block" : "none")};

  margin-top: 5px;
  margin-left: 3px;
`;

const Boxmenu = styled.div`
  display: flex;
  margin-left: 10px;
`;
