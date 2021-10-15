import { useState } from "react";
import Problem from "./Problem";
import WaitingRoom from "./WaitingRoom";
import "../css/wholeTheme.css";

const LeftSideConatiner = (Location) => {
  const [show, setShow] = useState(Location);

  const onchange = (e) => {
    setShow(show === "Problem" ? "WaitingRoom" : "Problem");
  };

  return (
    <div>
      <button onClick={onchange}>change</button>
      <Problem className={show === "Problem" ? "showing" : "hidden"} />
      <WaitingRoom classname={show === "WaitingRoom" ? "showing" : "hidden"} />
    </div>
  );
};

export default LeftSideConatiner;
