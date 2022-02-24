import './App.css';
import Main from './components/Main'
import Menu from './components/Menu'
import CatsState from './context/Cats/CatsState' //traer el estado
import ComputersState from './context/Computers/ComputersState'

function App() {
  return (
    <>
      <CatsState>
        <ComputersState>
          <Main />
          <Menu />
        </ComputersState>
      </CatsState>
    </>
    
  );
}

export default App;
