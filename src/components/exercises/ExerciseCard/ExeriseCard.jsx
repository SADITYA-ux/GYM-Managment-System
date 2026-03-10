import React , {useState} from 'react';
import './ExerciseCard.css';

export default function ExerciseCard({ exercise , onClick , selectedExercise })
{
    return(
        <div className = "Excards" onClick = { () => onClick(exercise) }>
            <h3>{exercise.name}</h3>
            <p>{exercise.id}</p>
            <p>{exercise.description}</p>
            <p>Duration: {exercise.duration} minutes</p>
            <p>Category: {exercise.category}</p>
        </div>
    )
}   