import { useEffect, useState } from "react";
import "./NutritionCard.css"

const NutritionFavorites = ({nutritionsFavorites, setNutritionsFavorites}) => {

    const handleDelete = async (par) => {
        const res = await fetch('http://localhost:3001/api/nutritions/history', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: par})
        })
        if(res.ok){
            const index = nutritionsFavorites.findIndex(e=> e.name === par)
            let newNutritionsFav = [...nutritionsFavorites]
            newNutritionsFav.splice(index,1)
            setNutritionsFavorites(newNutritionsFav)
        }
    }


    return (
        <div className="nutrition-card">
        {nutritionsFavorites && nutritionsFavorites.map(nutrition => 
        <div className="fill-data" key={nutrition.name}>
            <div><button onClick={()=> handleDelete(nutrition.name)}>Delete</button></div>
            <div className="nutrition-name"><h2>{nutrition.name.charAt(0).toUpperCase() + nutrition.name.slice(1)}</h2></div>
            <div className="nutrition-calories"><h4>Calories: {nutrition.calories}</h4></div>
            <div className="nutrition-totalfat">Total Fat: {nutrition.fat_total_g}g</div>
            <div className="nutrition-colesterol">Cholesterol: {nutrition.cholesterol}</div>
            <div className="nutrition-sodium">Soduim: {nutrition.sodium_mg}mg</div>
            <div className="nutrition-total-carbohydrates">Total Carbohidrates: {nutrition.carbohydrates_total_g}g</div>
            <div className="nutrition-fiber">Fiber: {nutrition.fiber_g}g</div>
            <div className="nutrition-sugar">Sugar: {nutrition.sugar_g}g</div>
            <div className="nutrition-protein"><h4>Protein: {nutrition.protein_g}g</h4></div>
        </div>
        )}
    </div>
    )

}

export default NutritionFavorites;