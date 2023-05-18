require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const FavoriteRecipe = require('./models/FavoriteRecipes');
const NutritionHistory = require('./models/NutritionHistoryModel');

const app = express();
const port = 3001;

mongoose.connect(process.env.DB_CONNECT_PATH)
.then(() => app.listen(port, () => console.log("Running on", port)))
.catch((err) => console.error(err))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});


app.get('/api/recipes/favorite', async (req, res) => {
    try {
        const allFavs = await FavoriteRecipe.find();
        const data = allFavs.map(fav => ({recipe: fav}))
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send("GET error");
    }
})

app.post('/api/recipes/favorite', async (req, res) => {
    try {
        const check = await FavoriteRecipe.findOne({shareAs: req.body.shareAs}).exec();
        if (!check) {
            FavoriteRecipe.create(req.body);
            res.send(200, "Done");
        } else {
        res.send(400, "Error");
        }
    } catch (error) {
        res.send(400, error);
    }
});

app.delete('/api/recipes/favorite', async (req, res) => {
    try {
        const check = await FavoriteRecipe.findOneAndDelete({shareAs: req.body.url}).exec();
        if (check) {
            res.send(200, "Deleted");
        } else {
        res.send(400, "Error");
        }
    } catch (error) {
        res.send(400, error);
    }
});

app.get('/api/recipes/favorite', (req, res) => {

})

app.get('/api/nutritions/history', async (req,res) => {
    try{
        const NutritionsHistory = await NutritionHistory.find()
        return res.json(NutritionsHistory);
    } catch (err){
        console.log(err);
    }
})

app.post('/api/nutrutions/history', async (req,res)=> {
    try {
        const check = await NutritionHistory.findOne({name: req.body.name}).exec();
        if (!check) {
            NutritionHistory.create(req.body);
            res.send(200, "Done");
        } else {
        res.send(400, "Error");
        }
    } catch (error) {
        res.send(400, error);
    }
})