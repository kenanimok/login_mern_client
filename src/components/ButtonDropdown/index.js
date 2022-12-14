import { Dropdown, Menu, message, Space } from "antd";
import React from "react";
// import { ButtonContainer } from './buttonDropdown.style'
import styled from "styled-components";

const ButtonDropdown = (props) => {
  const { children, icon, onExportPdf, onExportExel } = props;
  const handleMenuClick = (e) => {
    const { key } = e;
    console.log("click", e);
    if (key === "1") {
      onExportPdf();
      // message.info('Print PDF.')
    } else {
      onExportExel();
      // message.info('Print Excel.')
    }
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Pdf (.pdf)",
          key: "1",
        },
        {
          label: "Excel (.xls)",
          key: "2",
        },
      ]}
    />
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <ButtonContainer>
          <div className="content">
            {icon && <img className="icon" src={icon} alt="icon-report" />}
            <div className="text">{children}</div>
          </div>
        </ButtonContainer>
      </Dropdown>
    </div>
  );
};

export default ButtonDropdown;
const ButtonContainer = styled.button``;
