import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div className='w-full bg-gray-300 py-14'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div>
                <h2>TOURS</h2>
                <div className=' flex justify-center gap-3'>
                <FacebookIcon/>
                <YouTubeIcon/>
                <TwitterIcon/>
                <InstagramIcon/>

                </div>
                <div>
                    <p className='font-thin py-1'>Terms of use</p>
                </div>
                <div className='font-thin'>
                    <CopyrightIcon/>Reserved
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer