import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { PORT } from './config.js';
import { Recipe } from './models/recipeModel.js';

dotenv.config();

const mongoDbUrl = process.env.MONGO_DB_URL;

const app = express();

app.use(express.json());

app.get('/recipes', async (request, response) => {
  try {
    const recipes = await Recipe.find({});
    return response.status(200).send({ count: recipes.length, data: recipes });
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});

app.get('/recipes/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const recipe = await Recipe.findById(id);
    return response.status(200).send(recipe);
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});

app.post('/recipes', async (request, response) => {
  try {
    const newRecipe = request.body;
    if (!newRecipe.title) {
      return response
        .status(400)
        .send({ message: 'Send all required fields: title' });
    }
    const recipe = await Recipe.create(newRecipe);
    return response.status(201).send(recipe);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.put('/recipes/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Recipe.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).send({ message: 'Recipe not found'});
    }

    return response.status(200).send({ message: 'Recipe update successfully'});
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message});
  }
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
