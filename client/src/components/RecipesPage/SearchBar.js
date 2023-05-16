import { useState } from "react";
//import Filters from "./Filters"; 

function SearchBar ({ updateResults, setLoadedData }) {
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
            updateResults
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

function fetchData(url, obj, setLoading, updateResults) {
    setLoading(true);
    let fetchURL = url + "?";

    if (Object.keys(obj).length > 0) {
        for (const [key, value] of Object.entries(obj)) {
            fetchURL += `${key}=${value}&`;
            // TODO: fetch URL ends with "&="
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