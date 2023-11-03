import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';

const Navigation = ( 
  { item1, item2, item3, item4}
) => {
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
      <ul class="nav nav-pills" style={{ justifyContent: 'space-around', fontSize: '16px'}}>
        <li class="nav-item">
            <button class="nav-link " 
                    style={{ display: 'flex', 
                            color: {item1},
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '50px'}}>
              <HomeIcon fontSize="small" /> Home </button>
        </li>
        <li class="nav-item" >
            <button class="nav-link " 
                    style={{ display: 'flex',
                            color: {item2},
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '50px'}}>
              <PeopleIcon fontSize="small" /> Friends</button>
        </li>
        <li class="nav-item"  >
            <button class="nav-link " 
                    style={{ display: 'flex', 
                    color: {item3},
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '50px'}}>
              <SearchIcon fontSize="small"/> Search </button>
        </li>
        <li class="nav-item" >
            <button class="nav-link " 
                    style={{ display: 'flex', 
                  color: {item4},
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: '50px'}}>
              <AccountCircleIcon fontSize="small"/> Account </button>
        </li>
       
      </ul>
    </div>
  )
}

export default Navigation;