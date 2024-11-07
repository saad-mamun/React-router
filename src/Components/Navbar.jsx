import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar =() => {
    return(
        <>
          <nav className='fixed w-full z-0 top-0 left-0'>
            <ul className='max-w-[90vw] flex flex-wrap items-center justify-between mx-auto'>
                <a href="" className='font-semibold text-2xl'>Project Hero</a>

                <div className='flex gap-[2.5rem]'>
                    <li> <NavLink to="">Home</NavLink> </li>
                    <li> <NavLink to="/About">About</NavLink> </li>
                    <li> <NavLink to="/Contact">Contact</NavLink> </li>
                    <li> <NavLink to="/SignUp">SignUp</NavLink> </li>
                </div>
            </ul>
          </nav>
        </>
    )
}