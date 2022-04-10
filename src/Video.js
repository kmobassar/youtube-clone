import { Avatar } from '@mui/material'
import React from 'react'
import "./Video.css"
function Video({image,title,channel,views,timestamp,channelimage}) {
  return (
    <div className='video'>
        <img  className="video__thumbnail"src={image} alt=""/>
        <div className='video__info'>
        <Avatar className='video__avatar' alt={channel} src={channelimage}/>
        <div className='video__text'>
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} * {timestamp}</p>
            
            </div>
            </div>

         </div>
  )
}

export default Video