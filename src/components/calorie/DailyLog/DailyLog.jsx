import React from 'react';
import './DailyLog.css';

export default function DailyLog({ log, onRemoveItem, onClearLog }) {
  const totalCalories = log.reduce((sum, item) => sum + item.totalCalories, 0);

  return (
    <div className="daily-log">
      <div className="log-header">
        <h3>Today's Food Log</h3>
        {log.length > 0 && (
          <button onClick={onClearLog} className="clear-btn">
            Clear All
          </button>
        )}
      </div>

      {log.length === 0 ? (
        <p className="empty-log">No foods added yet. Search and add foods above.</p>
      ) : (
        <>
          <div className="log-items">
            {log.map((item, index) => (
              <div key={index} className="log-item">
                <div className="log-item-info">
                  <span className="log-item-name">{item.name}</span>
                  <span className="log-item-quantity">x{item.quantity}</span>
                  <span className="log-item-calories">{item.totalCalories} cal</span>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveItem(index)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="log-total">
            <span>Total Calories</span>
            <span className="total-calories">{totalCalories} cal</span>
          </div>
        </>
      )}
    </div>
  );
}