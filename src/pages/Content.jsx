import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Content = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((err) => {
                console.log("Bir dunyo xatolik: ", err);
            })
    }, []);

    function handleClick(id) {
        console.log("Bosilganda chiqadigan id: ", id);
    }
    return (
        <div className='my-4 p-4'>
            <h1 className='text-blue-600 font-bold text-[18px]'>Users</h1>
            <ul>
                {users.map(user => (
                    <NavLink key={user.id} to={`/oneuser/${user.id}`}>
                        <li className=' hover:text-green-300 cursor-pointer' onClick={() => { handleClick(user.id) }} >{user.username}</li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default Content