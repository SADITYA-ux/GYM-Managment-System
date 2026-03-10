import React, { useState } from "react";
import { foodData } from "../FoodData";
import "./FoodList.css";

export default function FoodList({ onAddFood }) {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const categories = ["all", "fruit", "protein", "grain", "dairy", "vegetable"];

  const getCategory = (food) => {
    if (["Apple", "Banana", "Orange", "Strawberries"].includes(food.name))
      return "fruit";
    if (["Chicken Breast", "Salmon", "Egg"].includes(food.name))
      return "protein";
    if (["Rice", "Bread"].includes(food.name)) return "grain";
    if (["Milk", "Cheese"].includes(food.name)) return "dairy";
    if (["Broccoli", "Potato"].includes(food.name)) return "vegetable";
    return "other";
  };

  const filteredFoods = foodData.filter(
    (food) => category === "all" || getCategory(food) === category
  );

  const sortedFoods = [...filteredFoods].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.calories - b.calories;
    }
  });

  return (
    <div className="food-list">
      <div className="list-header">
        <h3>Food Database</h3>
        <div className="list-controls">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="list-select"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="list-select"
          >
            <option value="name">Sort by Name</option>
            <option value="calories">Sort by Calories</option>
          </select>
        </div>
      </div>

      <div className="food-items">
        {sortedFoods.map((food) => (
          <div key={food.id} className="food-list-item">
            <div className="food-details">
              <span className="food-list-name">{food.name}</span>
              <span className="food-list-serving">{food.serving}</span>
              <span className="food-list-calories">{food.calories} cal</span>
            </div>
            <button
              className="list-add-btn"
              onClick={() =>
                onAddFood({
                  ...food,
                  quantity: 1,
                  totalCalories: food.calories
                })
              }
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
