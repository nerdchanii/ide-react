import react, { isValidElement } from 'react';
import {render} from 'react-dom'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/keybinding-vim';
import 'ace-builds/src-noconflict/ext-keybinding_menu';
import 'ace-builds/src-noconflict/ext-modelist';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';

function Editor(){
return (
		<div className="editor">
	< AceEditor
  keyboardHandler="vim"
  placeholder="let happy hacking"
  mode="c_cpp"
  theme="monokai"
  name="blah2"
//   onLoad={this.onLoad}
//   onChange={this.onChange}
  fontSize={18}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={``}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }} /> 
		</div>
);


}


export default Editor;



