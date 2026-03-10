import Mainmem from "../../components/members/Mainmem";
import './Members.css';

export default function MembersPage() 
{
  return (
    <div className="members-page">
      <div className="members-header">
        <h1>My Members</h1>
        <p className="members-subtitle">
          Track, filter, and manage all your members in one place
        </p>
      </div>
      
      <div className="members-content">
        <Mainmem />
      </div>
    </div>
  );
}