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
const Sidebar = () => {
  const [toogle, setToogle] = useState(false);

  const ontoogle = () => {
    setToogle(!toogle);
  };

  return (
    <>
      <Sidenav toogle={toogle} onClick={ontoogle}>
        <SDivider>
          <SLinkContainer>
            <SLink to="/dashboard">
              <SLinkIcon>
                <AiOutlineSetting />
              </SLinkIcon>
            </SLink>
          </SLinkContainer>
        </SDivider>
      </Sidenav>
    </>
  );
};

export default Sidebar;
const Sidenav = styled.div`
  /* width: ${(props) => (props.toogle ? "300px" : `100px`)}; */
  width: auto;
  padding: 24px;
  position: relative;
  background-color: black;
  color: white;
  /* height: 100vh; */
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: "rgb(50,50,50)";
  margin: 24px 0;
`;
export const SLinkContainer = styled.div`
  /* background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg3}; */
  border-radius: 6px;
  /* margin: 8px 0; */
  margin: 15px 0;

  :hover {
    box-shadow: inset 0 0 0 1px rgb(50, 50, 50);
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(8px - 2px) 0;
`;

export const SLinkIcon = styled.div`
  padding: 8px 16px;
  display: flex;

  svg {
    font-size: 20px;
  }
`;
