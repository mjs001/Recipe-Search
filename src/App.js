import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
function App() {
  const APP_ID = "5be1d12a";
  const APP_KEY = "2f4d229c7d30609194ffff438a463799";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <nav class="navbar navbar-inverse">
        <a class="navbar-brand" href="#">
          Home
        </a>
        <p class="navbar-text">sturfrying</p>
      </nav>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="box">
        {recipes.map(recipe => (
          <Recipe
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            dietLabels={recipe.recipe.dietLabels}
            totalTime={recipe.recipe.totalTime}
            ingredients={recipe.recipe.ingredients}
            sourceUrl={recipe.recipe.url}
            key={recipe.recipe.totalWeight}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
