import express from 'express';
import { PORT } from './config.js';
import dotenv from 'dotenv';

dotenv.config();

const mongoDbAccess = process.env.MONGODB_ACCESS_URL;

const app = express();

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('First route');
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});