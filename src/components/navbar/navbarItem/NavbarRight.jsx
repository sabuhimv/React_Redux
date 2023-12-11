import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const NavbarRight = () => {
  return (
    <div className='flex items-center justify-between gap-9'>

        <div className='flex items-center border p-3 rounded-md bg-gray-200'> 
            <input className='bg-gray-200 outline-none' type="text" placeholder='Search:' />
            <FiSearch size={28}/>
        </div>
        
        <FaRegHeart size={28}/>
        
        <div className='relative'>
            <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>3</div>
            <SlBasket size={28}/>
        </div>
           

    </div>
  )
}

export default NavbarRight