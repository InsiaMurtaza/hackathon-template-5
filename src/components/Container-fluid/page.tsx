import React from 'react'
import Image from 'next/image'
import Herocover1 from "../../../public/asian-woman-man-with-winter-clothes 1.png"

function Containerfluid() {
  return (
    <div className='flex justify-center items-center w-[1440px] h-[682px] bg-footercolumncolor'>
    <div className='flex justify-between w-[1439px] h-[682px] gap-8'>
    <div className='flex w-[704px] h-[682px] ml-48'>
    <Image src={Herocover1} alt="HeroCover1 Image" className='width-[725px] height-[774px]'/>  
    </div>
    <div className='flex-col justify-center items-center mt-20 pt-20 w-[537px] h-[326px]'>
    <h5 className='text-[16px] text-pricecolor font-bold mt-10'>SUMMER 2020</h5>   
    <h1 className='text-[40px] text-navbarcolor text-wrap font-bold mt-10'>
    Part of the Neural Universe</h1> 
    <h4 className='text-xl text-linkcolor tracking-widest mt-10'>We know how large objects will act, 
    but things on a small scale.</h4>
    <div className='flex justify-betweenw-[339px] h-[52px] mt-10 gap-3'>
    <button className='w-[156px] h-[52px] pt-4 pb-4 pr-10 bg-[#2DC071] rounded-md text-sm text-footercolumncolor font-bold text-center content-center'>
    BUY NOW   
    </button>
    <button className='w-[173px] h-[52px] rounded-md pt-4 pb-4 pr-10 pl-10 border-[1px] border-solid border-[#2DC071] text-sm text-[#2DC071] font-bold text-center content-center'>
    READ MORE    
    </button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Containerfluid