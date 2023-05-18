// UNUSED FILE
// FOR FUTURE CONTENT


//diet
export const DIET_LABELS = [
    "Balanced",
    "High-Fiber",
    "High-Protein",
    "Low-Carb",
    "Low-Fat",
    "Low-Sodium"
];

//health
export const HEALTH_LABELS = [
    "Alcohol-Cocktail ",
    "Alcohol-Free",
    "Celery-Free",
    "Crustcean-Free",
    "Dairy-Free",
    "Egg-Free",
    "Fish-Free",
    "Gluten-Free",
    "Immuno-Supportive",
    "Keto-Friendly",
    "Kidney-Friendly",
    "Kosher",
    "Low Potassium",
    "Low Sugar",
    "Lupine-Free",
    "Mediterranean",
    "Mollusk-Free",
    "Mustard-Free",
    "No oil added",
    "Paleo",
    "Peanut-Free",
    "Pescatarian",
    "Pork-Free",
    "Red-Meat-Free",
    "Sesame-Free",
    "Shellfish-Free",
    "Soy-Free",
    "Sugar-Conscious",
    "Sulfite-Free",
    "Tree-Nut-Free",
    "Vegan",
    "Vegetarian",
    "Wheat-Free"
];

//mealType
export const MEAL_TYPE = [
    "Breakfast",
    "Brunch",
    "Lunch",
    "Dinner",
    "Snack",
    "Teatime"
];

//cuisineType
export const CUISINE_TYPE = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Greek",
    "Indian",
    "Italian",
    "Japanese",
    "Korean",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian",
    "World"
];

//dishType
export const DISH_TYPE = [
    "Alcohol Cocktail",
    "Biscuits and Cookies",
    "bread",
    "cereals",
    "condiments and Sauces",
    "Desserts",
    "Drinks",
    "Egg",
    "Ice cream and custard",
    "Main course",
    "Pancake",
    "Pasta",
    "Pastry",
    "Pies and tarts",
    "Pizza",
    "Preps",
    "Preserve",
    "Salad",
    "Sandwiches",
    "Seafood",
    "Side dish",
    "Soup",
    "Special occasions",
    "Starter",
    "Sweets"
];

export const FILTER_COLLECTION = {
  diet: DIET_LABELS.sort((a,b) => a < b ? -1 : 1),
  health: HEALTH_LABELS.sort((a,b) => a < b ? -1 : 1),
  meal_Type: MEAL_TYPE.sort((a,b) => a < b ? -1 : 1),
  cuisine_Type: CUISINE_TYPE.sort((a,b) => a < b ? -1 : 1),
  dish_Type: DISH_TYPE.sort((a,b) => a < b ? -1 : 1)
}



/*
export const DIET_LABELS = (
    <div className="diet-labels">
        <p>DIET</p>
        Balanced
        <input name="diet_balanced" value="balanced" type="checkbox" ></input>
        High-Fiber
        <input name="diet_high-fiber" value="high-fiber" type="checkbox"></input>
        High-Protein
        <input name="diet_high-protein" value="high-protein" type="checkbox"></input>
        Low-Carb
        <input name="diet_low-carb" value="low-carb" type="checkbox"></input>
        Low-Fat
        <input name="diet_low-fat" value="low-fat" type="checkbox"></input>
        Low-Sodium
        <input name="diet_low-sodium" value="low-sodium" type="checkbox"></input>
    </div>
);

export const HEALTH_LABELS = (
    <div className="health-labels">
        <p>HEALTH</p>
        asd1
        <input name="checkbox1" value="" type="checkbox" ></input>
        asd2
        <input name="checkbox2" value="" type="checkbox"></input>
        asd3
        <input name="checkbox3" value="" type="checkbox"></input>
        asd4
        <input name="checkbox4" value="" type="checkbox"></input>
        asd5
        <input name="checkbox5" value="" type="checkbox"></input>
        asd6
        <input name="checkbox5" value="" type="checkbox"></input>
    </div>
);*/

