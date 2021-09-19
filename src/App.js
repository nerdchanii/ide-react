import Ide from './Ide';
import react from 'react';
import Header from './Header'
import Problem from './Problem'
import Wrapper from './Wrapper'
function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Problem />
        <Ide />
      </Wrapper>
    </div>
  );
}

export default App;
