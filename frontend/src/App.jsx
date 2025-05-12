import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const manejarEnvio = async () => {
    if (!nombre.trim()) {
      setError('Ingresa un nombre.');
      setMensaje('');
      return;
    }

    try {
      const respuestaValidacion = await fetch(`http://localhost:3000/validar/${nombre}`);
      const resultado = await respuestaValidacion.json();

      if (resultado.valido) {
        const respuestaSaludo = await fetch(`http://localhost:3000/saludo/${nombre}`);
        const resultadoSaludo = await respuestaSaludo.json();
        setMensaje(resultadoSaludo.mensaje);
        setError('');
      } else {
        setError('Nombre no valido.');
        setMensaje('');
      }
    } catch (err) {
      setError('Error al conectar con el servidor.');
      setMensaje('');
    }
  };

  return (
    <div className="App">
      <h1>Bienvenido</h1>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresa tu nombre"
      />
      <button onClick={manejarEnvio}>Enviar</button>
      {mensaje && <h2>{mensaje}</h2>}
      {error && <p >{error}</p>}
    </div>
  );
}

export default App;
