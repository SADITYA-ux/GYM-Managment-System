import React, { useState } from 'react';
import { foodData } from '../FoodData';
import './CalorieSearch.css';

export default function FoodSearch({ onAddFood }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState(1);

  const filteredFoods = foodData.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = (food) => {
    onAddFood({
      ...food,
      quantity: quantity,
      totalCalories: food.calories * quantity
    });
    setSearchTerm('');
    setQuantity(1);
  };

  return (
    <div className="food-search">
      <h3>Search Foods</h3>
      <div className="search-input-group">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="quantity-input"
        />
      </div>

      {searchTerm && (
        <div className="search-results">
          {filteredFoods.length > 0 ? (
            filteredFoods.map(food => (
              <div key={food.id} className="food-result-item">
                <div className="food-info">
                  <span className="food-name">{food.name}</span>
                  <span className="food-calories">{food.calories} cal</span>
                  <span className="food-serving">{food.serving}</span>
                </div>
                <button 
                  className="add-btn"
                  onClick={() => handleAdd(food)}
                >
                  Add
                </button>
              </div>
            ))
          ) : (
            <p className="no-results">No foods found</p>
          )}
        </div>
      )}
    </div>
  );
}