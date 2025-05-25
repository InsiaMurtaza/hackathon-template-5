"use client"
import React,{ useState} from 'react'
import Navbar2 from '@/components/Navbar2'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosArrowForward,IoLogoFacebook } from "react-icons/io"
import { FaCheckCircle,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa'
import FaBrands1 from "../../../public/fa-brands-1.png"
import FaBrands2 from "../../../public/fa-brands-2.png"
import FaBrands3 from "../../../public/fa-brands-3.png"
import FaBrands4 from "../../../public/fa-brands-4.png"
import FaBrands5 from "../../../public/fa-brands-5.png"
import FaBrands6 from "../../../public/fa-brands-6.png"
import Footer from '@/components/Footer'


function pricing() {
  const [showMenu1,setShowMenu1] = useState(false);
  const [showMenu2,setShowMenu2] = useState(false);
  const [showMenu3,setShowMenu3] = useState(false);
  return (
    <>
    <div className='flex-col justify-center items-center w-[1440px] h-[1162px] pt-12 pb-12 pl-10 pr-10 bg-footercolor'>
    
    <Navbar2/>

    <div className='flex justify-center items-center w-[1168px] h-[280px] bg-footercolumncolor pt-12 pb-12 ml-48'>
    <div className='flex-col justify-center items-center w-[427px] h-[180px] space-y-4'>
    <h5 className='text-[16px] text-linkcolor text-center font-bold'>PRICING</h5>
    <h1 className='text-[58px] text-navbarcolor text-center font-bold tracking-tight'>Simple Pricing</h1>
    <div className='flex justify-between items-center w-[134px] h-[44px] pt-3 pb-3 gap-3 ml-40'>
    <Link href="/" className='text-sm text-navbarcolor font-bold'>Home</Link>  
    <IoIosArrowForward className='w-5 h-5 text-pricecolor'/>
    <h6 className='text-sm text-linkcolor font-bold'>Pricing</h6>
    </div>
    </div>
    </div>

    <div className='flex-col justify-center items-center w-[633px] h-[100px] mt-4 mb-4 space-y-3 ml-[500px]'>
    <h2 className='text-[40px] text-navbarcolor text-center font-bold'>Pricing</h2>
    <p className='text-sm text-linkcolor text-center'>Problems trying to resolve the conflict between 
    the two major realms of Classical physics: Newtonian mechanics </p>
    </div>  
    
    <div className='flex justify-center items-center w-[311px] h-[44px] space-x-4 mt-4 ml-[650px]'>
    <h5 className='text-[16px] text-navbarcolor font-bold'>Monthly</h5>
    <div className='relative w-11 h-6 rounded-2xl bg-footercolumncolor border-[1px] border-solid border-customecolor'>
    <div className='absolute top-[1.5px] left-1 w-5 h-5 rounded-full bg-[#EBEBEB] border-[1px] border-solid border-[#D0D0D0]'>
    </div>
    </div>
    <h5 className='text-[16px] text-navbarcolor font-bold'>Yearly</h5>
    <button className='w-[109px] h-[44px] rounded-[37px] pt-2 pb-2 pr-5 pl-5 bg-[#B2E3FF] cursor-pointer'>
    <h6 className='text-sm text-customecolor text-center font-bold tracking-tighter'>Save 25%</h6>  
    </button>
    </div>
    
    
    <div className='grid grid-cols-3 w-[985px] h-[352px] ml-[315px] mt-10'>

    <div className='flex-col justify-center items-center w-[327px] h-[332px] rounded-xl mt-10 pt-12 pb-12 pr-10 pl-10 space-y-9 bg-footercolumncolor border-customecolor border-[1px] border-solid'>
    <h3 className='text-2xl text-navbarcolor font-bold'>FREE</h3>
    <h5 className='text-[16px] text-linkcolor font-bold'>Organize across all apps by hand</h5>
    <div className='flex justify-center items-center w-[114px] h-[56px] gap-3'>
    <h2 className='text-[40px] text-customecolor font-bold'>0</h2>
    <div className='flex-col justify-start items-center w-[76px] h-[56px]'>
     <h3 className='text-2xl text-customecolor font-bold'>$</h3>
     <h5 className='text-sm text-[#8EC2F2] font-bold'>Per Month</h5> 
    </div>
    </div>
    <div className='relative cursor-pointer' onClick={()=>setShowMenu1(!showMenu1)}>
    <div className='flex justify-center items-center w-[247px] h-[32px] gap-3'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    {showMenu1 &&
    <ul className='absolute top-8 flex-col justify-center items-center w-[247px] h-[204px] gap-4'>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li><button className='w-[246px] h-[52px] rounded-md pt-4 pb-4 pr-10 pl-10 bg-navbarcolor text-sm text-footercolumncolor text-center font-bold'>Try for free</button>
    </li>
    </ul>}
    </div>
    </div>
    </div>

    <div className='flex-col justify-center items-center w-[329px] h-[352px] rounded-xl pt-16 pb-16 pl-10 pr-10 space-y-9 bg-navbarcolor border-[1px] border-solid border-customecolor'>
    <h3 className='text-2xl text-footercolumncolor font-bold'>STANDARD</h3>
    <h5 className='text-[16px] text-footercolumncolor font-bold'>Organize across all apps by hand</h5>
    <div className='flex justify-center items-center w-[174px] h-[56px] space-x-3'>
    <h2 className='text-[40px] text-customecolor font-bold'>9.99</h2>
    <div className='flex-col justify-start items-center w-[76px] h-[56px]'>
     <h3 className='text-2xl text-customecolor font-bold'>$</h3>
     <h5 className='text-sm text-[#8EC2F2] font-bold'>Per Month</h5> 
    </div> 
    </div>

    <div className='relative cursor-pointer' onClick={()=>setShowMenu2(!showMenu2)}>
    <div className='flex justify-center items-center w-[247px] h-[32px] gap-3'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-footercolumncolor font-bold'>Unlimited product updates</h6>
    {showMenu2 &&
    <ul className='absolute top-8 flex-col justify-center items-center w-[247px] h-[204px] gap-4'>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li><button className='w-[246px] h-[52px] rounded-md pt-4 pb-4 pr-10 pl-10 bg-navbarcolor text-sm text-footercolumncolor text-center font-bold'>Try for free</button>
    </li>
    </ul>}
    </div>
    </div>
    </div>

    <div className='flex-col justify-center items-center w-[329px] h-[332px] rounded-xl mt-10 pt-12 pb-12 pr-10 pl-10 space-y-9 bg-footercolumncolor border-customecolor border-[1px] border-solid'>
    <h3 className='text-2xl text-navbarcolor font-bold'>FREE</h3>
    <h5 className='text-[16px] text-linkcolor font-bold'>Organize across all apps by hand</h5>
    <div className='flex justify-center items-center w-[114px] h-[56px] gap-3'>
    <h2 className='text-[40px] text-customecolor font-bold'>0</h2>
    <div className='flex-col justify-start items-center w-[76px] h-[56px]'>
     <h3 className='text-2xl text-customecolor font-bold'>$</h3>
     <h5 className='text-sm text-[#8EC2F2] font-bold'>Per Month</h5> 
    </div>
    </div>
    <div className='relative cursor-pointer' onClick={()=>setShowMenu3(!showMenu3)}>
    <div className='flex justify-center items-center w-[247px] h-[32px] gap-3'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    {showMenu3 &&
    <ul className='absolute top-8 flex-col justify-center items-center w-[247px] h-[204px] gap-4'>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li className='flex justify-center items-center w-[247px] h-[32px] gap-3 hover:scale-110'>
    <FaCheckCircle className='w-8 h-8 text-[#2DC071]'/>
    <h6 className='text-sm text-navbarcolor font-bold'>Unlimited product updates</h6>
    </li>
    <li><button className='w-[246px] h-[52px] rounded-md pt-4 pb-4 pr-10 pl-10 bg-navbarcolor text-sm text-footercolumncolor text-center font-bold'>Try for free</button>
    </li>
    </ul>}
    </div>
    </div>
    </div>


    </div>

    </div>

    <div className='flex justify-center items-start w-[1440px] h-[365px] bg-footercolor'>
    <div className='flex-col justify-start items-center w-[1050px] h-[365px] space-y-8 ml-48'>
    <h4 className='text-xl text-navbarcolor text-center'>Trusted By Over 4000 Big Companies</h4>
    <div className='flex justify-between items-center w-[1050px] h-[175px] pt-12 pb-12 gap-8'>
    <Image src={FaBrands1} alt="faBrands1 Image" className='width=[103px] h-[34px] text-linkcolor'/>
    <Image src={FaBrands2} alt="faBrands2 Image" className='width=[83px] h-[59px] text-linkcolor'/>
    <Image src={FaBrands3} alt="faBrands3 Image" className='width=[102px] h-[75px] text-linkcolor'/>
    <Image src={FaBrands4} alt="faBrands4 Image" className='width=[103px] h-[42px] text-linkcolor'/>
    <Image src={FaBrands5} alt="faBrands5 Image" className='width=[104px] h-[62px] text-linkcolor'/>
    <Image src={FaBrands6} alt="faBrands6 Image" className='width=[76px] h-[72px] text-linkcolor'/>
    </div>
    </div> 
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[1037px] bg-footercolumncolor'>

    <div className='flex-col justify-center items-center w-[1050px] h-[1037px] ml-48 pt-20 pb-20 space-y-12'>

    <div className='flex-col justify-center items-center w-[651px] h-[120px] pb-20 space-y-3 ml-48'>
    <h2 className='text-[40px] text-navbarcolor text-center font-bold'>Pricing FAQs</h2>
    <p className='text-xl text-linkcolor text-center tracking-widest'>Problems trying to resolve the conflict between 
    the two major realms of Classical physics</p>
    </div>

    <div className='grid grid-cols-2 grid-rows-3 w-[1050px] h-[537px] gap-8 '>

    <div className='flex-col justify-center items-center w-[491px] h-[159px] rounded-lg p-6 gap-5'>
    <div className='flex justify-start items-center w-[490px] h-[29px] gap-5'>
    <IoIosArrowForward className='w-4 h-4 text-customecolor'/>
    <h5 className='text-[16px] text-navbarcolor font-bold'>the quick fox jumps over the lazy dog</h5>
    </div>
    <h6 className='text-sm text-linkcolor text-left ml-9'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
    </div>

    <div className='flex-col justify-center items-center w-[491px] h-[159px] rounded-lg p-6 gap-5'>
    <div className='flex justify-start items-center w-[490px] h-[29px] gap-5'>
    <IoIosArrowForward className='w-4 h-4 text-customecolor'/>
    <h5 className='text-[16px] text-navbarcolor font-bold'>the quick fox jumps over the lazy dog</h5>
    </div>
    <h6 className='text-sm text-linkcolor text-left ml-9'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
    </div>

    <div className='flex-col justify-center items-center w-[491px] h-[159px] rounded-lg p-6 gap-5'>
    <div className='flex justify-start items-center w-[490px] h-[29px] gap-5'>
    <IoIosArrowForward className='w-4 h-4 text-customecolor'/>
    <h5 className='text-[16px] text-navbarcolor font-bold'>the quick fox jumps over the lazy dog</h5>
    </div>
    <h6 className='text-sm text-linkcolor text-left ml-9'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
    </div>

    <div className='flex-col justify-center items-center w-[491px] h-[159px] rounded-lg p-6 gap-5'>
    <div className='flex justify-start items-center w-[490px] h-[29px] gap-5'>
    <IoIosArrowForward className='w-4 h-4 text-customecolor'/>
    <h5 className='text-[16px] text-navbarcolor font-bold'>the quick fox jumps over the lazy dog</h5>
    </div>
    <h6 className='text-sm text-linkcolor text-left ml-9'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
    </div>

    <div className='flex-col justify-center items-center w-[491px] h-[159px] rounded-lg p-6 gap-5'>
    <div className='flex justify-start items-center w-[490px] h-[29px] gap-5'>
    <IoIosArrowForward className='w-4 h-4 text-customecolor'/>
    <h5 className='text-[16px] text-navbarcolor font-bold'>the quick fox jumps over the lazy dog</h5>
    </div>
    <h6 className='text-sm text-linkcolor text-left ml-9'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
    </div>

    <div className='flex-col justify-center items-center w-[491px] h-[159px] rounded-lg p-6 gap-5'>
    <div className='flex justify-start items-center w-[490px] h-[29px] gap-5'>
    <IoIosArrowForward className='w-4 h-4 text-customecolor'/>
    <h5 className='text-[16px] text-navbarcolor font-bold'>the quick fox jumps over the lazy dog</h5>
    </div>
    <h6 className='text-sm text-linkcolor text-left ml-9'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
    </div>

    </div>

    <p className='text-xl text-linkcolor text-center'>Haven’t got your answer? Contact our support</p>
    
    </div>  
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[500px] bg-footercolumncolor'>
    <div className='flex justify-center items-start w-[1050px] h-[500px] ml-48'>

    <div className='flex-col justify-start items-center w-[607px] h-[282px] space-y-9'>
    <h2 className='text-[40px] text-navbarcolor text-center font-bold'>Start your 14 days free trial</h2>
    <p className='text-[16px] text-linkcolor text-center tracking-widest'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
    <button className='ml-56 w-[186px] h-[52px] rounded-md pt-4 pb-4 pr-10 pl-10 bg-customecolor text-sm text-footercolumncolor text-center font-bold'>Try it free now</button>
    <div className='flex justify-between items-center ml-[198px] w-[242px] h-[50px] p-3 gap-7'>
    <FaTwitter className='w-8 h-8 text-[#55ACEE]'/>
    <IoLogoFacebook className='w-8 h-8 text-[#395185]'/>
    <FaInstagram className='w-8 h-8 text-[#000000]'/>
    <FaLinkedin className='w-8 h-8 text-[#0A66C2]'/>
    </div>
    </div>

    </div>
    </div>
    <Footer/>
    </>
  )
}

export default pricing