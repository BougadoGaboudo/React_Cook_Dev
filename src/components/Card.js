import React from "react";

const Card = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="card">
      <h1>{recipe.strMeal}</h1>
      <h4>Origin : {recipe.strArea}</h4>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default Card;
