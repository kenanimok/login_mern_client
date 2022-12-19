import React from "react";
import { useGlobalContext } from "../../core/context";
import { Button } from "antd";

const Box2 = () => {
  const [stastusform, setStatusform] = useGlobalContext();
  const changeStatus = () => {
    setStatusform("default");
  };

  return (
    <>
      <h1>box2</h1>
      <Button onClick={changeStatus}>clickadd</Button>
    </>
  );
};

export default Box2;
