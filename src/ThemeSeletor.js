import { themes } from 'ace-builds/src-noconflict/ext-themelist';
import react, { useMemo } from 'react';
import Select from "react-select";
import { themesByName } from 'ace-builds/src-noconflict/ext-themelist';
import { valueContainerCSS } from 'react-select/src/components/containers';

function ThemeSelector(){
        function Themelist(){
            let ma = new Array();
            for (let t of themes){
                t_list.push(t['name']);
            };
            return t_list;
        };
    
        // const options = useMemo(()=>[
        //     map((item)=>{value: item; label: item;}, ma)
        // ]


        return(
            <div>
                {/* <Select option={options} /> */}
            </div>

        );
};





export default ThemeSelector;