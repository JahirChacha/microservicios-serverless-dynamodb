// registro-usuario-lambda.js
const { DynamoDBClient, PutCommand } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const ddbDocClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const tableName = "usuarios"; // Reemplaza con el nombre real de tu tabla DynamoDB

exports.handler = async (event, context) => {
  try {
    const usuario = JSON.parse(event.body);

    await ddbDocClient.send(new PutCommand({
      TableName: tableName,
      Item: usuario,
    }));

    return {
      statusCode: 201,
      body: JSON.stringify({ mensaje: "Usuario registrado con éxito" }),
    };

  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ mensaje: "Error interno del servidor", error: error.message }),
    };
  }
};
