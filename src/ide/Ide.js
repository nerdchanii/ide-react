import react, { useState } from "react";
import Editor from "./Editor";
import ThemeSelector from "./ThemeSeletor";
import FontSizeSelector from "./FontSizeSelector";
import Keybind from "./Keybind";
import Settings from "./Settings";
import ModeSelector from "./ModeSelector";
import Output from "./Output";

function Ide() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? "monokai"
      : localStorage.getItem("theme")
  );
  const [mode, setMode] = useState(
    localStorage.getItem("mode") === null
    ? "c_cpp"
    : localStorage.getItem("mode")
  );
  const [font, setFont] = useState(
    localStorage.getItem('font') === null
    ? 10
    : localStorage.getItem('font')
  );

  const [keybind, setKeybind] = useState("vscode");

  const changeTheme = (e) => {
    setTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
  };
  const changeMode =(e) =>{
    setMode(e.target.value);
    localStorage.setItem("mode", e.target.value);
  }
  const changeFontSize = (e) => {
    setFont(e.target.value);
    localStorage.setItem("fontSize", e.target.value);
  };

  const chagneKeybind = (e) => {
    setKeybind(e.target.value);
    localStorage.setItem("keybind", e.target.value);
  };

  return (
    <div className="rightside">
      {/* <problrem. > */}
      <Settings className="settings">
        <ThemeSelector  theme={theme} handleTheme={changeTheme} />
        <FontSizeSelector  font={font} handleFont={changeFontSize} />
        <Keybind keybind={keybind} handleKeybind={chagneKeybind} />
        <ModeSelector mode={mode} handleMode={changeMode}/>
      </Settings>
      <Editor mode={mode} theme={theme} font={font} keybind={keybind} />
      <Output />
    </div>
  );
}

export default Ide;
