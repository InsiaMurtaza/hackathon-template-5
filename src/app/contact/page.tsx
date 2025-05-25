import React from 'react'
import Navbar2 from '@/components/Navbar2'
import Image from 'next/image'
import ContactImage from "../../../public/contactimage.png"
import { FiPhone } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6"
import { BsEnvelopeFill } from 'react-icons/bs';
import { PiArrowBendRightDown } from "react-icons/pi"
import Footer from '@/components/Footer';

function contact() {
  return (
    <>

    <div className='flex-col justify-center items-center w-[1440px] h-[882px] bg-footercolumncolor'>
    <Navbar2/>
    <div className='flex justify-between items-center w-[1050px] h-[742px] ml-48 pb-28 gap-20'>
    <div className='flex-col w-[599px] h-[518px] space-y-9'>
    <h5 className='text-[16px] text-navbarcolor font-bold'>CONTACT US</h5>
    <h1 className='text-[58px] text-navbarcolor font-bold'>Get in touch 
    today!</h1>
    <h4 className='text-xl text-linkcolor'>We know how large objects will act, 
    but things on a small scale</h4>
    <text className='text-2xl text-navbarcolor font-bold mt-12'>Fax : +451 215 215</text>
    <text className='text-2xl text-navbarcolor font-bold mt-8'>Phone ; +451 215 215 </text>
    </div>

    <div className='relative flex-col justify-center items-center w-[632px] h-[612px] mt-28'>
    <div className='absolute top-[409px] left-6 w-[15px] h-[15px] rounded-full bg-[#977DF4]'></div>
    <div className='absolute top-[122px] left-[577px] w-[15px] h-[15px] rounded-full bg-[#977DF4]'></div>
    <div className='absolute top-[248px] left-[554px] w-[30px] h-[30px] rounded-full bg-[#FFE9EA]'></div>
    <div className='absolute top-3 w-[77px] h-[77px] rounded-full bg-[#FFE9EA]'></div>
    <div className='absolute left-14 w-[484px] h-[484px] rounded-full bg-[#FFE9EA]'></div>
    <Image src={ContactImage} alt="Contact Image" className='absolute left-9 width=[571px] height=[826px]'/> 
    </div>
    </div>
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[814px] bg-footercolumncolor'> 
    <div className='flex-col justify-start items-center w-[1050px] h-[841px] ml-48 pt-28 pb-28 gap-20'>

    <div className='flex-col justify-center items-center w-[625px] h-[134px] ml-48 space-y-3'>
    <h6 className='text-sm text-navbarcolor text-center font-bold'>VISIT OUR OFFICE</h6>
    <h2 className='text-[40px] text-navbarcolor text-center font-bold'>We help small businesses with big ideas</h2>
    </div>

    <div className='grid grid-cols-3 w-[985px] h-[403px] mt-20'>

    <div className='flex-col justify-center items-center w-[328px] h-[343px] pt-20 pb-20 pr-10 pl-10 space-y-4'>
    <FiPhone className='ml-20 w-[72px] h-[72px] text-customecolor'/>
    <h6 className='text-sm text-navbarcolor text-center font-bold mt-6 ml-6'>georgia.young@ple.com</h6> 
    <h6 className='text-sm text-navbarcolor text-center font-bold'>georgia.young@example.com</h6>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Get Support</h5>
    <button className='w-[189px] h-[54px] rounded-[37px] border-[1px] border-solid border-customecolor pt-4 pb-4 pr-9 pl-9 ml-8 text-sm text-customecolor text-center tracking-tighter font-bold'>Submit Request</button>
    </div>

    <div className='flex-col justify-center items-center w-[328px] h-[403px] pt-20 pb-20 pr-10 pl-10  space-y-4 bg-navbarcolor'>
    <FaLocationDot className='w-[72px] h-[72px] text-customecolor mt-1 ml-[88px]'/>
    <h6 className='text-sm text-footercolumncolor text-center font-bold mt-6 ml-5'>georgia.young@ple.com</h6>
    <h6 className='text-sm text-footercolumncolor text-center font-bold'>georgia.young@example.com</h6>
    <h5 className='text-[16px] text-footercolumncolor text-center font-bold'>Get Support</h5>
    <button className='w-[189px] h-[54px] rounded-[37px] border-[1px] border-solid border-customecolor pt-4 pb-4 pr-9 pl-9 ml-8 text-sm text-customecolor text-center font-bold tracking-tighter'>Submit Request</button>
    </div>

    <div className='flex-col justify-center items-center w-[328px] h-[343px] pt-20 pb-20 pr-10 pl-10 space-y-4'>
    <BsEnvelopeFill className='w-[72px] h-[72px] mt-2 ml-20 text-customecolor '/>
    <h6 className='text-sm text-navbarcolor text-center font-bold mt-6 ml-5'>georgia.young@ple.com</h6>
    <h6 className='text-sm text-navbarcolor text-center font-bold'>georgia.young@example.com</h6>
    <h5 className='text-[16px] text-navbarcolor text-center font-bold'>Get Support</h5>
    <button className='w-[189px] h-[54px] rounded-[37px] border-[1px] border-solid border-customecolor pt-4 pb-4 pr-9 pl-9 ml-8 text-sm text-customecolor text-center font-bold tracking-tighter'>Submit Request</button>
    </div>

    </div>

    </div>
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[348px] bg-footercolumncolor'>
    <div className='flex-col justify-center items-center w-[1050px] h-[360px] mt-10 mb-24 ml-48 space-y-4'>  
    <PiArrowBendRightDown className='w-[200px] h-[100px] ml-96 text-customecolor'/>  
    <div className='flex-col justify-center items-center w-[607px] h-[188px] ml-48 space-y-9'>
    <h6 className='text-[16px] text-navbarcolor text-center font-bold'>WE Can't WAIT TO MEET YOU</h6>
    <h2 className='text-[58px] text-navbarcolor text-center font-bold'>Let’s Talk</h2>
    <button className='w-[186px] h-[52px] rounded-md pt-4 pb-4 pr-10 pl-10 ml-[216px] bg-customecolor text-sm text-footercolumncolor text-center font-bold tracking-tighter'>Try it free now</button>  
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default contact