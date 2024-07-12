import React from 'react'
import "./Highlight.css"
const Highlight = () => {
  return (
    <>
    <div className='w-full h-[85vh]  border-2  relative my-4 soccer overflow-hidden flex justify-center bg-black'>
     <div className=' w-full h-[85vh] flex max-md:absolute max-md:bottom-0 justify-center'>
      
      <img src="/src/assets/Images/blackimg.jpg" className='phone-blacky w-full h-full object-cover  max-md:hidden'/> 
      <img src="/src/assets/Images/blackimg2.jpg" className='phone-blacky w-full h-full object-cover hidden max-md:inline'/> 
      </div>
      <div className='text-center text-white    my-5 absolute top-[1%] max-md:top-[4%] z-1000 '>
        <h1 className='text-[45px] max-md:text-[35px] font-medium z-10'>iPhone</h1>
        <p className='self-center font-medium  z-10 w-[350px] max-300:w-[250px] text-wrap text-[20px]  max-300:text-[14px] max-300:px-4'>Our most powerful cameras yet. Ultrafast chips And USB-C</p>
       <div className='z-10 flex gap-4 justify-center flex-wrap my-4 '>
        <div className='bg-blue-500 rounded-full p-2  w-[120px] z-10 h-[40px] max-300:w-[100px] max-300:text-[14px]'>Learn more</div>
        <div className='hover:bg-blue-500 rounded-full  p-1 text-[17px] max-300:text-[14px] max-300:h-[20px] z-10 text-blue-500 border-[1px] border-blue-500 max-300:min-w-[80px] hover:text-white min-w-[130px] min-h-[40px]'>Shop iPhone</div>
       </div>
        
        </div>
    </div>

    
    </>
  )
}

export default Highlight
