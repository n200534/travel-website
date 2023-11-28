import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


export default function Navbar() {
 
  return (
    <div className='flex justify-between items-center h-20 px-4 absolute z-10 text-white gap-80'>
      <div>
        <h2 className='text-3xl md:text-4xl font-bold'>TOURS</h2>
      </div>
      <ul className='md:flex justify-between gap-4 hidden'>

        <li className='cursor-pointer font-semibold'>HOME</li>
        <li className='cursor-pointer font-semibold'>DESTINATION</li>
        <li className='cursor-pointer font-semibold'>TRAVEL</li>
        <li className='cursor-pointer font-semibold'>VIEWS</li>
        <li className='cursor-pointer font-semibold'>BOOK</li>
      </ul>
      <div className='flex gap-2' >
        <SearchOutlinedIcon />
        <PermIdentityIcon />

      </div>
      
      
    </div>
  )
}
