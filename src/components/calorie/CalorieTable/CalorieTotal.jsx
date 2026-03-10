import React from 'react';
import './CalorieTotal.css';

export default function CalorieTotal({ log, dailyGoal = 2000 }) {
  const totalCalories = log.reduce((sum, item) => sum + item.totalCalories, 0);
  const remaining = Math.max(0, dailyGoal - totalCalories);
  const percentage = Math.min(100, Math.round((totalCalories / dailyGoal) * 100));

  return (
    <div className="calorie-total">
      <div className="total-header">
        <h3>Daily Summary</h3>
        <span className="items-count">{log.length} items</span>
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-label">Consumed</span>
          <span className="stat-value consumed">{totalCalories}</span>
          <span className="stat-unit">cal</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Goal</span>
          <span className="stat-value goal">{dailyGoal}</span>
          <span className="stat-unit">cal</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Remaining</span>
          <span className="stat-value remaining">{remaining}</span>
          <span className="stat-unit">cal</span>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-label">
          <span>Progress</span>
          <span>{percentage}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {percentage >= 100 && (
        <div className="goal-message warning">
          ⚠️ Daily goal reached!
        </div>
      )}

      {percentage >= 90 && percentage < 100 && (
        <div className="goal-message nearly">
          ⏳ Close to your goal!
        </div>
      )}
    </div>
  );
}