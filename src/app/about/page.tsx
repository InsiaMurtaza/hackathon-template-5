import React from 'react'
import Navbar2 from '@/components/Navbar2'
import Link from 'next/link'
import Image from 'next/image'
import Technology1 from "../../../public/technology 1.png"
import VideoImage from "../../../public/video image.png"
import { FaPlay,FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa'
import TeamUser4 from "../../../public/team-1-user-4.jpg"
import TeamUser5 from "../../../public/team-1-user-5.jpg"
import TeamUser6 from "../../../public/team-1-user-6.jpg"
import FaBrands1 from "../../../public/fa-brands-1.png"
import FaBrands2 from "../../../public/fa-brands-2.png"
import FaBrands3 from "../../../public/fa-brands-3.png"
import FaBrands4 from "../../../public/fa-brands-4.png"
import FaBrands5 from "../../../public/fa-brands-5.png"
import FaBrands6 from "../../../public/fa-brands-6.png"
import ProductList8 from "../../../public/product-list-8.png"
import Footer from '@/components/Footer'

function about() {
  return (
    <>

    <Navbar2/>

    <div className='flex justify-between items-center w-[1050px] h-[545px] mt-24 ml-48 pt-28 pb-28 gap-20 bg-footercolumncolor'>
    <div className='flex-col w-[599px] h-[321px] space-y-9'>
    <h5 className='text-[16px] text-navbarcolor font-bold'>ABOUT COMPANY</h5>
    <h1 className='text-[58px] text-navbarcolor font-bold'>ABOUT US</h1>
    <h4 className='text-xl text-linkcolor tracking-wider'>We know how large objects will act,<br/>
    but things on a small scale</h4>
    </div> 

    <div className='relative w-[632px] h-[612px]'>
     
    <div className='absolute top-32 left-[577px] w-[15px] h-[15px]  rounded-full bg-[#977DF4]'></div>
    <div className='absolute top-[248px] left-[554px] w-[30px] h-[30px] rounded-full bg-[#FFE9EA]'></div>
    <div className='absolute top-3 w-[77px] h-[77px] rounded-full bg-[#FFE9EA]'></div>
    <div className='absolute top-[409px] left-6 w-[15px] h-[15px] rounded-full bg-[#977DF4]'></div>  
    <div className='absolute left-14 w-[484px] h-[484px] rounded-full bg-[#FFE9EA]'></div>
    <Image src={Technology1} alt="Technology1 Image" className='absolute top-14 left-9 width=[571px] height=[668px] object-cover'/>   
    
    </div>

    </div>

    <div className='flex justify-center items-center w-[1440px] h-[236px] pt-6 pb-6 bg-footercolumncolor'>
    <div className='flex justify-between items-center w-[1018px] h-[188px] ml-20 gap-14'>
    <div className='flex-col w-[394px] h-[188px] pt-6 pb-6 space-y-6'>
    <p className='text-sm text-[#E74040]'>Problems trying</p>
    <h2 className='text-2xl text-navbarcolor font-bold'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h2>
    </div>
    <div className='flex justify-center items-center w-[529px] h-[40px]'>
    <p className='text-sm text-linkcolor'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
    </div> 
    </div>  

    </div>

    <div className='flex justify-center items-center w-[1440px] h-[264px] bg-footercolumncolor'>
    <div className='flex justify-between items-center w-[1050px] h-[264px] ml-48 pt-20 pb-20 gap-7'>
    <div className='flex-col justify-center items-center w-[238px] h-[104px] space-y-3'>
    <h1 className='text-[58px] text-navbarcolor text-center font-bold'>15K</h1>
    <h5 className='text-[16px] text-linkcolor text-center font-bold'>Happy Customers</h5>
    </div>  
    <div className='flex-col justify-center items-center w-[241px] h-[104px] space-y-3'>
    <h1 className='text-[58px] text-navbarcolor text-center font-bold'>150K</h1>
    <h5 className='text-[16px] text-linkcolor text-center font-bold'>Monthly Visitors</h5>
    </div>
    <div className='flex-col justify-center items-center w-[240px] h-[104px] space-y-3'>
    <h1 className='text-[58px] text-navbarcolor text-center font-bold'>15</h1>
    <h5 className='text-[16px] text-linkcolor text-center font-bold'>Countries  Worldwide</h5>
    </div>
    <div className='flex-col justify-center items-center w-[240px] h-[104px] space-y-3'>
    <h1 className='text-[58px] text-navbarcolor text-center font-bold'>100+</h1>
    <h5 className='text-[16px] text-linkcolor text-center font-bold'>Top Partners</h5>
    </div>
    </div>
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[764px] bg-footercolumncolor'>
    <div className='flex justify-center items-center w-[1050px] h-[764px] ml-48'>
    <div className='relative overflow-hidden'>
    <Image src={VideoImage} alt="video downloading" className='width=[989px] height=[540px] bg-custom-gradient object-cover'/>
    <button className='absolute top-56 left-[448px] rounded-full pt-8 pb-8 pr-9 pl-9 content-center bg-customecolor cursor-pointer'>
    <FaPlay className='w-5 h-6 text-footercolumncolor'/></button>
    </div>
    </div>  
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[826px] bg-footercolumncolor'>
    <div className='flex-col justify-center items-center w-[1050px] h-[819px] ml-48 pt-28 pb-28 space-y-28'>

    <div className='flex-col justify-center items-center w-[607px] h-[100px] space-y-3 ml-48'>
    <h2 className='text-[40px] text-navbarcolor text-center font-bold'>Meet Our Team</h2>
    <p className='text-sm text-linkcolor text-center tracking-wider'>Problems trying to resolve the conflict between<br/> 
    the two major realms of Classical physics: Newtonian mechanics</p>
    </div>

    <div className='grid grid-cols-3 w-[1034px] h-[383px] gap-8'>
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

    </div>
    </div>
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[479px] bg-footercolor'>
    <div className='flex-col justify-center items-center w-[1050px] h-[479px] pt-20 pb-20 gap-6'>
    <div className='flex-col justify-center items-center w-[850px] h-[120px] ml-28 space-y-7'>
    <h2 className='text-[40px] text-navbarcolor text-center font-bold '>Big Companies Are Here</h2>
    <p className='text-sm text-linkcolor text-center tracking-wider'>Problems trying to resolve the conflict between<br/> 
    the two major realms of Classical physics: Newtonian mechanics</p>
    </div> 
    <div className='flex justify-between items-center w-[1054px] h-[175px] pt-12 pb-12 gap-8'>
    <Image src={FaBrands1} alt="faBrands1 Image" className='width=[103px] h-[34px] text-linkcolor'/>
    <Image src={FaBrands2} alt="faBrands2 Image" className='width=[83px] h-[59px] text-linkcolor'/>
    <Image src={FaBrands3} alt="faBrands3 Image" className='width=[102px] h-[75px] text-linkcolor'/>
    <Image src={FaBrands4} alt="faBrands4 Image" className='width=[103px] h-[42px] text-linkcolor'/>
    <Image src={FaBrands5} alt="faBrands5 Image" className='width=[104px] h-[62px] text-linkcolor'/>
    <Image src={FaBrands6} alt="faBrands6 Image" className='width=[76px] h-[72px] text-linkcolor'/>
    </div>
    </div>
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[637px]'>
    
    <div className='relative flex justify-center items-center w-[1200px] h-full bg-[#2A7CC7]'>

    <div className='absolute left-48 top-48 bottom-28 flex-col justify-center items-center w-[438px] h-[238px] space-y-6'>
    <h5 className='text-[16px] text-footercolumncolor font-bold'>WORK WITH US</h5>
    <h2 className='text-[40px] text-footercolumncolor font-bold'>Now Let’s grow Yours</h2>
    <p className='text-sm text-footercolumncolor'>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th</p>
    <button className='w-[132px] h-[52px] border-[1px] border-solid border-footercolor rounded-md pt-4 pb-4 pr-10 pl-10 gap-2 text-footercolor text-center text-sm font-bold'>Button</button>
    </div>
    
    <Image src={ProductList8} alt="Product List 8 Image" className='w-[590px] h-[640px] ml-[850px]'/>
    </div>
    </div>

    <Footer/>

    </>
  )
}

export default about