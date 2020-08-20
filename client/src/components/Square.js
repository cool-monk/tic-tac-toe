import React, { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  return (
    <>
      <div className="cell">{value}</div>
    </>
  );
}

export default Square;
