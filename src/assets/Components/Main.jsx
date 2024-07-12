import React from 'react'
import { AI } from '../utils'
const Main = () => {
  return (
    <div className='main-head-1 flex flex-col items-center my-3 overflow-x-hidden max-sm:overflow-hidden max-200:gap-4'>
      <h5 className='text-center text-[13px] my-3  z-30'>Get iPhone 15 Pro from ₹5621.00/mo.‡ for 24 months with No Cost EMI from most leading banks. <a className='text-blue-600 hover:underline cursor-pointer'>Buy now</a></h5>
    
    <div className='w-[100vw] flex justify-center bg-gray-100 relative choco '>
      <div className='city absolute  top-[7%] text-center '>
      <h1 className='text-[50px] font-medium max-200:text-[15px]  max-300:text-[25px]'>Apple Intelligence</h1>
      <h3 className='text-[25px]  max-300:text-[20px] max-200:text-[14px]'>AI for the  rest for us.</h3>
      <p className='text-gray-500 text-[15px]  max-300:text-[15px] max-200:text-[10px] font-medium'>Coming in beta in US English later this year</p>
      <div className='flex justify-center gap-3 my-4 '>
        <div className='bg-blue-500 rounded-full py-2 px-4 text-white cursor-pointer     max-200:text-[6px]'>learn more</div>
        <div className='hover:bg-blue-500 hover:text-white rounded-full cursor-pointer  py-2  px-3 text-blue-500 border-2 max-200:text-[6px]  border-blue-400 border-solid'>Watch the film</div>
      </div>
      
      </div>
      <div className='h-[80vh]'><img src= {AI} className='w-[100vw] h-full object-contain'/></div>
    </div>
    </div>
  )
}

export default Main
