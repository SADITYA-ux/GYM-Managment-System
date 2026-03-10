// CaloriePage.jsx
import React, { useState } from 'react';
import FoodSearch from '../../components/calorie/FoodSearch/FoodSearch';
import FoodList from '../../components/calorie/FoodList/FoodList';
import DailyLog from '../../components/calorie/DailyLog/DailyLog';
import CalorieTotal from '../../components/calorie/CalorieTable/CalorieTotal';
import './CaloriePage.css';

export default function CaloriePage() {
  const [dailyLog, setDailyLog] = useState([]);

  const addToLog = (food) => {
    setDailyLog([...dailyLog, food]);
  };

  const removeFromLog = (index) => {
    setDailyLog(dailyLog.filter((_, i) => i !== index));
  };

  const clearLog = () => {
    setDailyLog([]);
  };

  return (
    <div className="calorie-page">
      <h1>Calorie Tracker</h1>
      
      <div className="calorie-grid">
        <div className="left-column">
          <FoodSearch onAddFood={addToLog} />
          <FoodList onAddFood={addToLog} />
        </div>
        
        <div className="right-column">
          <CalorieTotal log={dailyLog} />
          <DailyLog 
            log={dailyLog} 
            onRemoveItem={removeFromLog}
            onClearLog={clearLog}
          />
        </div>
      </div>
    </div>
  );
}