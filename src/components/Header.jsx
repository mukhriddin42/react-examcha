import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='border-2 border-blue-400 p-4'>
        <NavLink to={'/'}>
            <h1>Header</h1>
        </NavLink>
    </div>
  )
}

export default Header