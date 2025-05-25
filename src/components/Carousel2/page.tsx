import React from 'react'
import Image from 'next/image'
import ShopHero2 from "../../../public/shop-hero-2-png-picture-1.png"

function Carousel2() {
  return (
    <div className='flex justify-center items-center w-[1440px] h-[711px] bg-pricegreencolor rounded-md border-[1px] border-solid border-[#DEDEDE]'>
    <div className='flex justify-between items-center w-[1049px] h-[711px] pt-28 pb-28 gap-10'>
    <div className='flex-col w-[509px] h-[432px] pt-20 space-y-8 ml-32'>
    <h5 className='text-xl text-footercolumncolor'>SUMMER 2020</h5> 
    <h1 className='text-[58px] text-footercolumncolor font-bold'>Vita Classic Product</h1> 
    <h4 className='text-sm text-footercolumncolor tracking-widest'>
    We know how large objects will act, We know how are objects will act, We know
    </h4>
    <div className='flex justify-between items-center gap-8 w-[295px] h-[52px]'>
    <h3 className='text-2xl text-footercolumncolor font-bold text-center'>$16.48</h3>
    <button className='w-[184px] pt-4 pb-4 cursor-pointer rounded-md bg-[#2DC071] text-sm text-footercolumncolor text-center content-center font-bold'>ADD TO CART</button>
    </div>
    </div>
    <div className='flex justify-end items-end w-[510px] pt-[120px]'>
    <Image src={ShopHero2} alt="ShopHero2 Image" className='width=[443px] height=[711px]'/>
    </div>
    </div>  
    </div>
  )
}

export default Carousel2