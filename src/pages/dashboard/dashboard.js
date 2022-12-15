import React from "react";
import styled from "styled-components";
import { FaAndroid, FaApple, FaWindows, FaFire } from "react-icons/fa";
import Mixcharts from "../../components/chart/mixchart/mixchart";
import {
  ContainerColor,
  Boxcolor,
  Circle,
  Textbox,
  Chartcard,
  ContainerChart,
  Smtext,
} from "./dashboard.style";

import { colors, Bgcolor, Ftcolor } from "./dashboard.style";
import Donutchart from "../../components/chart/piechart/piechart";
const Dashboard = ({ height }) => {
  return (
    <div style={{ height: height ? height : "" }}>
      <ContainerColor>
        <Boxcolor boxcolor={Bgcolor.blues}>
          <Circle cr={colors.blues}>
            <FaAndroid size={30} color={Ftcolor.blues} />
          </Circle>
          <Textbox ftcolor={Ftcolor.blues}>714k</Textbox>
          <Smtext>New Users</Smtext>
        </Boxcolor>

        <Boxcolor boxcolor={Bgcolor.sky}>
          <Circle cr={colors.sky}>
            <FaApple size={30} color={Ftcolor.blues} />
          </Circle>
          <Textbox ftcolor={Ftcolor.blues}>714k</Textbox>
          <Smtext>New Users</Smtext>
        </Boxcolor>

        <Boxcolor boxcolor={Bgcolor.yellows}>
          <Circle cr={colors.yellows}>
            <FaWindows size={30} color={Ftcolor.yellows} />
          </Circle>
          <Textbox ftcolor={Ftcolor.yellows}>714k</Textbox>
          <Smtext>New Users</Smtext>
        </Boxcolor>

        <Boxcolor boxcolor={Bgcolor.reds}>
          <Circle cr={colors.reds}>
            <FaFire size={30} color={Ftcolor.reds} />
          </Circle>
          <Textbox ftcolor={Ftcolor.reds}>714k</Textbox>
          <Smtext>New Users</Smtext>
        </Boxcolor>
      </ContainerColor>

      <ContainerChart>
        <Chartcard>
          <Mixcharts />
        </Chartcard>

        <Chartcard>
          <Donutchart />
        </Chartcard>
      </ContainerChart>

      <ContainerChart>
        <Chartcard>
          <Mixcharts />
        </Chartcard>

        <Chartcard>
          <Donutchart />
        </Chartcard>
      </ContainerChart>

      <ContainerChart>
        <Chartcard>
          <Mixcharts />
        </Chartcard>

        <Chartcard>
          <Donutchart />
        </Chartcard>
      </ContainerChart>
    </div>
  );
};

export default Dashboard;
