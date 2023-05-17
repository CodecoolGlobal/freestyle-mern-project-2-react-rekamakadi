import { useState } from "react";
//import Filters from "./Filters"; 

function SearchBar ({ updateResults, setLoadedData, filters }) {
    const [loading, setLoading] = useState(false);
    //TODO: LOADING CIRCLE

    function searchRecipes(e) {
        e.preventDefault();
        setLoadedData([]);
        let searchParams = {
            app_id: process.env.REACT_APP_APPID,
            app_key: process.env.REACT_APP_APIKEY,
            type: "public",
            q: e.target.input.value
        };
        
        fetchData(
            process.env.REACT_APP_SEARCH_URL,
            searchParams,
            setLoading,
            updateResults,
            filters
        );
        
    }

    return (
        <div className="search-wrapper">
            <form onSubmit={searchRecipes} className="search-bar">
                <div className="input-field">
                    <input className="input" name="input" placeholder="Search bar" required></input>
                    <button className="icon">🔍</button>
                </div>
            </form>
        </div>
    );
}

function fetchData(url, searchParams, setLoading, updateResults, searchFilters) {
    setLoading(true);
    let fetchURL = url + "?";

    if (Object.keys(searchParams).length > 0) {
        for (const [key, value] of Object.entries(searchParams)) {
            fetchURL += `${key}=${value}&`;
        }
    }

    if (Object.keys(searchFilters).length > 0) {
      for (const [type, filters] of Object.entries(searchFilters)) {
        fetchURL += filters.map(filter => `${type}=${filter.toLowerCase().split(" ").join("-")}&`).join("");
      }
    }

    fetch(fetchURL)
        .then(res => res.json())
        .then(data => {
            updateResults(data);
            setLoading(false);
        })
}

export default SearchBar;