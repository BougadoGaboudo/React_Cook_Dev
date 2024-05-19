import React from "react";
import Card from "../components/Card";
import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <>
      <main>
        <h1>React Cook</h1>
        <Recipes />
      </main>
    </>
  );
};

export default Home;
