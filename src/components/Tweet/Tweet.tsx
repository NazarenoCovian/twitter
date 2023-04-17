import React from 'react'
import TimeAgo from 'react-timeago'
import LikeIcon from '../../assets/icons/Heart.svg'
import ArrowsIcon from '../../assets/icons/Arrows-x.svg'
import UploadIcon from '../../assets/icons/Upload.svg'
import ChatIcon from '../../assets/icons/Chat.svg'


interface TweetProps {
  tweet: {
    userName: string
    profileImg: any
    text: string
    image?: any

  }
}

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <div className='flex flex-col space-x-3 border-y p-5 border-gray-100'>
      <div className='flex space-x-3'>
        <img src={tweet.profileImg} className='h-10 w-10 rounded-full object-cover'
          alt='profile' />
        <div>
          <div className='flex items-center space-x-1'>
            <p className='mr-1 font-bold'>{tweet.userName}</p>
            <p></p>
          </div>
          <div>{tweet.text}</div>
          {tweet.image && <img src={tweet.image} alt='' className='m-5 ml-0 mb-1 rounded-lg max-h-60 object-cover shadow-sm' />}
        </div>
      </div>
      <div className='flex justify-between mt-5'>
        <div className='flex cursor-pointer items-center'><img src={ChatIcon} alt='' className='h-5 w-5'/></div>
        <div className='flex cursor-pointer items-center'><img src={ArrowsIcon} alt='' className='h-5 w-5'/></div>
        <div className='flex cursor-pointer items-center'><img src={LikeIcon} alt='' className='h-5 w-5'/></div>
        <div className='flex cursor-pointer items-center'><img src={UploadIcon} alt='' className='h-5 w-5'/></div>
      </div>
      {/* <div>
        <img alt='' src={tweet.profileImg}/>
        <div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Tweet