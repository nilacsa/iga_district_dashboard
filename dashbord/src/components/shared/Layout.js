import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'
import Header from '../Header'
function Layout() {
  return (
    <>
    <div className=' flex flex-row  overflow-hidden'> 
        <Sidebar/>
        <div className=' '>
          <Header/>
          <div>{<Outlet />}</div> 
        </div>
    </div>
    
    </>
  )
}

export default Layout