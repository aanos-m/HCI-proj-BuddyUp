import React from 'react'
import Nav from '../Nav';


const ReturnUserHome = () => {
  return (
    <>
    
    <div>ReturnUserHome</div>

    <div style={{ display: 'flex', flexDirection: 'column',
                    gap: '20px', 
                    position: 'absolute', bottom: '0px', justifyContent: 'center',
                    alignContent: 'center', alignItems: 'center'
                    }}>
     
        <Nav />
      </div>
    </>
    
  )
}

export default ReturnUserHome