import react from 'react';

function Keybind({keybind, handleKeybind}){
    const keymap= new Array('vim','vscode','sublime', 'emacs');


    return(
        <select className="wholeTheme" value= {keybind} onChange={handleKeybind}>
            {keymap.map((i)=>{return<option value={i}>{i}</option>}, keymap)}
        </select>

    )

};


export default Keybind