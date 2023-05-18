const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const FavoriteExercisesSchema = new Schema({
    name: {
        type: String,
        default: null
    },
    equipment:  {
        type: String,
        default: null
    },
    bodyPart:  {
        type: String,
        default: null
    },
    target:  {
        type: String,
        default: null
    },
    gifUrl: {
        type: String,
        default: null
    },
    id: {
        type: String,
        default: null
    },
    favorite: {
        type: Boolean,
        default: false
    }
});

const FavoriteExercises = model('FavoriteExercises', FavoriteExercisesSchema);

module.exports = FavoriteExercises;