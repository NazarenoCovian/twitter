import React from 'react'
import SearchIcon from '../../assets/icons/Search.svg'

const Widgets = () => {
  return (
    <div className='mt-2 px-2 col-span-2 hidden lg:inline'>
        <div className='flex items-center space-x-2 bg-gray-100 mt-2 rounded-full p-3'>
            <img src={SearchIcon} className='h-5 w-5'/>
            <input type='text' placeholder='Search Twitter' className='bg-transparent flex-1 outline-none'/>
        </div>
    </div>
  )
}

export default Widgets