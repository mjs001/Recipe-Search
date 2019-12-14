import React from "react";
import style from "./recipe.module.css";
const Recipe = ({
  image,
  title,
  dietLabels,
  totalTime,
  ingredients,
  sourceUrl
}) => {
  return (
    <div className={style.recipe}>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h2>{dietLabels}</h2>
      <h2>Prep Time: {totalTime} minutes</h2>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <small>
        <a href={sourceUrl} target="_blank">
          source
        </a>
      </small>
    </div>
  );
};

export default Recipe;
