import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    function handleLoginInfo(event) {
        event.preventDefault();

        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const foundUser = users.find(user => user.username === username && user.password === password);

        if (foundUser) {
            navigate('/content')
        } else {
            alert("Username yoki password noto‘g‘ri.");
        }
    }

    return (
        <div className='border-1 p-6'>
            <div className='flex gap-4 pl-4'>
                <NavLink to={'/'}>
                    <p className='text-blue-500'>Login</p>
                </NavLink>
                <NavLink to={'/register'}>
                    <p>Register</p>
                </NavLink>
            </div>
            <form onSubmit={handleLoginInfo} className=' p-4 rounded-xl w-[300px]'>
                <input id='login-username' className='border-2 px-2 py-1 rounded-sm mb-4' type="text" placeholder='Username' required />
                <input id='login-password' className='border-2 px-2 py-1 rounded-sm mb-4' type="text" placeholder='Password' required /><br />
                <button type='submit' className='border-2 border-green-400 rounded-sm inline-block px-2 py-1 text-center cursor-pointer hover:bg-green-400' >Login</button>
            </form>
        </div>
    )
}

export default Login