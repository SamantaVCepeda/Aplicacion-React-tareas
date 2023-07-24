import freecodeCampLogo from "./img/freecodecamp-logo.png";
import './App.css';
import Tarea from "./componentes/Tarea";

function App() {
  return (
    <div className="App">
      <div className= "freecodecamp-logo-contenedor">
        <img 
        src= {freecodeCampLogo}
        className= "freecodecamp-logo" />
      </div>
      <div className= "tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <Tarea texto= "Aprender React" />
      </div>
    </div>
  );
}

export default App;
