import React from 'react'
import { nav_logo_apple, nav_logo_cart, nav_logo_more, nav_logo_search } from '../utils'
import { navlist } from '../constant'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='flex justify-evenly sticky top-0 max-md:justify-between m-0 p-0 z-10 bg-nav-background overflow-x-hidden '>
      <img src ={nav_logo_apple} className='ml-8 cursor-pointer  max-200:ml-2'/>
      <div className='max-md:hidden flex items-center'>
      <ul className='flex gap-7 text-[11px] text-gray-600 font-medium'>
        {
          navlist.map((x,index)=>(
            <li key={index} className='cursor-pointer'>{x}</li>
          ))
        }
      </ul>
      </div>
      <div className='max-200:gap-2 max-200:mr-2 flex  gap-10 max-md:gap-5 mr-8 '>
        <img src= {nav_logo_search} alt=""  className='nl w-5 cursor-pointer'/>
        <img src={nav_logo_cart} alt=""  className='nl w-5 cursor-pointer'/>
        <img src={nav_logo_more} alt="" className='nl hidden w-5 max-md:inline cursor-pointer'/>
      </div>
    </nav>
  )
}

export default Navbar
