// RegistroFormulario.js
import React, { useState } from 'react';
import { ddbDocClient, tableName } from './aws-config';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import { PutCommand } from '@aws-sdk/lib-dynamodb';
import './App.css';

const RegistroFormulario = () => {
  const navigate = useNavigate(); // Utiliza useNavigate para obtener la función de navegación
  const [usuario, setUsuario] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ddbDocClient.send(new PutCommand({
        TableName: tableName,
        Item: usuario,
      }));

      console.log('Usuario registrado con éxito:', usuario);
      navigate('/publicaciones'); // Utiliza la función navigate para redirigir

    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="registro-formulario-container">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={usuario.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={usuario.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={usuario.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroFormulario;
