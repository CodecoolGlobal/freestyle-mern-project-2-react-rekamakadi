import './recipesPage.css';

function DisplayCards({ data, setShowRecipeModal, setViewRecipeData }) {

  function showModal(recData) {
      setShowRecipeModal(true);
      setViewRecipeData(recData.recipe);
  }

  if (!data?.hits) {
    return (
      <h2>No matching recipes found.</h2>
    );
  }

  return (
    <>
    {data?.hits && data.hits.map(rec => (
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

export default DisplayCards;