import react from "react";
import { themesByName } from "ace-builds/src-noconflict/ext-themelist";

function ThemeSelector({ theme, handleTheme }) {
  let themeList = Object.keys(themesByName);
  const themeOpt = (opt) => {return <option value={opt}>{opt}</option>}
  return (
    <select value={theme} onChange={handleTheme}>
      {themeList.map(themeOpt,themeList)}
    </select>
  );
}

export default ThemeSelector;