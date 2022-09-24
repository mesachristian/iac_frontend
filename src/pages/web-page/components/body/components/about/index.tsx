import React, { Fragment } from 'react';
import pic1 from 'assets/img/profile-pic-1.jpg';

const About = () => {
  return (
    <Fragment>
        <div className="relative top-0 left-0 w-full h-full">
            <div className="other-first-section px-16 pt-28 z-0 flex items-center justify-center">
                <div className='relative h-[320px] w-[250px]'>
                  <div className='w-[110px] h-[110px] rounded-full absolute top-0 left-[70px] z-10'>
                    <img src={pic1} className='w-[110px] h-[110px] rounded-full'/>
                  </div>
                  <div className='absolute top-[55px] left-0 h-[300px] w-[250px] border-t-[1px] border-custom-gray rounded-2xl shadow-lg pt-[60px] px-6 flex flex-col items-center justify-start'>
                    <h1 className='font-black mt-3 text-lg'>Mohit Zalabahn</h1>
                    <h2 className='font-black mt-1 text-base'>Chief Technology Officer</h2>
                    <p className='mt-4 text-center text-base'>He is one of the top CTO'S in the industri of technology e has a parrafo descriptivo.</p> 
                  </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default About;