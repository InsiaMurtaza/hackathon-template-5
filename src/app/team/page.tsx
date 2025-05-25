"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar2 from '@/components/Navbar2'
import { IoIosArrowForward } from "react-icons/io"
import { FaFacebook, FaInstagram, FaTwitter,FaLinkedin } from 'react-icons/fa';
import Footer from '@/components/Footer'
import HeroPic1 from "../../../public/desktop-heropicture1.png"
import HeroPic2 from "../../../public/desktop-heropicture2.png"
import HeroPic3 from "../../../public/desktop-heropicture3.png"
import HeroPic4 from "../../../public/desktop-heropicture4.png"
import HeroPic5 from "../../../public/desktop-heropicture5.png"
import TeamUser1 from "../../../public/team-1-user-1.jpg"
import TeamUser2 from "../../../public/team-1-user-2.jpg"
import TeamUser3 from "../../../public/team-1-user-3.jpg"
import TeamUser4 from "../../../public/team-1-user-4.jpg"
import TeamUser5 from "../../../public/team-1-user-5.jpg"
import TeamUser6 from "../../../public/team-1-user-6.jpg"
import TeamUser7 from "../../../public/team-1-user-7.jpg"
import TeamUser8 from "../../../public/team-1-user-8.jpg"
import TeamUser9 from "../../../public/team-1-user-9.jpg"


function team() {
  return (
    <>
    <div className='flex-col justify-start items-center w-[1440px] h-[3603px] bg-footercolumncolor'>
      
    <Navbar2/>
      
    <div className='flex justify-center items-center w-[870px] h-[280px] pt-10 pb-10 ml-52'>
    <div className='flex-col justify-center items-center w-[788px] h-[180px] space-y-4'>
    <h5 className='text-[16px] text-linkcolor font-bold text-center'>WHAT WE DO</h5>
    <h1 className='text-[58px] text-navbarcolor text-center font-bold text-wrap tracking-tight'>Innovation tailored for you</h1>
    <div className='flex justify-between w-[122px] h-[44px] pt-2 pb-2 space-x-2 ml-[340px]'>
    <Link href="/" className='text-sm text-navbarcolor text-center font-bold'>Home</Link>
    <IoIosArrowForward className='w-4 h-4 text-pricecolor'/>
    <h6 className='text-sm text-linkcolor text-center font-bold cursor-pointer'>Team</h6>
    </div>  
    </div>
    </div>
    <div className='grid grid-cols-4 grid-rows-2 w-[1440px] h-[520px] gap-x-2'>
    <Image src={HeroPic1} alt="HeroPic 1" className='col-span-2 row-span-2 width=[700px] height=[520px]'/>
    <Image src={HeroPic2} alt="HeroPic 2" className='width=[361px] height=[260px] -rotate-0'/>
    <Image src={HeroPic3} alt="HeroPic 3" className='width=[361px] height=[260px] -rotate-0'/>
    <Image src={HeroPic4} alt="HeroPic 4" className='width=[361px] height=[260px] -rotate-0'/>
    <Image src={HeroPic5} alt="HeroPic 5" className='width=[361px] height=[260px] -rotate-0'/>
    </div>

    <div className='flex justify-center w-[1440px] h-[1759px]'>
    <div className='flex-col justify-center w-[1050px] h-[1759px] ml-24 pt-28 pb-28'>
    <div className='flex justify-center w-[607px] h-[50px] ml-52'>
    <h2 className='text-[40px] text-navbarcolor font-bold text-center'>Meet Our Team</h2>
    </div>
    
    <div className='grid grid-cols-3 grid-rows-3 gap-y-28 gap-x-7 mt-28'>

    <div className='flex-col w-[316px] h-[383px] space-y-4'>
    <Image src={TeamUser1} alt="TeamUser1 Image" className='width=[316px] height=[231px]'/>
    <div className='flex-col justify-center items-center w-[316px] h-[152px] space-y-4'>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Username</h5>
    <h6 className='text-sm text-linkcolor text-center font-bold'>Profession</h6>
    <div className='flex justify-between items-center w-[112px] h-6 ml-[104px]'>
    <Link href="#"><FaFacebook className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaInstagram className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaTwitter className='h-6 w-6 text-customecolor'/></Link>
    </div>
    </div>
    </div>

    <div className='flex-col w-[316px] h-[383px] space-y-4'>
    <Image src={TeamUser2} alt="TeamUser2 Image" className='width=[316px] height=[231px]'/>
    <div className='flex-col justify-center items-center w-[316px] h-[152px] space-y-4'>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Username</h5>
    <h6 className='text-sm text-linkcolor text-center font-bold'>Profession</h6>
    <div className='flex justify-between items-center w-[112px] h-6 ml-[104px]'>
    <Link href="#"><FaFacebook className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaInstagram className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaTwitter className='h-6 w-6 text-customecolor'/></Link>
    </div>
    </div>
    </div>

    <div className='flex-col w-[316px] h-[383px] space-y-4'>
    <Image src={TeamUser3} alt="TeamUser3 Image" className='width=[316px] height=[231px]'/>
    <div className='flex-col justify-center items-center w-[316px] h-[152px] space-y-4'>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Username</h5>
    <h6 className='text-sm text-linkcolor text-center font-bold'>Profession</h6>
    <div className='flex justify-between items-center w-[112px] h-6 ml-[104px]'>
    <Link href="#"><FaFacebook className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaInstagram className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaTwitter className='h-6 w-6 text-customecolor'/></Link>
    </div>
    </div>
    </div>

    <div className='flex-col w-[316px] h-[383px] space-y-4'>
    <Image src={TeamUser4} alt="TeamUser4 Image" className='width=[316px] height=[231px]'/>
    <div className='flex-col justify-center items-center w-[316px] h-[152px] space-y-4'>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Username</h5>
    <h6 className='text-sm text-linkcolor text-center font-bold'>Profession</h6>
    <div className='flex justify-between items-center w-[112px] h-6 ml-[104px]'>
    <Link href="#"><FaFacebook className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaInstagram className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaTwitter className='h-6 w-6 text-customecolor'/></Link>
    </div>
    </div>
    </div>

    <div className='flex-col w-[316px] h-[383px] space-y-4'>
    <Image src={TeamUser5} alt="TeamUser5 Image" className='width=[316px] height=[231px]'/>
    <div className='flex-col justify-center items-center w-[316px] h-[152px] space-y-4'>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Username</h5>
    <h6 className='text-sm text-linkcolor text-center font-bold'>Profession</h6>
    <div className='flex justify-between items-center w-[112px] h-6 ml-[104px]'>
    <Link href="#"><FaFacebook className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaInstagram className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaTwitter className='h-6 w-6 text-customecolor'/></Link>
    </div>
    </div>
    </div>

    <div className='flex-col w-[316px] h-[383px] space-y-4'>
    <Image src={TeamUser6} alt="TeamUser6 Image" className='width=[316px] height=[231px]'/>
    <div className='flex-col justify-center items-center w-[316px] h-[152px] space-y-4'>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Username</h5>
    <h6 className='text-sm text-linkcolor text-center font-bold'>Profession</h6>
    <div className='flex justify-between items-center w-[112px] h-6 ml-[104px]'>
    <Link href="#"><FaFacebook className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaInstagram className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaTwitter className='h-6 w-6 text-customecolor'/></Link>
    </div>
    </div>
    </div>

    <div className='flex-col w-[316px] h-[383px] space-y-4'>
    <Image src={TeamUser7} alt="TeamUser7 Image" className='width=[316px] height=[231px]'/>
    <div className='flex-col justify-center items-center w-[316px] h-[152px] space-y-4'>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Username</h5>
    <h6 className='text-sm text-linkcolor text-center font-bold'>Profession</h6>
    <div className='flex justify-between items-center w-[112px] h-6 ml-[104px]'>
    <Link href="#"><FaFacebook className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaInstagram className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaTwitter className='h-6 w-6 text-customecolor'/></Link>
    </div>
    </div>
    </div>

    <div className='flex-col w-[316px] h-[383px] space-y-4'>
    <Image src={TeamUser8} alt="TeamUser8 Image" className='width=[316px] height=[231px]'/>
    <div className='flex-col justify-center items-center w-[316px] h-[152px] space-y-4'>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Username</h5>
    <h6 className='text-sm text-linkcolor text-center font-bold'>Profession</h6>
    <div className='flex justify-between items-center w-[112px] h-6 ml-[104px]'>
    <Link href="#"><FaFacebook className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaInstagram className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaTwitter className='h-6 w-6 text-customecolor'/></Link>
    </div>
    </div>
    </div>

    <div className='flex-col w-[316px] h-[383px] space-y-4'>
    <Image src={TeamUser9} alt="TeamUser9 Image" className='width=[316px] height=[231px]'/>
    <div className='flex-col justify-center items-center w-[316px] h-[152px] space-y-4'>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Username</h5>
    <h6 className='text-sm text-linkcolor text-center font-bold'>Profession</h6>
    <div className='flex justify-between items-center w-[112px] h-6 ml-[104px]'>
    <Link href="#"><FaFacebook className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaInstagram className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaTwitter className='h-6 w-6 text-customecolor'/></Link>
    </div> 
    </div> 
    </div>
    </div>

    </div>
    </div>

    <div className='flex justify-center w-[1440px] h-[442px]'>
    <div className='flex-col justify-center items-center w-[1050px] h-[442px] ml-[370px] pb-20 gap-8'>
    <div className='flex-col justify-center items-center w-[607px] h-[282px] space-y-9'>
    <h2 className='text-[40px] text-navbarcolor text-center font-bold'>Start your 14 days free trial</h2>
    <p className='text-sm text-linkcolor text-center tracking-widest'>
    Met minim Mollie non desert Alamo est sit cliquey dolor 
    do met sent. RELIT official consequent.</p>
    <button className='flex w-[186px] h-[52px] pt-4 pb-4 pr-10 pl-10 ml-56 bg-customecolor cursor-pointer text-sm text-center text-footercolumncolor font-bold'>Try it free now</button>
    <div className='flex justify-between items-center w-[242px] h-[50px] p-2 gap-8 ml-48'>
    <Link href="#"><FaTwitter className='h-8 w-8 text-[#55ACEE]'/></Link>
    <Link href="#"><FaFacebook className='h-8 w-8 text-[#55ACEE] bg-[#395185]'/></Link>
    <Link href="#"><FaInstagram className='h-8 w-8 text-[#000000]'/></Link>
    <Link href="#"><FaLinkedin className='h-8 w-8 text-[#0A66C2]'/></Link>
    

    </div>
    </div>

    </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default team