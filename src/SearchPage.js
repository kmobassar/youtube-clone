import { TuneOutlined } from '@mui/icons-material';
import React from 'react';
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>

        <TuneOutlined/>
        <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow
      image="https://scontent.fpat4-1.fna.fbcdn.net/v/t31.18172-8/19025144_1840018792925522_4683740609003337275_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=6KLok82uK_QAX_OSGB0&_nc_ht=scontent.fpat4-1.fna&oh=00_AT8JgQiizyDyKoyUVEEO_g1OisBz1Wz1BMpqTELAp3e6RA&oe=62763EEB"
      
      channel="XYZ CODER"
      verified
      subs="780k"
      noOfVideos={562}
      description="You can find awesome coding videos here..."/>
     
    <hr/>
    <VideoRow
    views="1.4M Views"
    subs="780k"
    description="Do you want to be a good coder"
    timestamp="1 minute ago"
    channel="XYZ CODER"
    title="Let's Build an Aweome clone..."
    image="https://image.shutterstock.com/z/stock-vector-don-t-forget-to-subscribe-subscription-concept-for-youtube-video-channel-blog-vlog-webinars-1746586979.jpg"/>
      <VideoRow
    views="100K Views"
    subs="780k"
    description="Do you want to be a good at Data Science ..Watch till end."
    timestamp="6 months ago"
    channel="XYZ CODER"
    title="Basic tutorial of data science..."
    image="https://www.adobe.com/express/create/thumbnail/media_1dbde0324d7a246981b97c7efc38d56176d359e3f.jpeg?width=400&format=jpeg&optimize=medium"/>
      <VideoRow
    views="2.8M Views"
    subs="780k"
    description="Do you want to be good at front-end developer be here......"
    timestamp="10 Month ago"
    channel="XYZ CODER"
    title="This is simple Html CSS pure basic project  ..."
    image="https://i.ytimg.com/vi/r_2tsLb__-E/maxresdefault.jpg"/>
      <VideoRow
    views="1M Views"
    subs="780k"
    description="Do you want to be a good at Python Her you go..."
    timestamp="1 Year ago"
    channel="XYZ CODER"
    title="Let's Build Python Project"
    image="https://www.pngitem.com/pimgs/m/106-1063430_hd-poster-for-youtube-subscribe-youtube-channel-poster.png"/>
      </div>
  )
}

export default SearchPage