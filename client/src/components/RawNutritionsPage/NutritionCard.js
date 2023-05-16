import "./NutritionCard.css"
export default function NutritionCard({result}) {
    const fetchedData = result;

return (
    <div className="nutrition-card">
        {fetchedData && fetchedData.map(nutrition => (
        <div className="fill-data">
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
