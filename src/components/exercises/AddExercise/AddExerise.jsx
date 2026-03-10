import React , {useState} from 'react';
import './AddExercise.css';

export default function AddExerise({ onAddExercise }) 
{
    const [exercise, setExercise] = useState({
        name: '',
        description: '',
        duration: 0,
        id : crypto.randomUUID(),
        date: new Date(),
        category :""
    });

    function onSubmit(e)
    {
        e.preventDefault();

        const newExercise = 
        {
            name : exercise.name,
            description : exercise.description,
            duration : Number(exercise.duration),
            id : exercise.id,
            date : exercise.date,
            category : exercise.category
        }

        console.log(newExercise);
        onAddExercise(newExercise);

        setExercise(
            {
                name : '',
                description : '',
                duration : 0,
                id : crypto.randomUUID(),
                date : new Date(),
                category : ''
            }
        )
    }

    return(
        <div className = "container">
            <h3>Add New Exercises</h3>
                <form onSubmit = {onSubmit}>
                    <div className = 'Form-group'>
                        <label>Name :</label>
                        <input 
                            type = "text"
                            placeholder="Please enter exercise name"
                            required
                            className = "form-control"
                            value = {exercise.name}
                            onChange = { (e) => setExercise( { ...exercise, name: e.target.value } ) }
                        />

                        <label>Description :</label>
                        <input  
                            type = "text"
                            placeholder="Please enter exercise description"
                            required
                            className = "form-control"
                            value = {exercise.description}
                            onChange = { (e) => setExercise( { ...exercise, description: e.target.value } ) }
                        />

                        <label>Duration (in minutes) :</label>
                        <input  
                            type = "number"
                            placeholder="Please enter exercise duration in minutes"
                            required
                            className = "form-control"
                            value = {exercise.duration}
                            onChange = { (e) => setExercise( { ...exercise, duration: e.target.value } ) }
                        />

                        <label>Category:</label>
                        <select
                            className = "Category-select"
                            value = {exercise.category}
                            onChange = { (e) => setExercise( { ...exercise , category : e.target.value})}
                        >
                            <option value = "chest">Chest</option>
                            <option value = "back">Back</option>
                            <option value = "legs">Legs</option>
                            <option value = "arms">Arms</option>
                            <option value = "shoulders">Shoulders</option>
                            <option value = "cardio">Cardio</option>
                        </select>

                        <button type = "submit" className = "btn btn-primary mt-3">Add Exercise</button>
                    </div>
                </form>
        </div>
    )
}