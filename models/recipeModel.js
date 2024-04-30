import mongoose from 'mongoose';

const directionSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
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
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  amountLabel: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: false,
  },
});

const recipeSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);
export const Recipe = mongoose.model('Recipe', recipeSchema);
