import mongoose from 'mongoose';

const directionSchema = new mongoose.Schema({
  directionText: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  amountType: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  }
});

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  servings: {
    type: Number,
    required: false,
  },
  caloriesPerServing: {
    type: Number,
    required: false,
  },
  totalMinutes: {
    type: Number,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  ingredients: [ingredientSchema],
  directions: [directionSchema],
});
export const recipe = mongoose.model('Recipe', recipeSchema);
