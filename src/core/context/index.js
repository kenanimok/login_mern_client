import React from "react";
import { createContext, useContext, useState } from "react";

export const MyGlobalContext = createContext();

export const useGlobalContext = () => useContext(MyGlobalContext);

export const TodoProvider = ({ children }) => {
  const [stastusform, setStatusform] = useState("default");
  //   const { data, setData } = useState();

  //   const value = {
  //     stastusform,
  //     setStatusform,

  //   };

  //   const value = {
  //     data,
  //     setData,
  //   };

  return (
    <MyGlobalContext.Provider value={[stastusform, setStatusform]}>
      {children}
    </MyGlobalContext.Provider>
  );
};
