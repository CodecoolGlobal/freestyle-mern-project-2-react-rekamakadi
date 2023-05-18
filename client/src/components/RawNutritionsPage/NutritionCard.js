import "./NutritionCard.css"
import NutritionFavorites from "./NutritionFavorites";
export default function NutritionCard({result, setNutritionsFavorites, nutritionsFavorites}) {

    const fetchedData = result;

       
    const fetchFavorites = async () => {
        const res = await fetch('http://localhost:3001/api/nutritions/history')
        const data = await res.json()
        setNutritionsFavorites(data)
    }

    const handleFavClicks = (nutrition) => {
        //console.log(e.target.value)
        const postFetch = async () => {
            try{
                const res = await fetch('http://localhost:3001/api/nutritions/history', {
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify(nutrition)
                })
                //console.log(res);
                if(res.ok){
                    console.log("dikházta");
                    setNutritionsFavorites([...nutritionsFavorites, nutrition])
                    
                } else {
                    console.log("nem dikházta");
                }
                
            } catch (err) {
                console.log(err);
            }
        } 
        postFetch()
    }

return (
    <div className="nutrition-card">
        {fetchedData && fetchedData.map(nutrition => (
        <div className="fill-data">
            <div><button onClick={()=> handleFavClicks(nutrition)} >Favorite Add</button></div>
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
        ))}
    </div>
)
}
