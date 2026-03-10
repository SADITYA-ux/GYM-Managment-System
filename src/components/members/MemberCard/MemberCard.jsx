import React from 'react';
import './MemberCard.css';

export default function MemberCard({ members }) 
{

    function RemaningDate(e)
        {
            const CD = new Date();
            const ED = new Date(e);
    
            const TT = ED - CD;
            const RD = Math.ceil( TT / (1000 * 60 *60 * 24) );
    
            return RD;
        }

    return (
        <div className="member-card">
            {members.map ( (member) => 
            (
                <div key = {member.id} className="card">
                    <h3>{member.name}</h3>
                    <p>Email: {member.email}</p>
                    <p>Phone: {member.phone}</p>
                    <p>Membership: {member.membership}</p>
                    <p>Remaining Days: {RemaningDate(member.membership)}</p>
                </div>
            ))}
        </div>
    )
}