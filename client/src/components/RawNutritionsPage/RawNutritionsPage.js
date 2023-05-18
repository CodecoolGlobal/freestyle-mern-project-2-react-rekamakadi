import React, { useCallback, useEffect, useState } from "react";
import "./RawNutritionsPage.css"
import NutritionCard from "./NutritionCard";
import NutritionFavorites from "./NutritionFavorites";




function RawNutritionsPage() {
    const [result, setResult] = useState('');
    const [Query,setQuery] = useState('');
    const [isFavorites, setIsFavorites] = useState(true)
    const [nutritionsFavorites, setNutritionsFavorites] = useState([]);

    const apiKey = '5FiM/J0BXow467jLI2zg1g==y1jNxvguh47lKVXo';

    
    const fetchFavorites = async () => {
        const res = await fetch('http://localhost:3001/api/nutritions/history')
        const data = await res.json()
        setNutritionsFavorites(data)
    }

    useEffect(() => {
        fetch(`https://api.api-ninjas.com/v1/nutrition?query=${Query}`, {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json'
        })
          .then(response => response.json())
          .then(result => {
              setResult(result)
              console.log(result);
          })
          .catch(error => console.error('Error:', error));
      },[Query])


      

    
    useEffect(()=> {
        fetchFavorites()
    },[])

 /*     
      useEffect(()=> {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3001/api/nutritions/history')
            const data = await res.json()
            setNutritionFavorites(data)
        }
        fetchData()
        .then(console.log("ok"))
    },[])
      
*/
      function handleSearchInputField(e) {
        //console.log(e.target.value.length)
        if(e.target.value.length > 1){
        setQuery(e.target.value)
        console.log(Query);
        console.log(result)
        setIsFavorites(false)
        }
      }

     //console.log(nutritionsFavorites)

    return (

    <div className="nutritions-card">
          <div className="search-nutrition-input">
            <form action="" className="container">
                <div className="input-container">
                    <div className="input-content">
                        <div className="input-dist">
                            <div className="input-type">
                                <div className="input-is"> <h2>Nutritious Search</h2></div>
                                    <div className="inputbox">
                                        <span>Click Me & Type</span>
                                        <input required="required" type="text" onChange={handleSearchInputField} ></input>
                                        <i></i>
                                    </div>                                    
                            </div>
                        </div>
                    </div>
                </div>
            </form>
          </div>
          <button onClick={()=> setIsFavorites(!isFavorites)}>{isFavorites ? "Hide Favorites" : "Show Favorites" }</button>
          {isFavorites ? <NutritionFavorites setNutritionsFavorites={setNutritionsFavorites} nutritionsFavorites={nutritionsFavorites}/>
          : < NutritionCard setNutritionsFavorites={setNutritionsFavorites} nutritionsFavorites={nutritionsFavorites} fetchFavorites={fetchFavorites} result={result}/>}
          
    </div>


    );
}

export default RawNutritionsPage;