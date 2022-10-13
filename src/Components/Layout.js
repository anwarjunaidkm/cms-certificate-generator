import React from 'react'
import Header from './Dashbord/Header'
import Sibebar from './Dashbord/Sibebar'
import { useLocation } from 'react-router-dom'
import Login from './Login/Login'

function Layout  ({children}) {
   


  return (
    <div>
        <Header />
        <div style={{display:'flex'}}>
            <Sibebar />
          <div className='w-100'>
          {children}
          </div>

        </div>
    </div>
  )
}

export default Layout