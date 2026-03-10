import React , { useState } from 'react';
import AddMember from './AddMember/AddMember';
import MemberList from './MemberList/MemberList';
import './Mainmem.css';

export default function Mainmem()
{
    const [addMember , setAddMember] = useState([]);
    const [searchTerm , setSearchTerm] = useState("");
    const [ sort , setSort ] = useState("");

    function handleSearch(e)
    {
        setSearchTerm(e.target.value);
    }

    function handleAddMember()
    {
        setAddMember((prevMembers) => [...prevMembers, newMember]);
    }

    function Sorting(e)
    {
        setSort(e.target.value);
    }

    return (
        <>
            <AddMember
                onAdd={handleAddMember} 
            />
            <MemberList
                members={addMember} 
                onSearch={handleSearch}
                searchTerm={searchTerm}
                Sorting={Sorting}
            />
        </>
    )
}