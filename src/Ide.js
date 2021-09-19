import react, { useState } from "react";
import Editor from "./Editor";
import ThemeSelector from "./ThemeSeletor";
import FontSizeSelector from "./FontSizeSelector";
import Keybind from "./Keybind";
import Settings from "./Settings"

function Ide() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? "monokai"
      : localStorage.getItem("theme")
  );
  const [mode, setMode] = useState("c_cpp");
  const [font, setFont] = useState(10);
  const [keybind, setKeybind] = useState("vscode");

  const changeTheme = (e) => {
    setTheme(e.target.value);
    localStorage.setItem("theme", e.target.value);
  };

  const changeFontSize = (e) => {
    setFont(e.target.value);
    localStorage.setItem("fontSize", e.target.value);
  };

  const chagneKeybind = (e) => {
    setKeybind(e.target.value);
    localStorage.setItem("keybind", e.target.value);
  };

  return (
    <div>
      <Settings className="settings">
        <ThemeSelector theme={theme} setTheme={changeTheme} />
        <FontSizeSelector font={font} setFont={changeFontSize} />
        <Keybind keybind={keybind} setKeybind={chagneKeybind} />
      </Settings>
      <Editor mode={mode} theme={theme} font={font} keybind={keybind} />
    </div>
  );
}

export default Ide;
