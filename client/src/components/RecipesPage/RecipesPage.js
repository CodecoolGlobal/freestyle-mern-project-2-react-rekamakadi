import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import DisplayCards from "./DisplayCards";
import './recipesPage.css';
import RecipeModal from "./RecipeModal";
import Filters from "./Filters";
import { FILTER_COLLECTION } from "./constants";

function RecipesPage() {
    const [searchResults, setSearchResults] = useState(null);
    const [loadedData, setLoadedData] = useState([]);
    const [page, setPage] = useState(0);

    const [activeFilters, setActiveFilters] = useState({});
    const [inactiveFilters, setInactiveFilters] = useState(FILTER_COLLECTION);
    
    const [nextBtn, setNextBtn] = useState(null);
    const maxPage = useRef(0);

    const [showRecipeModal, setShowRecipeModal] = useState(false);
    const [viewRecipeData, setViewRecipeData] = useState([]);


    useEffect(() => {
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

    function handleRemoveFilter(type, filter) {
      const tempActiveFilters = structuredClone(activeFilters);
      const delIndex = tempActiveFilters[type].findIndex(f => f === filter);
      tempActiveFilters[type].splice(delIndex, 1);

      if (tempActiveFilters[type].length < 1) {
        delete tempActiveFilters[type];
      }
      setActiveFilters(tempActiveFilters);

      let newInactiveFilters = structuredClone(inactiveFilters);
      newInactiveFilters[type].push(filter)
      newInactiveFilters[type].sort((a,b) => a < b ? -1 : 1);
      setInactiveFilters(newInactiveFilters);  
    }

    return (
    <div className="recipes-page">
      <div className="detailed-filters">
          <Filters
            filters={activeFilters}
            setFilters={setActiveFilters}
            inactiveFilters={inactiveFilters}
            setInactiveFilters={setInactiveFilters}
          
          />
      </div>
      <div className="search-container">
          <h2 className="page-title">Recipes</h2>
          <SearchBar
              key={"searchBar"}
              updateResults={setSearchResults}
              setLoadedData={setLoadedData}
              filters={activeFilters}
          />
          <button className="show-fav-btn" onClick={showFavs}>Show favorites</button>
          {searchResults ? (
        <>
            <DisplayCards
                key={"searchResult"}
                data={searchResults}
                setShowRecipeModal={setShowRecipeModal}
                setViewRecipeData={setViewRecipeData}
            />
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
        ) : (
          <div>asd</div>
        )}
      </div>

      <div className="active-filters">
          <h2>Active filters</h2>
          {Object.keys(activeFilters).map(filterType => (
            <>
            <h3 key={filterType+"name"} className="filter-type-name">{filterType.split("_").join(" ")}</h3>
            <div key={filterType} className="filter-type">
                {activeFilters[filterType].map(filter => (
                    <span key={filter+"active"} className="filter-bubble active-bubble"
                      onClick={() => handleRemoveFilter(filterType, filter)}
                      >{filter}
                    </span>
                ))}
            </div>
            </>
          ))}
      </div>

        {showRecipeModal && viewRecipeData ? ( <RecipeModal
            key="recipeModal"
            data={viewRecipeData}
            setShowRecipeModal={setShowRecipeModal}
        />
        ) : (
          <div className="modal-placeholder"></div>
        )}
    </div>
    );
}

export default RecipesPage;