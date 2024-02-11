// aws-config.js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";


// Configura la URL de tu función Lambda
const lambdaUrl = "https://ozmc59mqrf.execute-api.us-east-1.amazonaws.com/register/register";



// Configura las credenciales de IAM
const credentials = {
  accessKeyId: "AKIAVRUVVTDRAF76G6OB", // Reemplaza con tu Access Key ID
  secretAccessKey: "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", // Reemplaza con tu Secret Access Key
};

export const ddbDocClient = DynamoDBDocumentClient.from(
  new DynamoDBClient({
    credentials,
    region: "us-east-1", // Reemplaza con tu región
  })
);

export const tableName = "usuarios"; // Reemplaza con el nombre real de tu tabla DynamoDB
export const apiGatewayUrl = lambdaUrl; // Agrega la URL de tu API Gateway
