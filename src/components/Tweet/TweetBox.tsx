import React, { useState } from 'react'

import Photoicon from '../../assets/icons/Photo.svg'
import SearchCircle from '../../assets/icons/SearchCircle.svg'
import EmojiHappyIcon from '../../assets/icons/EmojiHappy.svg'
import CalendarIcon from '../../assets/icons/Calendar.svg'
import LocationIcon from '../../assets/icons/Location.svg'

const TweetBox = () => {
const [inputValue, setInputValue] = useState('')
    return (
        <div className='flex space-x-2 p-5'>
            <img src='https://links.papareact.com/gll' className='h-14 w-14 object-cover rounded-full mt-4' />
            <div className='flex items-center pl-2 flex-1'>
                <form className='flex flex-col flex-1'>
                    <input 
                    value={inputValue}
                    onChange={({target:{value}})=>setInputValue(value)}
                    type='text' 
                    placeholder="What's happening?" 
                    className='h-24 w-full text-xl outline-none placeholder:text-xl' />
                    <div className='flex items-center'>
                        <div className='flex space-x-2 text-twitter flex-1'>
                            {/* Icons */}
                            <img src={Photoicon} className='h-5 w-5 cursor-pointer' />
                            <img src={SearchCircle} className='h-5 w-5 cursor-pointer' />
                            <img src={EmojiHappyIcon} className='h-5 w-5 cursor-pointer' />
                            <img src={CalendarIcon} className='h-5 w-5 cursor-pointer' />
                            <img src={LocationIcon} className='h-5 w-5 cursor-pointer' />

                        </div>
                        <button disabled={!inputValue} className='bg-twitter text-white px-5 py-2 font-bold rounded-full disabled:opacity-40'>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetBox