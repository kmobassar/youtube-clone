import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={HomeSharpIcon} title='Home'/>
        <SidebarRow Icon={WhatshotSharpIcon}  title='Trending'/>
        <SidebarRow Icon={SubscriptionsOutlinedIcon}  title='Subscription'/>
        <hr/>
        <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library"/>
        <SidebarRow Icon={HistorySharpIcon} title="History"/>
        <SidebarRow Icon={OndemandVideoSharpIcon} title="Ondemand"/>
        <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watchlater"/>
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Like"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More"/>
    </div>
  )
}

export default Sidebar