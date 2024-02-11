// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa el archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <h2>Bienvenido a la Página de Inicio</h2>
      <div className="button-container">
        <Link to="/registro">
          <button>Ir a Registro</button>
        </Link>
        <Link to="/publicaciones">
          <button>Ir a Publicaciones</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
