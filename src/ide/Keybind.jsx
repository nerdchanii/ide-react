
function Keybind({ keybind, handleKeybind }) {
  const keymap = ["vim", "vscode", "sublime", "emacs"];

  return (
    <select name="keybind" className="wholeTheme" value={keybind} onChange={handleKeybind}>
      {keymap.map((i) => {
        return <option value={i}>{i}</option>;
      }, keymap)}
    </select>
  );
}

export default Keybind;
