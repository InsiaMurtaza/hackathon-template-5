"use client"
import React from 'react'
import {Montserrat} from "@next/font/google";
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { faUser, faShoppingCart, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400','500', '700'],
  });

function Navbar() {
  return (
    <div className='flex justify-center items-center bg-footercolumncolor w-[1440px] h-14 shadow-md '>
    <div className='flex justify-between items-center px-4 py-4 gap-10'>
    <div className='flex items-center ml-10 gap-20'>
    <h1 className={`${montserrat.className} text-2xl text-navbarcolor font-bold md:text-3xl`}>Bandage</h1> 
    <div className='hidden md:flex items-center gap-5 text-linkcolor'>
    <ul className='hidden md:flex items-center gap-5 text-linkcolor font-medium'>
      <Link href="/"><li className='hover:text-blue-500 transition-colors'>Home</li></Link>
      <Link href="../../shop"><li className='flex items-center hover:text-blue-500 transition-colors'>Shop<IoIosArrowDown className='pl-2 size-5'/></li></Link>
      <Link href="../../about"><li className='hover:text-blue-500 transition-colors'>About</li></Link>
      <Link href="../../product-details"><li className='hover:text-blue-500 transition-colors'>ProductDetails</li></Link>
      <Link href="../../contact"><li className='hover:text-blue-500 transition-colors'>Contact</li></Link>
      <Link href="../../team"><li className='hover:text-blue-500 transition-colors'>Team</li></Link>
    </ul>
    </div>
    <div className="hidden md:flex items-center text-customecolor">
    <ul className="hidden md:flex items-center text-customecolor">
      <Link href="/"><li><button className='flex text-center items-center w-[166px] h-[54px] py-4 px-4'>
        <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-customecolor" />Login/Register
      </button></li></Link>
      <Link href="/"><li><button className='flex text-center items-center w-12 h-[54px] py-4 px-4'>
      <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-customecolor" />1</button></li></Link>
      <Link href="../../cart"><button className='flex text-center items-center w-12 h-[54px] py-4 px-4'>
      <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 text-customecolor" />1 </button><li></li></Link>
      <Link href="/"><li><button className='flex text-center items-center w-12 h-[54px] py-4 px-4'>
      <FontAwesomeIcon icon={faHeart} className="h-5 w-5 text-customecolor "/>1</button></li></Link>
    </ul>
    </div>
    </div> 
    </div>    
    </div>
  )
}

export default Navbar