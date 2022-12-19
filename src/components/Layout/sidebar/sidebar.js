import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiFillBulb } from "react-icons/ai";
import { VscOctoface } from "react-icons/vsc";
import { AiFillBank } from "react-icons/ai";
import { Row, Col } from "antd";
import { GiAbstract009 } from "react-icons/gi";
import { AiFillAlert } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import "./sideer.css";
const Sidebar = () => {
  const [toogle, setToogle] = useState(false);

  const ontoogle = () => {
    setToogle(!toogle);
  };

  return (
    <Sidenave>
      <div className="sider">
        <div id="main" className="container">
          <div className="row" id="row0"></div>
        </div>
      </div>
      <div className="sider-menu">
        <TextMenu collapAction={toogle}>ssss</TextMenu>
      </div>
    </Sidenave>
  );
};

export default Sidebar;

const Sidenave = styled.div`
  .sider-menu {
    position: relative;
    padding: 10px;
    padding-top: 40px;
    height: 100vh;
    transition: 0.2s;
    width: ${(props) => (props.collapAction ? "70px" : "80px")};
    /* background: linear-gradient(345deg, #59d0da 50%, #00b7ad 62%); */
    background-color: black;
    color: black;
    /* border-top-right-radius: 20px; */
    /* border-bottom-right-radius: 20px; */
    text-align: center;
  }

  .sub-sider-menu {
    transition: 0.2s;
    width: ${(props) => (props.subSiderMenu ? "0px" : "200px")};
    transition: 0.5s;
  }
  .text-menu {
    transition: color 0.2s;
    vertical-align: middle;
    white-space: nowrap;
    border-radius: 10px;
    margin: 10px 0 0 0;
    :hover,
    :focus,
    &.selected {
      background-color: rgba(255, 255, 255, 0.21);
      color: #fff;
    }
    justify-content: ${(props) => (props.toogle ? "center" : "")};
  }

  .arrow {
    right: -16px;
    position: absolute;
    bottom: 45px;
    transition: 0.2s;
    transform: ${(props) =>
      props.collapAction ? "rotate(0deg)" : "rotate(-180deg)"};
  }
`;

const TextMenu = styled.span`
  display: ${(props) => (props.toogle ? "none" : "block")};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
`;

// const BtCollap = styled(Button)`
//   border: none;
//   background: white;
//   color: #00b7ad;
//   :focus,
//   :hover {
//     background-color: white;
//     color: #00b7ad;
//   }
// `;
