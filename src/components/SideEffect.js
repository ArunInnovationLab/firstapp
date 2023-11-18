import React, { useEffect, useState } from "react";

const SideEffect = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle
      ? "welcome to litle lemon "
      : "using the use effect hook";
  },[toggle]);
  return (
    <div>
      <h1>using use effect hook</h1>
      <button onClick={clickHandler}>Togle message</button>

      {toggle && <h2>welcome to little lemon</h2>}
    </div>
  );
};

export default SideEffect;
