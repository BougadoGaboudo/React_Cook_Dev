import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setData(res.data.meals));
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Recherche"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="recipe-container">
        {data &&
          data
            .slice(0, 24)
            .map((recipe) => <Card key={recipe.idMeal} recipe={recipe} />)}
      </div>
    </>
  );
};

export default Recipes;
