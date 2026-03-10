import React , {useState} from 'react';
import AddExerise from './AddExercise/AddExerise';
import DisplayExercise from './DisplayExercise/DisplayExerise';
import "./MainExe.css";

export default function MainExe()
{
  const [ exercises , setexercises] = useState([]);
  const [ handleSearch , setHandleSearch ] = useState("");
  const [ selectedDate , setSelectedDate ] = useState("");

  function addExercise(exercise)
  {
    setexercises([...exercises , exercise]);
  }

  const filteredExercises = exercises.filter((exercise) =>
  {
    const matchesSearch =
      exercise.name.toLowerCase().includes(handleSearch.toLowerCase());

    const matchesDate =
      selectedDate
        ? exercise.date.toISOString().split('T')[0] === selectedDate
        : true;

    return matchesSearch && matchesDate;
  })

  function SearchExercise(searchTerm)
  {
    setHandleSearch(searchTerm);
  }

  return(
    <div className="exercise-dashboard">

      {/* LEFT SIDE */}
      <div className="exercise-form">
        <AddExerise onAddExercise={addExercise}/>
      </div>

      {/* RIGHT SIDE */}
      <div className="exercise-list">
        <DisplayExercise
          exercises={filteredExercises}
          onSearch={SearchExercise}
        />
      </div>

    </div>
  )
}