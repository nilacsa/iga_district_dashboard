import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Searchform from './Searchform';


function Sidebar() {
  
  const [open,setOpen]=useState(false)
  return (
    <div className='flex flex-col bg-blue-900 w-72 p-3 border-r-2 border-grey-600 shadow-lg  shadow-gray-300'>
        <div className='flex gap-2 items-center py-3 px-1'>
        <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"/></svg>
        <span className='text-lg text-white '><Link to='/'>Dashboard</Link></span>
        </div>

        <Searchform/>

        <div className='flex-1 mt-16'>


        <div className='flex-1 mt-16'>
        <div className='flex gap-2 items-center py-2 px-1'>
        <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4Z"/></svg>
        <span className='text-1xl text-white '><Link to='/sectorreport'>View Report </Link></span>
        </div>
        


        </div>
        <div className='border-t-grey-200 mt-72'>
        <div className='flex gap-2 items-center py-2 px-1'>
        <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.796 2.244C12.653 1.826 14 3.422 14 5v14c0 1.578-1.347 3.174-3.204 2.756C6.334 20.752 3 16.766 3 12s3.334-8.752 7.796-9.756zm5.497 6.049a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 13H9a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414z" clip-rule="evenodd"/></svg>
        <span className='text-1xl text-white cursor-pointer'>Logout</span>
        </div> 
        </div>
    </div>
    </div>
  )
}

export default Sidebar