import { useEffect, useState } from "react";

function RecipeModal({ data, setShowRecipeModal }) {
    const [isFav, setIsFav] = useState(false);
    const [removedFromFav, setRemovedFromFav] = useState(false);
    console.log("modaldata", data);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => document.body.style.overflow = "unset";
    },[]);

    function addToFavorites() {
        fetch('http://localhost:3001/api/recipes/favorite', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.status === 200) {
                setIsFav(true);
                setRemovedFromFav(false);
            }
        })
        .catch(err => console.error("POST error:", err))
    }

    function removeFromFavorites() {
        fetch(`http://localhost:3001/api/recipes/favorite`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({url: data.shareAs})
        })
        .then(res => {
            if (res.status === 200) {
                setIsFav(false);
                setRemovedFromFav(true);
            }
        })
        .catch(err => console.error("DELETE error:", err))
    }

    const allergens = (
        data.cautions.length > 0 ? (
            <>
                <h4>Allergens</h4>
                <div className="modal-allergen-p">
                    {data.cautions.map((allergen) => (
                        <p>{allergen}</p>
                    ))}
                </div>
            </>
        ) : (
            <p>This food has no allergens.</p>
        )
    );

    const favOrRemoved = isFav ? (
        <p><bold>Favorited</bold></p>
    ) : removedFromFav ? (
        <p><bold>Removed from favorites</bold></p>
    ) : (
        <p></p>
    );


    return (
        <div className="modal-overlay" onClick={() => setShowRecipeModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-ingredients">
                    <h4>Ingredients</h4>
                    <div className="modal-ingredients-wrapper">
                        <ul>
                            {data.ingredients.map((ing) => (
                                <li>{ing.text}</li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className="modal-ti">
                    <h2>{data.label}</h2>
                    <img src={data.images.SMALL.url} alt={data.label} />
                    <button onClick={addToFavorites}>☆ Add to favorites</button>
                    <button onClick={removeFromFavorites}>Remove from favorites</button>
                    {favOrRemoved}
                    <a href={data.shareAs} target="_blank" rel="noopener noreferrer">Go to recipe</a>
                </div>
                <div className="modal-misc">
                    {allergens}
                    <h4>Misc</h4>
                    <p>{data.yield} {data.yield > 1 ? "servings" : "serving"}</p>
                    <p>{Math.round(data.calories / data.yield)} calories per serving</p>
                    <p>{Math.round(data.totalWeight / data.yield)}g per serving</p>
                </div>
            </div>
        </div>
    );
}

export default RecipeModal;