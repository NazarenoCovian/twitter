import React from 'react'
import TimeAgo from 'react-timeago'

interface TweetProps {
    tweet:{
        userName:string
        profileImg:any
        text:string

    }
} 

const Tweet = ({tweet}:TweetProps) => {
  return (
    <div>
        <div>{tweet.userName}</div>
        <div>{tweet.text}</div>
        <img src={tweet.profileImg} className='h-5 w-h'/>
    </div>
  )
}

export default Tweet