import { useState } from "react";
import Problem from "./Problem";
import WaitingRoom from "./WaitingRoom";
import "../css/wholeTheme.css";

const LeftSideConatiner = (props) => {
  const {Locate, onChange} = props


  return (
    <div>
      <button onClick={onChange}>change</button>
      <Problem className={Locate === "Problem" ? "showing" : "hidden"} />
      <WaitingRoom className={Locate === "WaitingRoom" ? "showing" : "hidden"} />
    </div>
  );
};

export default LeftSideConatiner;
