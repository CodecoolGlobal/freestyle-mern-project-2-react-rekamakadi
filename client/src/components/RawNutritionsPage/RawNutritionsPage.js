import React, { useEffect, useState } from "react";
import "./RawNutritionsPage.css"
import NutritionCard from "./NutritionCard";

function RawNutritionsPage() {
    const [result, setResult] = useState('');
    const [Query,setQuery] = useState('');

    
    const apiKey = '5FiM/J0BXow467jLI2zg1g==y1jNxvguh47lKVXo';


    useEffect(() => {
        fetch(`https://api.api-ninjas.com/v1/nutrition?query=${Query}`, {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json'
        })
          .then(response => response.json())
          .then(result => setResult(result))
          .catch(error => console.error('Error:', error));
      },[Query])
   
      function handleSearchInputField(e) {
        //console.log(e.target.value.length)
        if(e.target.value.length > 1){
        setQuery(e.target.value)
        console.log(Query);
        console.log(result)
        }
      }


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
          < NutritionCard result={result}/>
    </div>
    );
}

export default RawNutritionsPage;