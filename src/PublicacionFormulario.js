// PublicacionFormulario.js
import React, { useState } from 'react';
import { ddbDocClient, publicacionTableName, publicacionApiGatewayUrl } from './aws-config-pub';
import { PutCommand } from "@aws-sdk/lib-dynamodb";

const PublicacionFormulario = () => {
  const [publicacion, setPublicacion] = useState({
    titulo: '',
    contenido: '',
    autor: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guardar la publicación en DynamoDB
      await ddbDocClient.send(new PutCommand({
        TableName: publicacionTableName,
        Item: publicacion,
      }));

      console.log('Publicación creada con éxito en DynamoDB:', publicacion);

      // Guardar la publicación en la API Gateway
      const response = await fetch(publicacionApiGatewayUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(publicacion),
      });

      if (response.ok) {
        console.log('Publicación enviada a la API Gateway con éxito:', publicacion);
      } else {
        console.error('Error al enviar la publicación a la API Gateway:', response.statusText);
      }

    } catch (error) {
      console.error('Error al crear la publicación:', error);
    }
  };

  const handleChange = (e) => {
    setPublicacion({
      ...publicacion,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="publicacion-formulario-container">
      <h2>Formulario de Publicación</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" name="titulo" value={publicacion.titulo} onChange={handleChange} />
        </label>
        <br />
        <label>
          Contenido:
          <textarea name="contenido" value={publicacion.contenido} onChange={handleChange} />
        </label>
        <br />
        <label>
          Autor:
          <input type="text" name="autor" value={publicacion.autor} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Crear Publicación</button>
      </form>
    </div>
  );
};

export default PublicacionFormulario;
