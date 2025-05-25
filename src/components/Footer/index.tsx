"use client"
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';


function Footer() {
  return (
    <>
    <div className="mt-10 mb-10 w-[1440px] h-[138px] bg-footercolor md:flex justify-between items-center gap-[577.5px]">
    <div className='grid grid-cols-1 text-center font-bold md:flex justify-between items-center md:mt-10 md:mb-10 md:w-[236px] md:text-left md:ml-48 text-navbarcolor text-[24px] '>
    Bandage
    </div>
    <div className='grid grid-cols-1 md:flex justify-between md:mx-24 md:mt-10 md:mb-10 items-center text-center md:w-[112px]'>
    <Link href="#"><FaFacebook className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaInstagram className='h-6 w-6 text-customecolor'/></Link>
    <Link href="#"><FaTwitter className='h-6 w-6 text-customecolor'/></Link>
    </div>
    </div>
    <div className='flex justify-around bg-footercolumncolor '>
    <div className='container mx-auto grid grid-cols-1 mt-5 items-center md:ml-48 bg-footercolumncolor md:grid-cols-5 md:gap-5 md:h-[270px]'>
    <div className='text-center items-center mt-5 mb-12 md:text-left md:w-[148px]'>
    <h1 className='text-[16px] text-navbarcolor font-bold md:text-left'>Company Info</h1>
    <ul className='text-sm text-center text-linkcolor pt-2 pb-1 md:text-left'>
        <Link href="../../about"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>About Us</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>Carrier</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>We are hiring</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>Blog</li></Link>
    </ul>
    </div>
    <div className='text-center items-center mt-5 mb-12 md:text-left md:w-[152px]'>
    <h1 className='text-[16px] text-navbarcolor font-bold md:text-left'>Legal</h1>
    <ul className='text-sm text-center text-linkcolor pt-2 pb-1 md:text-left'>
        <Link href="../../about"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>About Us</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>Carrier</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>We are hiring</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>Blog</li></Link>
    </ul>
    </div>
    <div className='text-center items-center mt-5 mb-12 md:text-left md:w-[148px]'>
    <h1 className='text-[16px] text-navbarcolor font-bold md:text-left'>Features</h1>
    <ul className='text-sm text-center text-linkcolor pt-2 pb-1 md:text-left'>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>Business Marketing</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>User Analytic</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>Live Chat</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>Unlimited Support</li></Link>
    </ul>
    </div>
    <div className='text-center items-center mt-5 mb-12 md:text-left md:w-[148px]'>
    <h1 className='text-[16px] text-navbarcolor font-bold md:text-left'>Resources</h1>
    <ul className='text-sm text-center text-linkcolor pt-2 pb-1 md:text-left'>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>IOS & Android</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>Watch a Demo</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>Customers</li></Link>
        <Link href="#"><li className='text-sm text-center text-linkcolor font-semibold pt-2 pb-1 md:text-left'>API</li></Link>
    </ul>
    </div>
    <div className='text-center items-center -mt-5 mb-10 md:text-left md:h-[131px] md:w-[321px]'>
    <h1 className='text-[16px] text-navbarcolor font-bold md:text-left'>Get in Touch</h1>  
    <div className='flex justify-start h-[87px] pt-5 items-center text-center'>
    <input type='email' placeholder='Your Email' required className='h-[58px] pl-5 text-sm text-linkcolor bg-footercolor border-solid border-[1px] border-r-5 border-[#E6E6E6]'></input>
    <button className='bg-customecolor h-[58px] w-[117px] text-white text-center text-sm font-bold items-center border-[1px] border-r-5 cursor-pointer rounded-sm'>Subscribe</button>
    </div> 
    <div className='text-left text-xs text-linkcolor mt-0 pt-0'>
    Lore imp sum dolor Amit
    </div>
    </div>
    
    <div className='flex justify-between items-center w-[1440px] h-[74px] mb-6 bg-footercolor'> 
    <text className='text-sm text-linkcolor font-bold'>Made With Love By Finland All Right Reserved </text>
    </div>
    </div>
    </div>
    </>
  )
}

export default Footer