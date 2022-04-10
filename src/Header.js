import React,{useState} from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import "./Haeder.css";
import {Link} from "react-router-dom";
function Header() {
    const[inputSearch,setInputSearch]=useState('');
    return (
        <div className='header'>

            <div className='header__logo'>
                <MenuSharpIcon  className='header__logo-menu'/>
                <Link to="/">
                <h1 className='header__logo-name'>You<span className='header__logo-tube'>Tube
                    </span></h1>
                    </Link> 
              
            </div>

            <div className='header__input'>
                <input type="text" onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='search'/>
                <Link to={`/search/${inputSearch}`}>
                <SearchSharpIcon  className='header__input-icon'/>
                </Link>
              
            </div>

            <div className='header__right'>

                <VideoCallSharpIcon className='header__right-icon' />
                <AppsSharpIcon className='header__right-icon'  />
                <NotificationsSharpIcon className='header__right-icon' />
                <AccountCircleSharpIcon  className='header__right-icon' />

            </div>



        </div>
    )
}

export default Header