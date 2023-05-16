const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const FavoriteRecipesSchema = new Schema({
    calories: {
        type: Number,
        default: 0
    },
    cautions:  {
        type: Array,
        default: []
    },
    cuisineType:  {
        type: Array,
        default: []
    },
    dietLabels:  {
        type: Array,
        default: []
    },
    image: {
        type: String,
        default: null
    },
    images: {
        type: Object,
        default: []
    },
    ingredients: {
        type: Array,
        default: []
    },
    label: {
        type: String,
        default: null
    },
    shareAs: {
        type: String,
        default: null
    },
    mealType: {
        type: Array,
        default: []
    },
    totalWeight: {
        type: Number,
        default: 0
    },
    yield: {
        type: Number,
        default: 0
    }
});

const FavoriteRecipes = model('FavoriteRecipes', FavoriteRecipesSchema);

module.exports = FavoriteRecipes;