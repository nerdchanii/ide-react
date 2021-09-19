import react from 'react';

function Keybind({keybind, setKeybind}){
    const keymap= new Array('vim','vscode','sublime', 'emacs');


    return(
        <select value= {keybind} onChange={setKeybind}>
            {keymap.map((i)=>{return<option value={i}>{i}</option>}, keymap)}
        </select>

    )

};


export default Keybind