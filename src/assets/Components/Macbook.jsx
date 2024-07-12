import React from 'react'
import { nav_logo_apple, nav_logo_apple2, x1, x2,x3,x4,x5,x6 } from '../utils'

const Macbook = () => {
  return (
    <div className='w-full   flex flex-wrap  overflow-x-hidden justify-center  gap-4 border-2 '>
        <div className='w-[48vw]  h-[80vh] max-md:h-[70vh] max-md:w-[100vw] bg-black'>
        <div className='w-full h-full relative max-300:my-5'>
        <img src = {x1} className='w-full h-full object-cover max-md:object-contain '/>
        
        <div className='absolute top-[25px]  max-md:top-[10px] w-full text-white text-center flex flex-col items-center'>
        <h1 className='text-[40px] max-md:text-[30px] font-medium'>iPad Pro</h1>
        <p className='text-[18px] font-medium'>Unbelievable thin.Incredibly powerful.</p>
        <div className='flex justify-center gap-3 my-4'>
        <div className='bg-blue-500 rounded-full p-1 text-white max-300:text-[11px]'>learn more</div>
        <div className='hover:bg-blue-500 hover:text-white rounded-full  px-4 max-300:text-[11px]  text-blue-400 border-2 border-blue-400 border-solid'>Buy</div>
      </div>
        
        </div>    
         </div>   
        </div>
    

        <div className='w-[45vw] h-[80vh] max-md:h-[70vh] max-md:w-[100vw] relative bg-gray-100 flex justify-center'><img src = {x2} className='w-full h-full object-cover max-md:object-contain max-435:object-cover'/>
        <div className='absolute bottom-[30px] max-md:bottom-[0px]  flex flex-col items-center gap-2'>
            <div className='max-435:top-[-75%] flex  text-4xl  font-medium items-center absolute top-[-52%] '><img src={nav_logo_apple} className='h-[12vh] max-md:h-[12vh] object-contain'/><span className='mb-2 '>Vision Pro</span></div>
            <p className='font-medium text-lg max-300:text-[14px]'>The era of spatial computing is here</p>
        
        
        <div className='flex justify-center gap-3 my-4'>
        <div className='bg-blue-500 rounded-full px-3 py-1 text-white '>learn more</div>
        <div className='hover:bg-blue-500 hover:text-white rounded-full  px-4  text-blue-400 border-2 border-blue-400 border-solid text-center'>Buy</div>
      </div>
      </div>

        </div>
        
        <div className='w-[48vw] h-[80vh] max-md:h-[70vh] max-md:w-[100vw] relative bg-black flex justify-center'><img src = {x3} className='w-full h-full object-cover'/>
        <div className='absolute top-[90px] max-md:bottom-[0px]  flex flex-col items-center  text-white'>
            <div className='max-435:top-[-13%] flex  text-[35px]  font-medium items-center absolute top-[-50%] gap-1'><img src={nav_logo_apple2} className='h-[14vh] max-md:h-[10vh] object-contain '/><span className='pb-2'>WATCH</span></div>
            <p className='text-red-600 font-medium text-lg max-300:text-[14px]'>SERIES 9</p>
            <p className='font-medium text-lg max-300:text-[14px]'>Smarter.Brighter.Mightier</p>
        
        
        <div className='flex justify-center gap-3 my-4'>
        <div className='bg-blue-500 rounded-full px-3 py-1 text-white '>learn more</div>
        <div className='hover:bg-blue-500 hover:text-white rounded-full  px-3   text-blue-400 border-2 border-blue-400 border-solid text-center'>Buy</div>
      </div>
      </div>

        </div>

        <div className='w-[45vw] h-[80vh] max-md:h-[70vh] max-md:w-[100vw] relative flex justify-center'><img src = {x4} className='w-full h-full object-cover'/>
        <div className='absolute top-[90px] max-md:bottom-[0px]  flex flex-col items-center '>
            <div className='max-435:top-[-13%]  text-3xl  w-[300px]  font-medium absolute top-[-40%] max-md:top-[-15%] text-center'>Apple Intelligence</div>
            <p className=' font-medium text-lg max-300:text-[14px]'>AI for the rest for us</p>
            <p className='font-medium text-lg max-300:text-[14px] text-gray-500'>Coming in beta this fall</p>
        
        
        <div className='flex justify-center gap-3 my-4'>
        <div className='bg-blue-500 rounded-full px-3 py-1 text-white '>learn more</div>
        <div className='hover:bg-blue-500 hover:text-white rounded-full  px-4  text-blue-400 border-2 border-blue-400 border-solid text-center'>Buy</div>
      </div>
      </div>

        </div>

        <div className='w-[48vw] h-[80vh] max-md:h-[70vh] max-md:w-[100vw] relative  flex justify-center'><img src = {x5} className='w-full h-full object-cover'/>
        <div className='absolute top-[90px] max-md:bottom-[0px]  flex flex-col items-center '>
            <div className='max-435:top-[-13%] flex  text-[45px]  font-medium items-center absolute top-[-70%] gap-1'><img src={nav_logo_apple} className='h-[14vh] max-md:h-[10vh] object-contain '/><span className='pb-2'>Card</span></div>
            <p className='font-medium text-lg max-300:text-[14px] self-center w-[300px] text-center'>Get up tp 3% Daily Cash back with purchase.</p>
            
        
        
        <div className='flex justify-center gap-3 my-4'>
        <div className='bg-blue-500 rounded-full px-3 py-1 text-white '>learn more</div>
        <div className='hover:bg-blue-500 text-[14px] hover:text-white rounded-full  px-3 py-1 text-blue-400 border-2 border-blue-400 border-solid text-center'>Apply now</div>
      </div>
      </div>

        </div>

        <div className='w-[48vw] h-[80vh] max-md:h-[70vh] max-md:w-[100vw] relative  flex justify-center'><img src = {x6} className='w-full h-full object-cover'/>
        <div className='absolute top-[90px] max-md:bottom-[0px]  flex flex-col items-center '>
            <div className='max-435:top-[-13%] flex  text-[45px]  font-medium items-center absolute top-[-60%] gap-1'><img src={nav_logo_apple} className='h-[14vh] max-md:h-[10vh] object-contain '/><span className='pb-2'>Trade In</span></div>
            <p className=' font-medium text-lg max-300:text-[14px] w-[300px] self-center text-center'>Get $170-$630 in credit when you trade in iPhone 11 or higher.</p>
        
        
        <div className='flex justify-center gap-3 my-4'>
        <div className='bg-blue-500 rounded-full text-[13px] px-3 py-1 text-white '>Get your estimate</div>
      </div>
      </div>

        </div>

    </div>
  )
}

export default Macbook
