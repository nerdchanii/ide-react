import Ide from './ide/Ide';
import react from 'react';
import Problem from './Problem'
import Wrapper from './Wrapper'
function App() {
  return (
    <div>
      <Wrapper>
        <Problem />
        <Ide />
      </Wrapper>
    </div>
  );
}

export default App;
