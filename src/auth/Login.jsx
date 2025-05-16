import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='border-1 p-6'>
            <div className='flex gap-4 pl-4'>
                <NavLink to={''}>
                    <p className='text-blue-500'>Login</p>
                </NavLink>
                <NavLink to={'/register'}>
                    <p>Register</p>
                </NavLink>
            </div>
            <form className=' p-4 rounded-xl w-[300px]'>
                <input className='border-2 px-2 py-1 rounded-sm mb-4' type="text" placeholder='Username' />
                <input className='border-2 px-2 py-1 rounded-sm' type="text" placeholder='Password' />
            </form>
        </div>
    )
}

export default Login