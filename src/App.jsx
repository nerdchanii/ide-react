import Ide from "./ide/Ide";
import { useState } from "react";
import LeftSide from "./leftside/Leftside";
import Wrapper from "./Wrapper";
function App() {
  const [Locate, setLocate] = useState("WaitingRoom");

  const onChange = (e) => {
    setLocate(Locate === "Problem" ? "WaitingRoom" : "Problem");
  };

  return (
    <div>
      <Wrapper>
        <LeftSide Locate={Locate} onChange={onChange} />
        <Ide />
      </Wrapper>
    </div>
  );
}

export default App;
