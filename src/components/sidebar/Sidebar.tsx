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
  const sideJSON = [{icon:HomeIcon,title:'Home'},{icon:BellIcon,title:'Notifications'},{icon:HashTagIcon,title:'Explore'},{icon:MessageIcon,title:'Messages'},{icon:BookmarkIcon,title:'Bookmarks'},{icon:ProfileIcon,title:'Profile'},{icon:MoreIcon,title:'More'},]
  return (
    <div>
      <img className="h-10 w-10" src='https://links.papareact.com/drq' />
      {sideJSON.map(({icon,title})=><img src={icon} className="h-10 w-10"/>)}

    </div>
  )
}

export default Sidebar