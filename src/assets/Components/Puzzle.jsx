import React from 'react'
import { box1, box2, box3, box4, logo1, logo2, logo3, logo4 } from '../utils'
import "./Puzzle.css"
const Puzzle = () => {
  return (
  <>
   <div className='boxes w-full h-[78vh]  overflow-hidden flex justify-center bg-gray-100 my-4 max-sm:overflow-hidden'>
    <div className='small-cont w-[430px] h-[78vh] p-10 relative bg-gray-100  max-435:w-[275px]'>

    <div className='w-[300px] h-[180px] rotate-[-8deg] relative max-435:h-[150px] max-435:w-[230px] max-435:left-[-8%]'><img src = {box1} className='w-full h-full'/><span className='max-435:w-[170px]  mt-4 w-[250px] absolute bottom-[0px] left-[10%] text-[40px] max-435:text-[30px]  text-white font-medium'>Buy Mac or iPad for college</span>
    <img src={logo2} className='w-[110px] h-[110px] absolute top-[-15px] right-[-35px]'/>
    <img src={logo3} className='w-[110px] h-[110px] absolute bottom-[-90px] left-[-50px]'/>
    <img src={logo4} className='w-[60px] h-[60px] absolute top-[-25px] left-[-25px]'/>

    </div>
    <div className='w-[180px] h-[23px] max-435:w-[150px] absolute mt-[-3px] rotate-[-6deg] right-[75px] max-435:right-[15px]'><img src = {box2} className='w-full h-full'/></div>
    <div className='w-[240px] h-[120px] max-435:w-[180px] max-435:h-[100px] absolute  box-3 left-[31%] mt-[30px]'><img src = {box3} className='w-full h-full'/>
    <img src={logo1} className='w-[80px] max-435:w-[60px] max-435:h-[60px] h-[80px] absolute bottom-[16px] right-[-30px]'/>

    <div className='box-4 w-[180px] h-[40px]  absolute bottom-[-45%] max-435:left-[-22px] max-435:bottom-[-60%]  rotate-[-6deg]'>
      <img src = {box4} className='w-full h-full'/>
      <div className=' w-[180px]  h-[25px]  text-[14px] absolute font-medium bottom-[25%]  px-2'>Only at the Apple Store</div>
    </div>
    <div className='rotate-[-6deg] text-blue-500 p-1 text-center relative  bottom-[-50%] max-435:bottom-[-75%] border-[1px] w-[65px] h-[35px] left-[15%] rounded-full border-blue-500 hover:text-white hover:bg-blue-500'>Shop</div>

    </div>

   
   
    <div className='box-text-2 w-[180px] h-[23px] absolute mt-[-3px] rotate-[-6deg] max-435:right-[-18px] right-[60px] text-[13px] max-435:text-[12px]  font-bold text-white '>with education savings</div>
    <div className='max-435:w-[150px] max-435:text-[22px] box-text-3 w-[200px]  text-white  rotate-[4deg] h-[70px] absolute  left-[35%] mt-[30px] max-435:mt-[45px] text-[30px] font-medium'>Get a gift card up to $150*</div>
   
   </div>
    </div>
  </>
      )
    }

export default Puzzle
