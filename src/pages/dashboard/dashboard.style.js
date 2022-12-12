import styled from "styled-components";

export const colors = {
  blues: `linear-gradient(
      135deg,
      rgba(16, 57, 150, 0) 0%,
      rgba(16, 57, 150, 0.24) 100%
    )`,
  sky: `linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)`,
  yellows: `linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)`,
  reds: `linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)`,
};

export const Bgcolor = {
  blues: "rgb(209, 233, 252)",
  sky: "rgb(208, 242, 255)",
  yellows: "rgb(255, 247, 205)",
  reds: "rgb(255, 231, 217)",
};

export const Ftcolor = {
  blues: "rgb(6, 27, 100)",
  yellows: "rgb(122, 79, 1)",
  reds: "rgb(122, 12, 46)",
};

export const ContainerColor = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export const Boxcolor = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: ${(props) => (props.boxcolor ? `${props.boxcolor}` : "")};
  border-radius: 12px;
  margin: 10px;
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Circle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-image: ${(props) => (props.cr ? `${props.cr}` : "")};
  margin: 70px 30px 30px 30px;

  @media only screen and (max-width: 1400px) {
    margin: 100px;
    background-color: yellow;
  }
`;

export const Textbox = styled.div`
  font-size: 34px;
  font-weight: 700;
  color: ${(props) => (props.ftcolor ? `${props.ftcolor}` : "")};
`;

export const Smtext = styled.p`
  margin: 0px 0px 40px 0px;
`;

export const Chartcard = styled.div`
  border-radius: 12px;
  margin: 10px;
  padding: 20px;
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px;
`;

export const ContainerChart = styled.div`
  display: grid;
  grid-template-columns: 3.3fr 1.8fr;
  margin: 10px;
`;
