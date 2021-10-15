import Ide from "./ide/Ide";
import { useState } from "react";
import LeftSide from "./leftside/Leftside";
import Wrapper from "./Wrapper";
function App() {
  const [userLocation, setuserLocation] = useState("waitingRoom");
  return (
    <div>
      <Wrapper>
        <LeftSide userLocate={userLocation} />
        <Ide />
      </Wrapper>
    </div>
  );
}

export default App;
