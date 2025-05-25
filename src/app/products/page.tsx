"use client"
import Navbar from '@/components/Navbar'
import React,{useState} from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from 'react-icons/io'
import Image from 'next/image'
import ProductCover1 from "../../../public/single-product-1-cover-1.jpg"
import ProductCover2 from "../../../public/single-product-1-cover-2.jpg"
import ProductCover3 from "../../../public/single-product-1-cover-3.png"
import ProductCover4 from "../../../public/single-product-1-cover-4.png"
import ProductCover5 from "../../../public/single-product-1-cover-5.png"
import ProductCover6 from "../../../public/single-product-1-cover-6.png"
import ProductCover7 from "../../../public/single-product-1-cover-7.png"
import ProductCover8 from "../../../public/single-product-1-cover-8.png"
import ProductCover9 from "../../../public/single-product-1-cover-9.png"
import ProductCover10 from "../../../public/single-product-1-cover-10.png"
import ProductCover11 from "../../../public/single-product-1-cover-11.png"
import { BiSolidStar,BiStar } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import { BsCart } from 'react-icons/bs'
import { FaEye } from 'react-icons/fa'
import FaBrands1 from "../../../public/fa-brands-1.png"
import FaBrands2 from "../../../public/fa-brands-2.png"
import FaBrands3 from "../../../public/fa-brands-3.png"
import FaBrands4 from "../../../public/fa-brands-4.png"
import FaBrands5 from "../../../public/fa-brands-5.png"
import FaBrands6 from "../../../public/fa-brands-6.png"
import Footer from '@/components/Footer'


function product() {
  const [isFirstImage, setIsFirstImage] = useState(true);

  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center w-[1440px] h-[92px] pt-6 pb-6 border-footercolor'>
    <div className='flex justify-between items-center w-[1033px] h-[44px] gap-7'>
    <div className='flex justify-between items-center w-[119px] h-[44px] pt-2 pb-2 gap-2'>
    <Link href="/" className='text-sm text-navbarcolor text-center font-bold'>Home</Link>
    <IoIosArrowForward className='w-5 h-5 text-pricecolor cursor-pointer'/>
    <h6 className='text-sm text-pricecolor text-center font-bold cursor-pointer'>Shop</h6>
    </div>
    </div>
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[598px] bg-footercolor'>
    <div className='flex justify-between items-center w-[1050px] h-[550px] ml-48 gap-8'>
    <div className='relative overflow-hidden'>
    <Image src={isFirstImage?ProductCover1:ProductCover2} alt="Product1 Image" className='w-[506px] h-[450px]'/>
    <IoIosArrowBack className='absolute top-[259px] left-10 w-6 h-11 text-footercolumncolor' onClick={()=>setIsFirstImage(!isFirstImage)}/>
    <IoIosArrowForward className='absolute top-[259px] left-[447px] w-6 h-11 text-footercolumncolor' onClick={()=>setIsFirstImage(!isFirstImage)}/>
    </div>

    <div className='flex-col justify-center items-center w-[510px] h-[471px] space-y-5'>
    <h4 className='text-xl text-navbarcolor mt-3 ml-6'>Floating Phone</h4>
    <div className='flex justify-between items-center w-[221px] h-6 ml-6 mt-14 gap-3'>
    <ul className='flex justify-between items-center w-[130px] h-[22px] space-x-[5px] '>
    <li><BiSolidStar className='w-[22px] h-[22px] text-[#F3CD03]'/></li>
    <li><BiSolidStar className='w-[22px] h-[22px] text-[#F3CD03]'/></li>
    <li><BiSolidStar className='w-[22px] h-[22px] text-[#F3CD03]'/></li>
    <li><BiSolidStar className='w-[22px] h-[22px] text-[#F3CD03]'/></li>
    <li><BiStar className='w-[22px] h-[22px] text-[#F3CD03]'/></li>  
    </ul>
    <h6 className='text-sm text-linkcolor font-bold tracking-tight'>10 Reviews</h6>
    </div>
    <h3 className='text-2xl text-navbarcolor font-bold mt-24 ml-6'>$1,139.33</h3>
    <div className='flex justify-between items-center w-[159px] h-6 ml-6 gap-1'>
    <h6 className='text-sm text-linkcolor font-bold'>Availability  :</h6>
    <h6 className='text-sm text-customecolor font-bold'>In Stock </h6>
    </div>
    <p className='text-sm text-[#858585] mt-48 ml-6'>Met minim Mollie non desert Alamo est sit cliquey dolor 
    do met sent. RELIT official consequent door ENIM RELIT Mollie. 
    Excitation venial consequent sent nostrum met.</p>
    <hr className='w-[445px] ml-6 border-[1px] border-solid border-pricecolor'/>
    <ul className='flex justify-center items-center w-[150px] h-[30px] ml-6 space-x-2'>
    <li className='w-[30px] h-[30px] rounded-full bg-customecolor'></li>
    <li className='w-[30px] h-[30px] rounded-full bg-[#2DC071]'></li>
    <li className='w-[30px] h-[30px] rounded-full bg-[#E77C40]'></li>
    <li className='w-[30px] h-[30px] rounded-full bg-navbarcolor'></li>
    </ul>
    <div className='flex justify-between items-center w-[298px] h-[44px] ml-6 space-x-2'>
    <button className='w-[148px] h-[44px] rounded-md pt-3 pb-3 pl-5 pr-5 bg-customecolor'>
    <h6 className='text-sm text-footercolumncolor text-center font-bold'>Select Options</h6>
    </button>
    <div className='flex justify-center items-center w-10 h-10 text-footercolumncolor rounded-[45px] border-[1px] border-solid border-[#E8E8E8]'>  
    <FiHeart className='w-5 h-5 text-navbarcolor'/>
    </div>
    <div className='flex justify-center items-center w-10 h-10 text-footercolumncolor rounded-[45px] border-[1px] border-solid border-[#E8E8E8]'>  
    <BsCart className='w-5 h-5 text-navbarcolor'/>
    </div>
    <div className='flex justify-center items-center w-10 h-10 text-footercolumncolor rounded-[45px] border-[1px] border-solid border-[#E8E8E8]'>  
    <FaEye className='w-5 h-5 text-[#000000]'/>
    </div>
    </div>
    </div>
 
    </div> 
    </div> 


    <div className='flex justify-center items-center w-[1440px] h-[91px] bg-footercolumncolor'>
    <ul className='flex justify-center items-center w-[1050px] h-[72px] mt-3 ml-48 space-x-5'>
    <Link href="#"><li className='text-sm text-linkcolor text-center font-semibold'>Description</li></Link>
    <Link href="#"><li className='text-sm text-linkcolor text-center font-bold'>Additional Information</li></Link>
    <Link href="#"><li className='text-sm text-linkcolor text-center font-bold'></li>Reviews
    <text className='text-sm text-pricegreencolor text-center font-bold ml-2'>(0)</text>
    </Link>
    </ul>
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[499px] bg-footercolumncolor'>
    <div className='grid grid-cols-3 w-[1050px] h-[427px] pt-6 pb-12 gap-7'>

    <div className='flex justify-start items-start w-[325px] h-[382px] rounded-[6px] ml-[3px] bg-[#C4C4C433] bg-opacity-20'>
    <Image src={ProductCover3} alt="Product3 Image" className='width=[316px] h=[372px]'/>  
    </div>

    <div className='flex-col justify-start items-center w-[332px] h-[427px] rounded-lg space-y-8'>
    <h5 className='text-2xl text-navbarcolor font-bold'>the quick fox jumps over </h5>
    <h6 className='text-sm text-linkcolor tracking-widest'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
    <br/><br/>
    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
    <br/><br/>
    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>  
    </div>

    <div className='grid grid-rows-2 w-[332px] h-[367px]'>

    <div className='flex-col justify-start items-center w-[332px] h-[188px] rounded-lg space-y-5'>
    <h3 className='text-2xl text-navbarcolor font-bold'>the quick fox jumps over </h3>
    
    <div className='flex justify-start items-center w-[303px] h-[24px] space-x-5'>
    <IoIosArrowBack className='w-3 h-4 text-linkcolor'/>
    <h6 className='text-sm text-linkcolor font-bold tracking-tight'>the quick fox jumps over the lazy dog</h6>
    </div>
    
    <div className='flex justify-start items-center w-[303px] h-[24px] space-x-5'>
    <IoIosArrowBack className='w-3 h-4 text-linkcolor'/>
    <h6 className='text-sm text-linkcolor font-bold tracking-tight'>the quick fox jumps over the lazy dog</h6>
    </div>

    <div className='flex justify-start items-center w-[303px] h-[24px] space-x-5'>
    <IoIosArrowBack className='w-3 h-4 text-linkcolor'/>
    <h6 className='text-sm text-linkcolor font-bold tracking-tight'>the quick fox jumps over the lazy dog</h6>
    </div>

    <div className='flex justify-start items-center w-[303px] h-[24px] space-x-5'>
    <IoIosArrowBack className='w-3 h-4 text-linkcolor'/>
    <h6 className='text-sm text-linkcolor font-bold tracking-tight'>the quick fox jumps over the lazy dog</h6>
    </div>

    </div> 

    <div className='flex-col justify-start items-center w-[332px] h-[179px] rounded-lg space-y-5 pt-10'>
    <h3 className='text-2xl text-navbarcolor font-bold'>the quick fox jumps over </h3>  

    <div className='flex justify-start items-center w-[303px] h-[24px] space-x-5'>
    <IoIosArrowBack className='w-3 h-4 text-linkcolor'/>
    <h6 className='text-sm text-linkcolor font-bold tracking-tight'>the quick fox jumps over the lazy dog</h6>
    </div>

    <div className='flex justify-start items-center w-[303px] h-[24px] space-x-5'>
    <IoIosArrowBack className='w-3 h-4 text-linkcolor'/>
    <h6 className='text-sm text-linkcolor font-bold tracking-tight'>the quick fox jumps over the lazy dog</h6>
    </div>

    <div className='flex justify-start items-center w-[303px] h-[24px] space-x-5'>
    <IoIosArrowBack className='w-3 h-4 text-linkcolor'/>
    <h6 className='text-sm text-linkcolor font-bold tracking-tight'>the quick fox jumps over the lazy dog</h6>
    </div>

    </div>
     
    </div>

    </div>
    </div>
    
    <div className='flex justify-center items-center w-[1440px] h-[1086px] bg-footercolor'>
    <div className='flex-col justify-center items-center w-[1124px] h-[1086px] ml-48 pt-12 pb-12 space-y-6'>

    <div className='flex justify-between items-center w-[1040px] h-[32px]'>
    <h3 className='text-2xl text-navbarcolor font-bold'>BESTSELLER PRODUCTS</h3>  
    </div>  

    <div className='w-[1042px] h-[2px] bg-[#ECECEC]'></div>

    <div className='grid grid-cols-4 grid-rows-2 w-[1050px] h-[910px] space-x-7 space-y-6'>
    
    <div className='flex-col justify-center items-center w-[239px] h-[442px] bg-footercolumncolor mt-6 ml-7'>
    <Image src={ProductCover4} alt="Product4 Image" className='w-[239px] h-[280px]'/>

    <div className='flex-col justify-center w-[239px] h-[162px] pt-6 pb-9 pr-6 pl-6 space-y-4'>
    <h5 className='text-[16px] text-navbarcolor font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor font-bold'>English Department</Link>
    <div className='flex justify-center items-center w-[108px] h-[34px] pt-1 pb-1 pr-1 pl-1 space-x-1'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5> 
    </div>
    </div> 
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[442px] bg-footercolumncolor'>
    <Image src={ProductCover5} alt="Product5 Image" className='w-[239px] h-[280px]'/>

    <div className='flex-col justify-center w-[239px] h-[162px] pt-6 pb-9 pr-6 pl-6 space-y-4'>
    <h5 className='text-[16px] text-navbarcolor font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor font-bold'>English Department</Link>
    <div className='flex justify-center items-center w-[108px] h-[34px] pt-1 pb-1 pr-1 pl-1 space-x-1'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5> 
    </div>
    </div>
    </div> 

    <div className='flex-col justify-center items-center w-[239px] h-[442px] bg-footercolumncolor'>
    <Image src={ProductCover6} alt="Product6 Image" className='w-[239px] h-[280px]'/>

    <div className='flex-col justify-center w-[239px] h-[162px] pt-6 pb-9 pr-6 pl-6 space-y-4'>
    <h5 className='text-[16px] text-navbarcolor font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor font-bold'>English Department</Link>
    <div className='flex justify-center items-center w-[108px] h-[34px] pt-1 pb-1 pr-1 pl-1 space-x-1'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5> 
    </div>
    </div> 
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[442px] bg-footercolumncolor'>
    <Image src={ProductCover7} alt="Product7 Image" className='w-[239px] h-[280px]'/>

    <div className='flex-col justify-center w-[239px] h-[162px] pt-6 pb-9 pr-6 pl-6 space-y-4'>
    <h5 className='text-[16px] text-navbarcolor font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor font-bold'>English Department</Link>
    <div className='flex justify-center items-center w-[108px] h-[34px] pt-1 pb-1 pr-1 pl-1 space-x-1'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5> 
    </div>
    </div> 
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[442px] bg-footercolumncolor'>
    <Image src={ProductCover8} alt="Product8 Image" className='w-[239px] h-[280px]'/>

    <div className='flex-col justify-center w-[239px] h-[162px] pt-6 pb-9 pr-6 pl-6 space-y-4'>
    <h5 className='text-[16px] text-navbarcolor font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor font-bold'>English Department</Link>
    <div className='flex justify-center items-center w-[108px] h-[34px] pt-1 pb-1 pr-1 pl-1 space-x-1'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5> 
    </div>
    </div>
    </div> 

    <div className='flex-col justify-center items-center w-[239px] h-[442px] bg-footercolumncolor'>
    <Image src={ProductCover9} alt="Product9 Image" className='w-[239px] h-[280px]'/>

    <div className='flex-col justify-center w-[239px] h-[162px] pt-6 pb-9 pr-6 pl-6 space-y-4'>
    <h5 className='text-[16px] text-navbarcolor font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor font-bold'>English Department</Link>
    <div className='flex justify-center items-center w-[108px] h-[34px] pt-1 pb-1 pr-1 pl-1 space-x-1'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5> 
    </div>
    </div>
    </div> 

    <div className='flex-col justify-center items-center w-[239px] h-[442px] bg-footercolumncolor'>
    <Image src={ProductCover10} alt="Product10 Image" className='w-[239px] h-[280px]'/>

    <div className='flex-col justify-center w-[239px] h-[162px] pt-6 pb-9 pr-6 pl-6 space-y-4'>
    <h5 className='text-[16px] text-navbarcolor font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor font-bold'>English Department</Link>
    <div className='flex justify-center items-center w-[108px] h-[34px] pt-1 pb-1 pr-1 pl-1 space-x-1'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5> 
    </div>
    </div>
    </div> 

    <div className='flex-col justify-center items-center w-[239px] h-[442px] bg-footercolumncolor'>
    <Image src={ProductCover11} alt="Product11 Image" className='w-[239px] h-[280px]'/>

    <div className='flex-col justify-center w-[239px] h-[162px] pt-6 pb-9 pr-6 pl-6 space-y-4'>
    <h5 className='text-[16px] text-navbarcolor font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor font-bold'>English Department</Link>
    <div className='flex justify-center items-center w-[108px] h-[34px] pt-1 pb-1 pr-1 pl-1 space-x-1'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5> 
    </div>
    </div>
    </div> 

    </div>

    </div>
    </div>

    <div className='flex justify-center items-center w-[1440px] h-[175px] bg-footercolor'>
    <div className='flex justify-between items-center w-[1050px] h-[175px] pt-12 pb-12 gap-7 ml-48'>
    <Image src={FaBrands1} alt="faBrands1 Image" className='width=[103px] h-[34px] text-linkcolor'/>
    <Image src={FaBrands2} alt="faBrands2 Image" className='width=[83px] h-[59px] text-linkcolor'/>
    <Image src={FaBrands3} alt="faBrands3 Image" className='width=[102px] h-[75px] text-linkcolor'/>
    <Image src={FaBrands4} alt="faBrands4 Image" className='width=[103px] h-[42px] text-linkcolor'/>
    <Image src={FaBrands5} alt="faBrands5 Image" className='width=[104px] h-[62px] text-linkcolor'/>
    <Image src={FaBrands6} alt="faBrands6 Image" className='width=[76px] h-[72px] text-linkcolor'/>
    </div>
    </div>

    <Footer/>
    
    </>
  )
}

export default product