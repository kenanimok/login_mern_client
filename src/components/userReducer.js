export const userReducer = (state = null, action) => {
  //   console.log("action=>", action);
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      localStorage.clear();
    default:
      return state;
  }
};
