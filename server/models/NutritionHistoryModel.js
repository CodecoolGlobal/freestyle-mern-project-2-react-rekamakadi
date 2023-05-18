const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const NutritionHistoryModelSchema = new Schema({
    calories: Number, 
    carbohydrates_total_g: Number, 
    cholesterol_mg: Number, 
    fat_saturated_g: Number,
    fat_total_g: Number,  
    fiber_g: Number,   
    name: String,
    potassium_mg: Number,
    protein_g: Number,
    serving_size_g: Number,
    sodium_mg: Number,
    sugar_g: Number,

})

const NutritionHistory = model('NutritionHistory', NutritionHistoryModelSchema);

module.exports = NutritionHistory;