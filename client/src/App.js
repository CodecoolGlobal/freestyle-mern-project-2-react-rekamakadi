import './App.css';
import './index.css';
import React, { useEffect, useState } from "react";
import RawNutritionsPage from './components/RawNutritionsPage/RawNutritionsPage';

function App() {

  const [RandomSuccessQuote, setRandomSuccessQuote] = useState(null)
  const apiKey = '5FiM/J0BXow467jLI2zg1g==y1jNxvguh47lKVXo';

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=success`, {
      method: 'GET',
      headers: { 'X-Api-Key': apiKey },
      contentType: 'application/json'
    })
      .then(response => response.json())
      .then(result => setRandomSuccessQuote(result))
      .catch(error => console.error('Error:', error));
  },[])

  console.log(RandomSuccessQuote);

  
  return (
    <div className='quote'>
      {RandomSuccessQuote &&<h2>Quote 4 U:</h2>}
      {RandomSuccessQuote &&<h1><br/> "{RandomSuccessQuote[0].quote}"</h1>}
      {RandomSuccessQuote &&<h4>by {RandomSuccessQuote[0].author}</h4>}
    </div>
  );
}



export default App;
