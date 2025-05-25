import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

function Navbar2() {
  return (
    <div className='flex justify-between items-center h-[91px] ml-48 gap-14 bg-footercolumncolor rounded-md'>
    <h3 className='flex justify-start items-center w-[187px] h-[58px] mt-4 text-2xl text-navbarcolor font-bold'>Bandage</h3>
    <div className='flex justify-between items-center w-[815px] h-[58px] mt-4'>
    <ul className='flex justiy-between w-[275px] h-[24px] gap-5'>
    <li><Link href="/" className='flex w-[43px] h-[24px] text-sm text-linkcolor font-bold text-center hover:text-customecolor'>Home</Link></li>
    <li><Link href="../../products" className='flex w-[59px] h-[24px] text-sm text-linkcolor font-bold text-center hover:text-customecolor'>Product</Link></li>
    <li><Link href="../../pricing" className='flex w-[52px] h-[24px] text-sm text-linkcolor font-bold text-center hover:text-customecolor'>Pricing</Link></li>
    <li><Link href="../../contact" className='flex w-[58px] h-[24px] text-sm text-linkcolor font-bold text-center hover:text-customecolor'>Contact</Link></li>
    </ul>
    <div className='flex justify-between w-[300px] h-[52px] mr-20 mt-1 space-x-11'>
    <button className='flex items-center w-[41px] h-[52px] text-sm text-customecolor font-bold text-right cursor-pointer'>Login</button>
    <button className='flex justify-between w-[214px] h-[52px] pt-4 pb-4 pr-6 pl-6 space-x-4 bg-customecolor text-sm text-footercolumncolor font-bold'>Become a member
    <FaArrowRight className='w-3 h-3 text-footercolumncolor'/>
    </button>
    </div>
    </div>
    </div>

  )
}

export default Navbar2