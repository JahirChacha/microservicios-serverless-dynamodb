// aws-config-publicaciones.js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Configura la URL de tu función Lambda para publicaciones
const lambdaUrl = "https://ozmc59mqrf.execute-api.us-east-1.amazonaws.com/register/publicaciones";

// Configura las credenciales de IAM (Reemplaza con tus credenciales)
const credentials = {
    accessKeyId: "AKIAVRUVVTDRAF76G6OB", // Reemplaza con tu Access Key ID
    secretAccessKey: "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",
};

export const ddbDocClient = DynamoDBDocumentClient.from(
  new DynamoDBClient({
    credentials,
    region: "us-east-1", // Reemplaza con tu región
  })
);

export const publicacionTableName = "publicaciones"; // Reemplaza con el nombre real de tu tabla DynamoDB para publicaciones
export const publicacionApiGatewayUrl = lambdaUrl; // Agrega la URL de tu API Gateway para publicaciones
