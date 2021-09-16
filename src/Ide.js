import react from 'react';
import Editor from './Editor';
import ThemeSelector from './ThemeSeletor';

function Ide() {
    return(
        <div>
            <ThemeSelector />
            <Editor />
        </div>

    );


}

export default Ide;