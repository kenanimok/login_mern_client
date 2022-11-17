import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const LoadingToredirec = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((curentcount) => --curentcount);
    }, 1000);

    count === 0 && navigate("/");
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <h1> No permission {count} </h1>
    </>
  );
};

export default LoadingToredirec;
