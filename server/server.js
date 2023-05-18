require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const FavoriteRecipe = require('./models/FavoriteRecipes');
const FavoriteExercises = require('./models/FavoriteExercises')
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

app.get('/api/exercises/favorite', async (req, res) => {
    try {
        const favExercises = await FavoriteExercises.find();
        res.status(200).send(favExercises);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get('/api/nutritions/history', async (req,res) => {
    try{
        const NutritionsHistory = await NutritionHistory.find()
        return res.json(NutritionsHistory);
    } catch (err){
        console.log(err);
    }
})

app.post('/api/nutritions/history', async (req,res)=> {
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

app.delete('/api/nutritions/history', async (req, res) => {
    try {
        const check = await NutritionHistory.findOneAndDelete({name: req.body.name}).exec();
        if (check) {
            res.send(200, "Deleted");
        } else {
        res.send(400, "Error");
        }
    } catch (error) {
        res.send(400, error);
    }
});

app.post('/api/exercises/favorite', async (req, res) => {
    console.log(req.body);
    try {
        const isAdded = await FavoriteExercises.findOne({id: req.body.id}).exec();
        if (!isAdded) {
            FavoriteExercises.create(req.body);
            res.status(200).send('added');
        } else {
            res.status(400).send(error);
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/api/exercises/favorite', async (req, res) => {
    try {
        const isAdded = await FavoriteExercises.findOneAndDelete({id: req.body.id}).exec();
        if (isAdded) {
            res.status(200).send('deleted');
        } else {
            res.status(400).send(error);
        }
    } catch (error) {
        res.status(400).send(error);
    }
});