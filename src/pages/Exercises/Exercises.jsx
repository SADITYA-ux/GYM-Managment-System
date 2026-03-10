import MainExe from "../../components/exercises/MainExe";
import './Exercises.css';

export default function ExercisesPage() {
  return (
    <div className="exercises-page">
      <div className="exercises-header">
        <h1>My Exercises</h1>
        <p className="exercises-subtitle">
          Track, filter, and manage all your exercises in one place
        </p>
      </div>
      
      <div className="exercises-content">
        <MainExe />
      </div>
    </div>
  );
}