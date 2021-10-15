import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/keybinding-vscode";
import { Ace } from "ace-builds";
import "../css/wholeTheme.css";

function Editor({ mode, theme, font, keybind }) {
  // 옵션 수정시 반영
  // // const onLoad = () => {
  //   // import(`ace-builds/src-noconflict/theme-${theme}`);
  //   // import(`ace-builds/src-noconflict/mode-${mode}`);
  //   // import(`ace-builds/src-noconflict/keybinding-${keybind}`);
  //   console.log(keybind);
  // };

  function onChange(newVal) {
    localStorage.setItem("code", newVal);
  }
  return (
    <AceEditor
      // style={{ height: "100%" }}
      className="Editor"
      keyboardHandler={keybind}
      placeholder="let happy hacking"
      mode={localStorage.getItem("mode")}
      theme={theme}
      name="Editor"
      // onLoad={onLoad}
      onChange={onChange}
      fontSize={parseInt(font)}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={
        typeof localStorage.getItem("code") === undefined
          ? ""
          : localStorage.getItem("code")
      }
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 4,
      }}
      width="100%"
    />
  );
}

export default Editor;
