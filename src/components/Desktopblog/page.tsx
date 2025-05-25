"use client"
import React from 'react'
import Image from 'next/image'
import Image1 from "../../../public/desktopblogimage1.png"
import Image2 from "../../../public/desktopblogimage2.png"
import Image3 from "../../../public/desktopblogimage3.png"
import { AreaChartOutlined } from '@ant-design/icons';
import { BiAbacus, BiAlarm } from 'react-icons/bi'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link'



function Desktopblog() {
  return (
    <div className='flex justify-center w-[1440px] h-[1044px] bg-footercolumncolor'>
    <div className='flex-col justify-center w-[1050px] h-[1044px] pt-28 space-y-20'>
    <div className='flex-col justify-center items-center w-[692px] h-[134px] ml-48 space-y-3'>
    <h6 className='text-sm text-customecolor text-center font-bold'>Practice Advice</h6>
    <h2 className='text-[40px] text-navbarcolor text-center font-bold'>Featured Posts</h2>
    <p className='text-sm text-linkcolor text-center '>
    Problems trying to resolve the conflict between<br/> 
    the two major realms of Classical physics: Newtonian mechanics</p>
    </div>
    <div className='grid grid-cols-3 w-[1045px] h-[606px] gap-8 mt-20'>
    <div className='relative overflow-hidden w-[348px] h-[606px]'>
    <Image src={Image1} alt="DesktoBlog Image1" className='w-full h-[300px] object-cover'/>
    <div className='absolute top-5 left-5 pr-2 pl-2 w-[58px] h-[24px] bg-[#E74040] box_shadow'>
    <h6 className='text-sm text-footercolumncolor font-bold text-center'>NEW</h6>
    </div> 
    <div className='flex-col justify-center items-center w-[348px] h-[306px] pt-6 pb-9 pr-6 pl-6 space-y-5'>
    <div className='flex justify-between w-[159px] h-4'>
    <text className='text-xs text-[#8EC2F2]'>Google</text>
    <text className='text-xs text-linkcolor'>Trending</text>
    <text className='text-xs text-linkcolor'>New</text>
    </div>
    <h4 className='text-xl text-navbarcolor text-wrap'>Loudest à la Madison #1 
    (L'integral)</h4>
    <p className='text-sm text-linkcolor'>
    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
    </p>
    <div className='flex justify-between w-[298px] h-[46px] pt-4 pb-4'>
    <div className='flex w-[98px] h-4 space-x-1'>
    <BiAlarm className='w-4 h-4 text-customecolor'/>
    <text className='text-xs text-linkcolor'>22 April 2021</text>  
    </div>
    <div className='flex w-[105px] h-4 space-x-1'>
    <AreaChartOutlined className="custom-icon w-4 h-[14.67px] text-[#23856D]" />
    <text className='text-xs text-linkcolor'>10 comments</text>
    </div>
    </div>
    
    <Link href="#" className='flex w-[110px] h-6 space-x-2'><h6 className='text-sm text-linkcolor font-bold'>Learn More</h6>
    <IoIosArrowForward className='w-4 h-4 text-customecolor'/></Link>
    
    </div>
    </div>

    <div className='relative overflow-hidden w-[348px] h-[606px]'>
    <Image src={Image2} alt="DesktoBlog Image2" className='w-full h-[300px] object-cover'/>
    <div className='absolute top-5 left-5 pr-2 pl-2 w-[58px] h-[24px] bg-[#E74040] box_shadow'>
    <h6 className='text-sm text-footercolumncolor font-bold text-center'>NEW</h6>
    </div> 
    <div className='flex-col justify-center items-center w-[348px] h-[306px] pt-6 pb-9 pr-6 pl-6 space-y-5'>
    <div className='flex justify-between w-[159px] h-4'>
    <text className='text-xs text-[#8EC2F2]'>Google</text>
    <text className='text-xs text-linkcolor'>Trending</text>
    <text className='text-xs text-linkcolor'>New</text>
    </div>
    <h4 className='text-xl text-navbarcolor text-wrap'>Loudest à la Madison #1 
    (L'integral)</h4>
    <p className='text-sm text-linkcolor'>
    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
    </p>
    <div className='flex justify-between w-[298px] h-[46px] pt-4 pb-4'>
    <div className='flex w-[98px] h-4 space-x-1'>
    <BiAlarm className='w-4 h-4 text-customecolor'/>
    <text className='text-xs text-linkcolor'>22 April 2021</text>  
    </div>
    <div className='flex w-[105px] h-4 space-x-1'>
    <AreaChartOutlined className="custom-icon w-4 h-[14.67px] text-[#23856D]" />
    <text className='text-xs text-linkcolor'>10 comments</text>
    </div>
    </div>
    <Link href="#" className='flex w-[110px] h-6 space-x-2'><h6 className='text-sm text-linkcolor font-bold'>Learn More</h6>
    <IoIosArrowForward className='w-4 h-4 text-customecolor'/></Link>
    
    </div>
    </div>

    <div className='relative overflow-hidden w-[348px] h-[606px]'>
    <Image src={Image3} alt="DesktoBlog Image3" className='w-full h-[300px] object-cover'/>
    <div className='absolute top-5 left-5 pr-2 pl-2 w-[58px] h-[24px] bg-[#E74040] box_shadow'>
    <h6 className='text-sm text-footercolumncolor font-bold text-center'>NEW</h6>
    </div> 
    <div className='flex-col justify-center items-center w-[348px] h-[306px] pt-6 pb-9 pr-6 pl-6 space-y-5'>
    <div className='flex justify-between w-[159px] h-4'>
    <text className='text-xs text-[#8EC2F2]'>Google</text>
    <text className='text-xs text-linkcolor'>Trending</text>
    <text className='text-xs text-linkcolor'>New</text>
    </div>
    <h4 className='text-xl text-navbarcolor text-wrap'>Loudest à la Madison #1 
    (L'integral)</h4>
    <p className='text-sm text-linkcolor'>
    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
    </p>
    <div className='flex justify-between w-[298px] h-[46px] pt-4 pb-4'>
    <div className='flex w-[98px] h-4 space-x-1'>
    <BiAlarm className='w-4 h-4 text-customecolor'/>
    <text className='text-xs text-linkcolor'>22 April 2021</text>  
    </div>
    <div className='flex w-[105px] h-4 space-x-1'>
    <AreaChartOutlined className="custom-icon w-4 h-[14.67px] text-[#23856D]" />
    <text className='text-xs text-linkcolor'>10 comments</text>
    </div>
    </div>
    <Link href="#" className='flex w-[110px] h-6 space-x-2'><h6 className='text-sm text-linkcolor font-bold'>Learn More</h6>
    <IoIosArrowForward className='w-4 h-4 text-customecolor'/></Link>
    
    </div>
    </div>

    </div>
    </div>   
    </div>
  )
}

export default Desktopblog