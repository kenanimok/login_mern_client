import axios from "axios";

export const listUser = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/listusers", {
    headers: {
      authtoken,
    },
  });
};

export const changeRole = async (record, role, authtoken) => {
  const data = {
    _id: record._id,
    role: role,
  };
  console.log("data", data);
  return await axios.put(process.env.REACT_APP_API + "/role", data, {
    headers: {
      authtoken,
    },
  });
};

export const changeEnable = async (record, status) => {
  const data = {
    _id: record._id,
    enabled: status,
  };
  return await axios.put(process.env.REACT_APP_API + "/status", data);
};

export const deletUser = async (record) => {
  const _id = record._id;
  return await axios.delete(process.env.REACT_APP_API + "/remove/" + _id);
};
