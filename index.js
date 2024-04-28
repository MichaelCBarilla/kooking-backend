import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { PORT } from './config.js';

dotenv.config();

const mongoDbUrl = process.env.MONGO_DB_URL;

const app = express();

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('First route');
});

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log('App connected to the DB');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
