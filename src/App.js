import './App.css';
import Boton from './componentes/Boton';
import serchteclogo from './imagenes/serchtec-logo.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  //Utilizamos useState que es un hook, para poder aumentar el contador
  //Creamos 2 valores en el arreglo
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {

    //utilizamos la función que creamos en el arreglo y le asignamos como argumento el nuevo valor
    setNumClics(numClics + 1);

  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          className='serch-logo'
          src={serchteclogo}
          alt='Logo de Serch'
        />
      </div>
      <div className='contenedor-principal-contador'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
