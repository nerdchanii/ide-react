import React, { useState } from "react";
import Editor from "./Editor";
import ThemeSelector from "./ThemeSeletor";
import FontSizeSelector from "./FontSizeSelector";
import Keybind from "./Keybind";
import Settings from "./Settings";
import ModeSelector from "./ModeSelector";
import Output from "./Output";

function Ide() {
  const [Setting, setSetting] = useState({
    theme:
      localStorage.getItem("theme") === null
        ? "monokai"
        : localStorage.getItem("theme"),
    mode:
      localStorage.getItem("mode") === null
        ? "c_cpp"
        : localStorage.getItem("mode"),
    font:
      localStorage.getItem("font") === null ? 10 : localStorage.getItem("font"),
    keybind:
      localStorage.getItem("keybind") === null
        ? "vscode"
        : localStorage.getItem("keybind"),
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    localStorage.setItem(name, value);
    setSetting({
      [name]: value,
    });
  };

  return (
    <div className="rightside">
      {/* <problrem. > */}
      <Settings className="settings">
        <ThemeSelector theme={Setting.theme} handleTheme={onChange} />
        <FontSizeSelector font={Setting.font} handleFont={onChange} />
        <Keybind keybind={Setting.keybind} handleKeybind={onChange} />
        <ModeSelector mode={Setting.mode} handleMode={onChange} />
      </Settings>
      <Editor
        mode={Setting.mode}
        theme={Setting.theme}
        font={Setting.font}
        keybind={Setting.keybind}
      />
      <Output />
    </div>
  );
}

export default Ide;
