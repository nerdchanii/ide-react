import react from "react";



function ThemeSelector({ theme, handleTheme }) {
  // const [wholeTheme, setwholeTheme] = useState('dark')
  
  let themeList = Object.keys(themesByName);
  console.log(themes);

  const themeOpt = (opt) => {return <option value={opt}>{opt}</option>}
  return (
    <select className="wholeTheme" value={theme} onChange={handleTheme}>
      {themeList.map(themeOpt,themeList)}
    </select>
  );
}

export default ThemeSelector