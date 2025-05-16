import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();

    function handleUserInfo(event) {
        event.preventDefault();

        const userName = document.getElementById('username').value;
        // const userEmail = document.getElementById('email').value;
        const userPassword1 = document.getElementById('password1').value;
        const userPassword2 = document.getElementById('password2').value;

        if (userPassword1 !== userPassword2) {
            alert("Parollar bir xil emas");
            return;
        }


        const userInfo = {
            username: userName,
            password: userPassword2
        }
        console.log(userInfo);
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(userInfo);
        localStorage.setItem('users', JSON.stringify(users))

        navigate('/')
    }
    return (
        <div className='border-1 p-6'>

            <div className='flex gap-4 pl-4'>
                <NavLink to={'/'}>
                    <p>Login</p>
                </NavLink>
                <NavLink to={''}>
                    <p className='text-blue-500'>Register</p>
                </NavLink>
            </div>
            <form onSubmit={handleUserInfo} className='p-4 rounded-xl ' >
                <input id='username' className='border-2 px-2 py-1 rounded-sm mb-4' type="text" placeholder='Username' required /> <br />
                <input id='email' className='border-2 px-2 py-1 rounded-sm mb-4' type="text" placeholder='Email' required /> <br />
                <input id='password1' className='border-2 px-2 py-1 rounded-sm mb-4' type="text" placeholder='Password' required /> <br />
                <input id='password2' className='border-2 px-2 py-1 rounded-sm mb-4' type="text" placeholder='Confirm password' required /> <br />
                <button type='submit' className='border-2 border-green-400 rounded-sm px-2 py-1 inline-block text-center cursor-pointer hover:bg-green-400' >Register</button>
            </form>
        </div>
    )
}

export default Register