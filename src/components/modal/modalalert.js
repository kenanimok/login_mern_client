// import React from "react";
import { Button, Modal, Space } from "antd";

export const error = () => {
  Modal.error({
    title: "This is an error message",
    content: "Please complete the information. ",
  });
};

export const success = () => {
  Modal.success({
    content: "Success Yeye",
  });
};
