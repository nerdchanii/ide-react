import react from "react";
import { themes, themesByName } from "ace-builds/src-noconflict/ext-themelist";

function ThemeSelector({ theme, handleTheme }) {
  // const [wholeTheme, setwholeTheme] = useState('dark')
  
  console.log(themesByName);
  let themeList = Object.keys(themesByName);
  console.log(themes);

  const themeOpt = (opt) => {return <option value={opt}>{opt}</option>}
  return (
    <select name="theme"className="wholeTheme" value={theme} onChange={handleTheme}>
      {themeList.map(themeOpt,themeList)}
    </select>
  );
}

export default ThemeSelector