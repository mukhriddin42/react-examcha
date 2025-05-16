import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='border-2 border-blue-400 p-4'>
        <NavLink to={'/'}>
            <h1>Header</h1>
            <p className='text-gray-400'>Login parol: muhriddin, 33333</p>
        </NavLink>
    </div>
  )
}

export default Header