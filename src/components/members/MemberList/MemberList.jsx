import React , { useState } from 'react';
import MemberCard from '../MemberCard/MemberCard';
import './MemberList.css';

export default function MemberList({ members , onSearch , searchTerm , Sorting }) 
{
     const filteredMembers = members.filter((member) =>
     member.name.toLowerCase().includes(searchTerm.toLowerCase())
     );

     const sortedMembers = [...filteredMembers].sort((a, b) => 
     {
        if (Sorting === "name")
        {
            return a.name.localeCompare(b.name);
        }
        else if (Sorting === "membership")
        {
            return a.membership.localeCompare(b.membership);
        }
     }
    );
    return(
        <div className = "member-list">
            <input
                type="text"
                placeholder="Search members by name"
                value={searchTerm}
                onChange={onSearch}
            />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Membership</th>
                    </tr>

                    {members.map ( (member) =>
                    (
                        <tr key={member.id}>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.phone}</td>
                            <td>{member.membership}</td>
                        </tr>
                    ))}
                </thead>
            </table>

            <MemberCard
                members = {members}
            />
        </div>
    )
}