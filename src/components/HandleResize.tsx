import React, { useEffect, useState } from "react";
import DisplayWindowSize from "./DisplayWindowSize";

const HandleResize = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("リスナーを解除しました");
    };
  }, []);
  return (
    <div>
      <DisplayWindowSize windowWidth={windowWidth} />
    </div>
  );
};

export default HandleResize;
