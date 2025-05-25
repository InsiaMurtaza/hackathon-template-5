import React from 'react'
import Image from 'next/image'
import Carousel1 from "../../public/carousel1.png"
import Men from "../../public/men.png"
import Women from "../../public/women.png"
import Kids from "../../public/kids.png"
import Accessories from "../../public/accessories.png"
import Desktop from '@/components/Desktop/page'
import Carousel2 from '@/components/Carousel2/page'
import Containerfluid from '@/components/Container-fluid/page'
import Desktopblog from '@/components/Desktopblog/page'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'


function home() {
  
  return (
    <>
    <Navbar/>
    <div className='relative overflow-hidden flex justify-center items-center w-[1440px] h-[716px] rounded-md border-[1px] border-solid border-[#DEDEDE]'>
    <Image src={Carousel1} alt="Carousel1" className='width=[1440px] height=[716px]'/>
    <div className='absolute top-12 bottom-12 left-48 pt-40 pb-40 mt-12 flex w-[1044px] h-[427px]'>
    <div className='flex-col w-[599px] h-[331px] gap-16'>
    <h5 className='text-[16px] mt-0 text-footercolumncolor font-bold'>SUMMER 2020</h5>
    <h1 className='text-footercolumncolor text-6xl font-bold mt-10'>NEW COLLECTION</h1>
    <h4 className='text-footercolumncolor text-xl mt-10'>
    We know how large objects will act,<br/>but things on a small scale.</h4>
    </div>
    </div>
    </div>
    <div className='flex w-[1440px] bg-footercolor'>
    <div className='flex-col w-[1050px] h-[62px] text-center items-center mt-10 mb-10'>
    <text className='text-2xl text-navbarcolor text-center mt-5 mb-5 font-bold ml-48'>Editor&apos;s pick</text>
    <p className='text-sm text-linkcolor text-center mt-5 ml-48'>Problems trying to resolve the conflict between </p>
    </div>
    </div>
    <div className='flex w-[1440px] justify-center items-center bg-footercolor'>
    <div className='flex-col justify-center items-center md:flex h-[500px] md:w-[1050px] '>
    <div className='grid md:grid-cols-4 gap-5'>
    <div className='md:grid col-span-2 relative overflow-hidden'>
    <Image src={Men} alt = "Men's Wear" className='width=[510px] height=[500px] object-cover'/>
    <div className='absolute bottom-4 left-8 text-black text-[16px] text-center content-center font-bold w-[170px] h-[48px] bg-footercolumncolor'>
    MEN</div> 
    </div>
    <div className='relative overflow-hidden'>
    <Image src ={Women} alt ="Women's Wear Image" className='width=[240px] height=[500px] object-cover'/>
    <div className='absolute bottom-4 left-5 w-[136px] h-[48px] bg-footercolumncolor text-black text-[16px] text-center content-center font-bold'>WOMEN
    </div>
    </div> 
    <div className='flex-col space-y-4'>
    <div className='relative overflow-hidden'> 
    <Image src={Accessories} alt ="General Wear Image" className='width = [240px] height=[242px] object-cover'/>
    <div className='absolute bottom-5 left-4 w-[170px] h-[48px] bg-footercolumncolor text-center content-center text-black text-[16px] font-bold'>
    ACCESORIES
    </div>
    </div>
    <div className='relative overflow-hidden'>
    <Image src={Kids} alt ="Kids' Wear Image" className='width = [240px] height=[242px] object-cover'/>  
    <div className='absolute bottom-5 left-4 w-[120px] h-[48px] bg-footercolumncolor text-black text-[16px] text-center content-center font-bold uppercase'>
    Kids
    </div>
    </div>
    </div>
    </div>
    </div>
    </div> 
    <Desktop/>
    <Carousel2/>
    <Containerfluid/>
    <Desktopblog/>
    <Footer/>
    </>

  )
}

export default home