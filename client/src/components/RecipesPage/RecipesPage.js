import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import DisplayCards from "./DisplayCards";
import './recipesPage.css';
import RecipeModal from "./RecipeModal";



function RecipesPage() {
    const [searchResults, setSearchResults] = useState(null);
    const [loadedData, setLoadedData] = useState([]);
    const [page, setPage] = useState(0);
    
    const [nextBtn, setNextBtn] = useState(null);
    const maxPage = useRef(0);

    const [showRecipeModal, setShowRecipeModal] = useState(false);
    const [viewRecipeData, setViewRecipeData] = useState([]);

    useEffect(() => {
        console.log(searchResults)
        if (searchResults == null) return;
        if (searchResults._links?.next?.href) {
            setNextBtn(searchResults._links.next.href);
        } else {
            setNextBtn(null);
        }
        setLoadedData([...loadedData, searchResults]);
    },[searchResults]);

    function onNext() {
        if (maxPage.current <= page) {
            fetch(nextBtn)
            .then(res => res.json())
            .then(data => setSearchResults(data));
            maxPage.current = page + 1;
        } else {
            setSearchResults(loadedData[page + 1])
        }
        setPage(page + 1);

    }

    function onPrev() {
        setSearchResults(loadedData[page - 1])
        setPage(page - 1);
    }

    function showFavs() {
        fetch('http://localhost:3001/api/recipes/favorite')
        .then(res => res.json())
        .then(data => setSearchResults({hits: data}))
    }

    return (
    <div className="recipes-page">
        <h2 className="page-title">Recipes</h2>
        <SearchBar
            key={"searchBar"}
            updateResults={setSearchResults}
            setLoadedData={setLoadedData}
        />
        <button className="show-fav-btn" onClick={showFavs}>Show favourites</button>
        {searchResults && 
        <>
        <div className="results-box">
            <DisplayCards
                key={"searchResult"}
                data={searchResults}
                setShowRecipeModal={setShowRecipeModal}
                setViewRecipeData={setViewRecipeData}
            />
        </div>
        <div className="pn-btns">
            <button
                disabled={page === 0}
                onClick={onPrev}
                >Prev
            </button>
            <button
                disabled={nextBtn ? false : true}
                onClick={onNext}
                >Next
            </button>
        </div>
        </>
        }
        {showRecipeModal && viewRecipeData && <RecipeModal
            key="recipeModal"
            data={viewRecipeData}
            setShowRecipeModal={setShowRecipeModal}
        />}
    </div>
    );
}

export default RecipesPage;