import axios from "axios";

export const login = async (value) => {
  return await axios.post(process.env.REACT_APP_API + "/login", value);
  // await console.log(res);
};

export const currentUser = async (authtoken) => {
  return await axios.post(
    process.env.REACT_APP_API + "/current-user",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post(
    process.env.REACT_APP_API + "/current-admin",
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
