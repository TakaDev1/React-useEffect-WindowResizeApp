import React from "react";

const DisplayWindowSize = ({ windowWidth }: { windowWidth: number }) => {
  return (
    <div className="bg-blue-800 text-white py-10 px-20">
      <p>幅: {windowWidth}</p>
    </div>
  );
};

export default DisplayWindowSize;
