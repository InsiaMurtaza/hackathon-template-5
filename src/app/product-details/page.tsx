"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Navbar from "@/components/Navbar";
import { IoIosArrowForward,IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import Cardcover5 from "../../../public/card-cover-5.jpg"
import Cardcover6 from "../../../public/card-cover-6.jpg"
import Cardcover7 from "../../../public/card-cover-7.jpg"
import Cardcover8 from "../../../public/card-cover-8.jpg"
import Cardcover9 from "../../../public/card-cover-9.jpg"
import { BsFillGridFill } from "react-icons/bs";
import { TbListCheck } from "react-icons/tb"
import { Roboto } from '@next/font/google';
import FaBrands1 from "../../../public/fa-brands-1.png"
import FaBrands2 from "../../../public/fa-brands-2.png"
import FaBrands3 from "../../../public/fa-brands-3.png"
import FaBrands4 from "../../../public/fa-brands-4.png"
import FaBrands5 from "../../../public/fa-brands-5.png"
import FaBrands6 from "../../../public/fa-brands-6.png"
import Footer from '@/components/Footer';
import ProductList1 from "../../../public/product-list-1.png"
import ProductList2 from "../../../public/product-list-2.png"
import ProductList3 from "../../../public/product-list-3.png"
import ProductList4 from "../../../public/product-list-4.png"
import ProductList5 from "../../../public/product-list-5.png"
import ProductList6 from "../../../public/product-list-6.png"
import ProductList7 from "../../../public/product-list-7.png"
import ProductList8 from "../../../public/product-list-8.png"
import ProductList9 from "../../../public/product-list-9.png"
import ProductList10 from "../../../public/product-list-10.png"
import ProductList11 from "../../../public/product-list-11.png"
import ProductList12 from "../../../public/product-list-12.png"

const roboto = Roboto({
  weight: ["400"],
  subsets:["latin"],
});
function Productlist() {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center w-[1440px] h-[92px] pt-6 pb-6 bg-footercolor'>
    <div className='flex justify-between items-center w-[1049px] h-[44px] ml-16 gap-12'>
    <h3 className='text-2xl text-navbarcolor font-bold'>Shop</h3>
    <div className='flex justify-end w-[119px] h-[44px] pt-2 pb-2 space-x-2'>
    <Link href="/" className='text-sm text-navbarcolor font-bold'>Home</Link> 
    <IoIosArrowForward className='w-4 h-4 text-pricecolor'/>
    <h6 className='text-sm text-pricecolor font-bold'>Shop</h6>
    </div>
    </div>  
    </div>
    <div className='flex justify-center items-center w-[1440px] h-[271px] bg-footercolor'>
    <div className='grid grid-cols-5 w-[1088px] gap-4 pb-12 ml-16'>
    <Image src={Cardcover5} alt="CardCover Image5" className='width=[205px] height=[223px]'/>
    <Image src={Cardcover6} alt="CardCover Image6" className='width=[205px] height=[223px]'/>
    <Image src={Cardcover7} alt="CardCover Image7" className='width=[205px] height=[223px]'/>
    <Image src={Cardcover8} alt="CardCover Image8" className='width=[205px] height=[223px]'/>
    <Image src={Cardcover9} alt="CardCover Image9" className='width=[205px] height=[223px]'/>
    </div>
    </div>
    <div className='flex justify-center items-center w-[1440px] h-[98px] bg-footercolumncolor'>
    <div className='flex justify-between items-center w-[1050px] h-[98px] pt-6 pb-6 gap-20'>
    <h6 className='text-sm text-linkcolor font-bold'>Showing all 12 results</h6>
    <div className='flex items-center w-[177px] h-[46px] pt-[1px] pl-[1px] space-x-4'>
    <h6 className='text-sm text-linkcolor font-bold'>Views:</h6> 
    <button className='w-[46px] h-[46px] border-[1px] border-solid p-4 bg-[#ECECEC]'>
    <BsFillGridFill className='w-4 h-4 text-navbarcolor text-center'/>
    </button> 
    <button className='w-[46px] h-[46px] border-[1px] border-solid p-4 bg-[#ECECEC]'>
    <TbListCheck className='w-4 h-4 text-linkcolor text-center'/>
    </button>
    </div>
    <div className='flex items-center w-[252px] h-[50px] pr-[1px] pl-[1px] gap-4'>
    <div className='relative cursor-pointer' onClick={()=>setShowMenu(!showMenu)}>
    <div className='flex items-center w-[141px] h-[50px] text-sm text-linkcolor'>Popularity  
    <IoIosArrowDown className='flex items-center w-4 h-4 ml-2 text-linkcolor'/>
    {showMenu && (
    <ul className={`absolute top-10 text-[15px] text-linkcolor space-y-10 ml-6 text-wrap ${roboto.className}`}>
    <li className='hover:text-customecolor hover:scale-110'>List Entry # 1</li>
    <li className='hover:text-customecolor hover:scale-110'>List Entry # 2</li>
    <li className='hover:text-customecolor hover:scale-110'>List Entry # 3</li>
    <li className='hover:text-customecolor hover:scale-110'>List Entry # 4</li>
    <li className='hover:text-customecolor hover:scale-110'>List Entry # 5</li>  
    </ul>  
    )}
    </div>
    </div>
    <button className='flex justify-center items-center w-[94px] h-[50px] rounded-md pt-2 pr-5 pb-2 pl-5 bg-[#23A6F0] text-center text-footercolumncolor text-sm font-bold'>
    Filter  
    </button>
    </div>
    </div>
    </div>
    <div className='flex justify-center w-[1440px] h-[175px] bg-footercolor'>
    <div className='flex justify-between items-center w-[1050px] h-[175px]'>
    <Image src={FaBrands1} alt="faBrands1 Image" className='width=[103px] h-[34px] text-linkcolor'/>
    <Image src={FaBrands2} alt="faBrands2 Image" className='width=[83px] h-[59px] text-linkcolor'/>
    <Image src={FaBrands3} alt="faBrands3 Image" className='width=[102px] h-[75px] text-linkcolor'/>
    <Image src={FaBrands4} alt="faBrands4 Image" className='width=[103px] h-[42px] text-linkcolor'/>
    <Image src={FaBrands5} alt="faBrands5 Image" className='width=[104px] h-[62px] text-linkcolor'/>
    <Image src={FaBrands6} alt="faBrands6 Image" className='width=[76px] h-[72px] text-linkcolor'/>
    </div>
    </div>
    <Footer/>
    <div className='flex justify-center items-center w-[1440px] h-[1778px] bg-footercolumncolor'>
    <div className='grid grid-cols-4 grid-rows-3 w-[1124px] h-[1700px] mt-10 pt-12 pb-12 pl-8 gap-12'>
    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList1} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList2} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList3} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList4} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList5} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList6} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList7} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList8} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList9} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList10} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList11} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    <div className='flex-col justify-center items-center w-[239px] h-[488px] space-y-4'>
    <Image src={ProductList12} alt="Productcover5 Image" className='width=[239px] height=[300px]' />
    <h5 className='text-[16px] text-navbarcolor text-center font-bold pb-3'>Graphic Design</h5>
    <Link href="#" className='text-sm text-linkcolor text-center font-bold ml-10'>English Department</Link>
    <div className='flex justify-between w-[108px] h-[34px] ml-14 pt-1 pb-1 pr-1 pl-1 gap-2'>
    <h5 className='text-[16px] text-pricecolor text-center font-bold'>$16.48</h5>
    <h5 className='text-[16px] text-pricegreencolor text-center font-bold'>$6.48</h5>
    </div>
    <div className='flex justify-center items-center mr-3 space-x-[6.08px]'>
    <div className='w-4 h-4 bg-[#23A6F0] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div> 
    <div className='w-4 h-4 bg-[#E77C40] rounded-full'></div> 
    <div className='w-4 h-4 bg-pricegreencolor rounded-full'></div>  
    </div>  
    </div>

    </div>  
    </div>
    <div className='flex justify-center items-center w-[1440px] h-[74px] bg-footercolumncolor'>
    <ul className='flex justify-between w-[313px] h-[74px] border-[1.35px] border-solid border-pricecolor box-shadow'>
    
      <li className='flex w-[84px] border-[1px] border-pricecolor border-solid bg-[#F3F3F3] p-6'><Link href="#" className='text-sm text-pricecolor text-center font-bold'>First</Link></li>
      <li className='flex w-[46px] border-[1px] border-solid border-[#E9E9E9] bg-footercolumncolor pt-6 pb-6 pr-5 pl-5 '><Link href="#" className='text-sm text-customecolor text-center font-bold'>1</Link></li>
      <li className='flex w-[49px] border-[1px] border-solid border-[#E9E9E9] bg-customecolor pt-6 pb-6 pr-5 pl-5 '><Link href="#" className='text-sm text-footercolor text-center font-bold'>2</Link></li>
      <li className='flex w-[49px] border-[1px] border-solid border-[#E9E9E9] bg-footercolumncolor pt-6 pb-6 pr-5 pl-5 '><Link href="#" className='text-sm text-customecolor text-center font-bold'>3</Link></li>
      <li className='flex w-[85px] border-[1px] border-solid border-[#E8E8E8] bg-footercolumncolor p-6'><Link href="#" className='text-sm text-customecolor text-center font-bold'>Next</Link></li>
    </ul>  
        
    </div>
    </>
  )
}

export default Productlist