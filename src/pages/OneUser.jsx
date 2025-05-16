import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const OneUser = () => {
    const { id } = useParams();
    const [oneUser, setOneUser] = useState(null)
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneUser(res.data);
            })
    }, [id])

    return (
        <div className='p-4'>
            <h1 className='text-blue-600 font-bold text-[18px]'>User information</h1>
            <NavLink to={'/content'}>
                <p className='hover:text-purple-600 mt-2'>Back to users <span>⬅️</span></p>
            </NavLink>
            <div className='p-4 shadow-main w-[100%] max-w-[400px] text-center my-6 rounded-xl'>
                <h1 className='mb-2 text-[18px] font-[600]'>Username: <span className='font-[400]'>{oneUser?.username}</span></h1>
                <h1 className='mb-2 text-[18px] font-[600]'>Fullname: <span className='font-[400]'>{oneUser?.name}</span></h1>
                <h1 className='mb-2 text-[18px] font-[600]'>Website: <span className='font-[400] hover:text-purple-600 cursor-pointer'>{oneUser?.website}</span></h1>
                <h1 className='mb-2 text-[18px] font-[600]'>Email: <span className='font-[400] hover:text-purple-600 cursor-pointer'>{oneUser?.email}</span></h1>
            </div>
        </div>
    )
}

export default OneUser