import React from "react";

const DisplayWindowSize = ({ windowWidth }: { windowWidth: number }) => {
  return (
    <div>
      <p>幅: {windowWidth}</p>
    </div>
  );
};

export default DisplayWindowSize;
