import './recipesPage.css';

function DisplayCards({ data, setShowRecipeModal, setViewRecipeData }) {
    console.log("displaycards data", data)

    function showModal(recData) {
        setShowRecipeModal(true);
        setViewRecipeData(recData.recipe);
    }

    return (
        <>
        {data.hits.map(rec => (
            <div
            key={rec.recipe.uri}
            className="recipe"
            onClick={() => showModal(rec)}>
                <p>{rec.recipe.label}</p>
                <img
                    alt={rec.recipe.label}
                    src={rec.recipe.images.THUMBNAIL.url}
                />
                
            </div>
        ))}
        </>
    )
}

/*
    return (
        <>
        {data.hits.map(rec => (
            <div key={rec.recipe.calories} className="recipe">
                <p>{rec.recipe.label}</p>
                <a href={rec.recipe.url} target="_blank" rel="noopener noreferrer">
                    <img alt={rec.recipe.label} src={rec.recipe.images.THUMBNAIL.url}/>
                </a>
            </div>
        ))}
        </>
    )

//
    return (
        <>
        {data.hits.map(rec => (
            <div className="recipe">
                <p>{rec.recipe.label}</p>
                <a href={rec.url}>
                    <p>{rec.recipe.source}</p>
                </a>
                <a href={rec.recipe.url}>
                    <img alt={rec.label} src={rec.images.THUMBNAIL.url} target="_blank"/>
                </a>
                <div className="diet">DIET(s)
                    {rec.recipe.dietLabels.map(diet => (
                        <p>diet</p>
                    ))}
                </div>
                <div className="health">
                        {rec.recipe.healthLabels.map(health => (
                            <p>{health}</p>
                        ))}
                </div>
                
            </div>
        ))}
        
        </>
    )
*/

export default DisplayCards;