import axios from "axios";

export const listUser = async (authtoken) => {
  return await axios.get(process.env.REACT_APP_API + "/listusers", {
    headers: {
      authtoken,
    },
  });
};
