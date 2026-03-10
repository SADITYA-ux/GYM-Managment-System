import React, { useState } from 'react';
import ExerciseFilters from '../ExerciseFilter/ExeriseFilters';
import ExerciseCard from '../ExerciseCard/ExeriseCard';
import "./DisplayExercise.css";

export default function DisplayExercise({ exercises })
{
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    
    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    function handleExerciseClick(exercise)
    {
        setSelectedExercise(exercise);
        setOpenModal(true);
    }

    function closeModal()
    {
        setOpenModal(false);
        setSelectedExercise(null);
    }

    function clearFilters()
    {
        setSearchTerm('');
        setSelectedCategory('');
        setSelectedDifficulty('');
    }

    // Get unique categories from exercises
    const categories = [...new Set(exercises.map(ex => ex.category))];

    // Filter exercises
    const filteredExercises = exercises.filter((exercise) => {
        const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? exercise.category === selectedCategory : true;
        const matchesDifficulty = selectedDifficulty ? exercise.difficulty === selectedDifficulty : true;
        
        return matchesSearch && matchesCategory && matchesDifficulty;
    });

    return(
        <div className="display-exercise-container">
            <h2>Exercises</h2>
            
            {/* Filters Component */}
            <ExerciseFilters
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedDifficulty={selectedDifficulty}
                onDifficultyChange={setSelectedDifficulty}
                onClearFilters={clearFilters}
                categories={categories}
            />

            {/* Results count */}
            <div className="results-count">
                Showing {filteredExercises.length} of {exercises.length} exercises
            </div>

            {/* Exercise Cards Grid */}
            <div className="exercise-grid">
                {filteredExercises.map((exercise) => (
                    <ExerciseCard 
                        key={exercise.id}
                        exercise={exercise}
                        onClick={handleExerciseClick}
                    />
                ))}
            </div>

            {/* No results message */}
            {filteredExercises.length === 0 && (
                <div className="no-results">
                    No exercises match your filters. Try adjusting your search criteria.
                </div>
            )}

            {/* Details Modal */}
            {openModal && selectedExercise && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>{selectedExercise.name}</h2>
                        
                        <div className="detail-row">
                            <strong>Description:</strong>
                            <p>{selectedExercise.description}</p>
                        </div>
                        
                        <div className="detail-row">
                            <strong>Category:</strong>
                            <p>{selectedExercise.category}</p>
                        </div>
                        
                        <div className="detail-row">
                            <strong>Difficulty:</strong>
                            <p>{selectedExercise.difficulty}</p>
                        </div>
                        
                        <div className="detail-row">
                            <strong>Duration:</strong>
                            <p>{selectedExercise.duration} minutes</p>
                        </div>

                        {selectedExercise.date && (
                            <div className="detail-row">
                                <strong>Date:</strong>
                                <p>{new Date(selectedExercise.date).toLocaleDateString()}</p>
                            </div>
                        )}

                        <button onClick={closeModal} className="close-btn">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}