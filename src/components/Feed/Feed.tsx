import React from 'react'
import RefreshIcon from '../../assets/icons/Refresh.svg'
import TweetBox from '../Tweet/TweetBox'
import Tweet from '../Tweet/Tweet'
export const Feed = () => {
    const tweets = [{userName:'Sonny Sangha',profileImg:RefreshIcon,text:'Me alegra mucho lo que hiciste'},{userName:'Nazareno',profileImg:RefreshIcon,text:'Hoy aprendi muchisimo de nextjs'},
    {userName:'renita',profileImg:RefreshIcon,text:'hoy me senti muy comoda con mis compañeritas'}]
    return (
        <div className='col-span-7 lg:col-span-5 border-x'>
            <div className='flex items-center justify-between'>
                <h1 className='p-5 pb-0 font-bold text-xl'>Home</h1>
                <img src={RefreshIcon} className='mr-5 mt-5 w-8 h-8 cursor-pointer transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
            </div>
            <div>
                <TweetBox />
                {tweets.map((tweet)=><Tweet key={tweet.userName} tweet={tweet}/>)}
                
            </div>

        </div>
    )
}
