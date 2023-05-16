import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RawNutritionsPage from './components/RawNutritionsPage/RawNutritionsPage.js';
import RecipesPage from './components/RecipesPage/RecipesPage.js';
import WorkoutPage from './components/WorkoutPage/WorkoutPage.js';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function Main() {
  const navigate = useNavigate();
  // a header minden oldalon látható
  return (
    <>
      <div className='header'>
        <div className='nav-btns'>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/recipes')}>Recipes</button>
          <button onClick={() => navigate('/raw-nutritions')}>Nutritions</button>
          <button onClick={() => navigate('/workout')}>Workout</button>
        </div>
      </div>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/raw-nutritions" element={<RawNutritionsPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/workout" element={<WorkoutPage />} />
      </Routes>
    </>
  );
}

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
