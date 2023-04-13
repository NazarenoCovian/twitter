import React from 'react'
//Icons
import HomeIcon from '../../assets/icons/HomeIcon.svg'
import BellIcon from '../../assets/icons/Bell.svg'
import BookmarkIcon from '../../assets/icons/Bookmark.svg'
import HashTagIcon from '../../assets/icons/HashTag.svg'
import MessageIcon from '../../assets/icons/Message.svg'
import MoreIcon from '../../assets/icons/More.svg'
import ProfileIcon from '../../assets/icons/Profile.svg'
// import MessageIcon from '../../assets/icons/Message.svg'

type Props = {}

const Sidebar = (props: Props) => {
  const sideJSON = [{ icon: HomeIcon, title: 'Home' }, { icon: BellIcon, title: 'Notifications' }, { icon: HashTagIcon, title: 'Explore' }, { icon: MessageIcon, title: 'Messages' }, { icon: BookmarkIcon, title: 'Bookmarks' }, { icon: ProfileIcon, title: 'Profile' }, { icon: MoreIcon, title: 'More' },]
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <img className="h-10 w-10 m-3" src='https://links.papareact.com/drq' />
      {sideJSON.map(({ icon, title }) => <div key={title} className='flex max-w-fit cursor-pointer items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 group'>
        <img src={icon} className="h-6 w-6" />
        <div className='hidden md:inline-flex text-xl group-hover:text-twitter'>{title}</div>
      </div>)}

    </div>
  )
}

export default Sidebar