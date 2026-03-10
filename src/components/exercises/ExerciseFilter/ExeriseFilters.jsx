import React from 'react';
import './ExerciseFilters.css';

export default function ExerciseFilters({ 
    searchTerm,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    selectedDifficulty,
    onDifficultyChange,
    onClearFilters,
    categories = []
}) {
    // Check if any filter is active
    const isFilterActive = searchTerm !== '' || selectedCategory !== '' || selectedDifficulty !== '';

    return (
        <div className="filters-container">
            <div className="filters-header">
                <h3>Filter Exercises</h3>
                {isFilterActive && (
                    <span className="active-filters-badge">Filters Active</span>
                )}
            </div>
            
            <div className="filters-grid">
                <div className="filter-group">
                    <label htmlFor="search">Search:</label>
                    <div className="search-wrapper">
                        <input
                            id="search"
                            type="text"
                            placeholder="Search exercises..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="search-input"
                        />
                        {searchTerm && (
                            <button 
                                className="clear-field-btn"
                                onClick={() => onSearchChange('')}
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}
                    </div>
                </div>

                <div className="filter-group">
                    <label htmlFor="category">Category:</label>
                    <select 
                        id="category"
                        value={selectedCategory} 
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="filter-select"
                    >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label htmlFor="difficulty">Difficulty:</label>
                    <select 
                        id="difficulty"
                        value={selectedDifficulty} 
                        onChange={(e) => onDifficultyChange(e.target.value)}
                        className="filter-select"
                    >
                        <option value="">All Difficulties</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
            </div>

            <div className="filters-actions">
                <button 
                    onClick={onClearFilters} 
                    className="clear-btn"
                    disabled={!isFilterActive}
                >
                    Clear All Filters
                </button>
                
                {isFilterActive && (
                    <div className="active-filters">
                        <span className="active-filters-label">Active filters:</span>
                        {searchTerm && (
                            <span className="filter-tag">
                                Search: "{searchTerm}"
                                <button onClick={() => onSearchChange('')}>×</button>
                            </span>
                        )}
                        {selectedCategory && (
                            <span className="filter-tag">
                                Category: {selectedCategory}
                                <button onClick={() => onCategoryChange('')}>×</button>
                            </span>
                        )}
                        {selectedDifficulty && (
                            <span className="filter-tag">
                                Difficulty: {selectedDifficulty}
                                <button onClick={() => onDifficultyChange('')}>×</button>
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}