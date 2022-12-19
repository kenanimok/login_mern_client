import React from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

const Box1 = ({ dataUser, setDataUser }) => {
  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => setDataUser(e.target.value)}
          value={dataUser}
        />
      </form>
    </>
  );
};

export default Box1;
