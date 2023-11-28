import React from 'react'
import beachvid from './../assets/beachVid.mp4'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <video src={beachvid} autoPlay loop muted className='w-full h-full object-cover'/>
    <div className='absolute w-full h-full top-0 left-0 bg-gray-500/30'>

    </div>
    <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 py-4 gap-2'>
        <h1>First class Travel</h1>
        <h2> Top 1% Locations world wide</h2>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100'>
            <div>
            <input type='text' placeholder='search places' className='bg-transparent w-300px focus:outline-none px-2'/>
            </div>
            <div>
            <SearchOutlinedIcon className='cursor-pointer'  />
            </div>
            
        </form>
    </div>
    </div>
  )
}

export default Hero