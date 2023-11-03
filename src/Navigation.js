import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ( ) => {

  return (
    <div 
        style={{
        padding: '5px',
        margin: '5px',
        width: '390px',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: '10px',
        background: 'white',
        boxShadow: '0px -4px 4px 0px rgba(0, 0, 0, 0.25)'
    }}>
      <ul class="nav nav-pills" style={{ justifyContent: 'space-around', fontSize: '16px'}} id='navbar'>
        <li class="nav-item">
              <NavLink to="/NewAccount/Home" className="nav-link" style={{ display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '50px'}}>
              <HomeIcon fontSize="small" /> Home
            </NavLink>
        </li>
        <li class="nav-item" >
            <NavLink to="/NewAccount/Friends" className="nav-link" style={{ display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '50px'}}>
              <PeopleIcon fontSize="small" /> Friends
            </NavLink>
        </li>
        <li class="nav-item"  >
              <NavLink to="/NewAccount/Search" className="nav-link" style={{ display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '50px'}}>
              <SearchIcon fontSize="small" /> Search
            </NavLink>

        </li>
        <li class="nav-item" >
              <NavLink to="/NewAccount/AccountPage" className="nav-link" style={{ display: 'flex',

                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '50px'}}>
              <AccountCircleIcon fontSize="small" /> Account
            </NavLink>
        </li>
       
      </ul>
    </div>
  )
}

export default Navigation;