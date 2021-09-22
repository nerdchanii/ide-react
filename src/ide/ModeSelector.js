import react from 'react';
import modelist from 'ace-builds/src-noconflict/ext-modelist';
const ModeSelector= ({mode, handleMode}) =>{
    // console.log(modelist.modesByName.keys() )
    return(
        <select className="wholeTheme" value={mode} onChange={handleMode}>
            {Object.keys(modelist.modesByName).map((opt)=>{return <option value={opt}>{opt}</option>},Object.keys(modelist.modesByName))}
        </select>
    )

}
export default ModeSelector