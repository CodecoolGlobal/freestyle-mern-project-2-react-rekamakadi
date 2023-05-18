import './recipesPage.css';

function DisplayCards({ data, setShowRecipeModal, setViewRecipeData }) {

  function showModal(recData) {
    setShowRecipeModal(true);
    setViewRecipeData(recData.recipe);
  }

  if (!data?.hits || data.hits.length === 0) {
    return (
      <h2 className='search-not-found'>No matching recipes found.</h2>
    );
  } 

  return (
    <>
    <div className="results-box">
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
    </div>
    </>
  )
}

export default DisplayCards;