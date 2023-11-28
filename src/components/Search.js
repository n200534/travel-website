import React from 'react'
import support from './../assets/download.png'
import trust from './../assets/download (1).png'
import { Button, TextField } from '@mui/material'
function Search() {
    return (
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
            <div className='flex flex-col col-span-2 '>
                <h1>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque vitae quo unde repellat ut ratione quisquam facere! Nesciunt harum omnis nulla, exercitationem eum pariatur aperiam blanditiis magni ipsa dolorum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae praesentium ipsa eaque provident exercitationem nihil, tempora dolores repellendus numquam cumque nulla odit nostrum unde odio, nemo deserunt, ipsum voluptatum vel?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur officia fugit alias eligendi quas, itaque tenetur exercitationem quos unde, iusto ad a? Eligendi, natus. Veritatis unde nihil ab vel.

                </p>
                <div className="customersupport grid lg:grid-cols-2 gap-6 mx-10 ">
                    <div className="service flex justify-normal">
                        <img src={support} alt="" srcset="" className='w-10 h-10  flex items-center mx-1' />
                        <div className='mx-2 px-2 justify-start' >
                            <h3>Leading Service</h3>
                            <p>
                                24hrs leading service
                            </p>
                        </div>


                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bookings flex justify-normal">

                            <img src={trust} alt="" srcset="" className='w-12  h-12 flex items-center mx-1 justify-center pt-' />
                            <div className='mx-2 px-2'>
                                <h3>AUTOMATED BOOKINGS</h3>
                                <p>All inclusive company for 20 years in row</p>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
            <div className="dateplan  ">
                <h3>Book a Trip</h3>
                <form action="" className='w-full flex flex-col gap-4 py-2'>

                    <TextField id="standard-basic" label="Destination" variant="standard" />
                    <div>
                        <h6 className='flex flex-1'>Check-in</h6>
                        <input type='date' placeholder='check-in' className='focus:outline-none pl-2 w-full font-thin'/>
                    </div>
                    <div>
                        <h6 className='flex flex-1'>Check-out</h6>
                        <input type='date' placeholder='check-out' className='focus:outline-none pl-2 w-full font-thin' />
                    </div>
                    <Button variant="contained" className='w-full'>Search</Button>

                </form>



            </div>
        </div>
    )
}

export default Search