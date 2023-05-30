import './App.css';
import Father from './components/container/father';
import TaskListComponent from './components/container/task_list.jsx';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo4 from './hooks/Ejemplo4';
import OptionalRender from './pure/OptionalRender';
import GrettingStyled from './pure/grettingStyled';
// import {MiComponenteConContexto} from './hooks/Ejemplo3.jsx'
function App() {
  return (
    <div className="App">
      
        {/* <TaskListComponent/> */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto/> */}
        {/* <Ejemplo4 nombre="Martin"> */}
          {/* Esto es props.children */}
          {/* <h3>Todo esto se pinta en props.children</h3> */}
        {/* </Ejemplo4> */}
        {/* <GrettingStyled nombre="Martin"/> */}
        {/* Gestion de eventos */}
        {/* <Father/> */}
        {/* Ejemplos de renderizado condicional */}
        <OptionalRender/>
    </div>
  );
}

export default App;
