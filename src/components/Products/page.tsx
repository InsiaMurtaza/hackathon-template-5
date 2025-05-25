"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Product } from '@/app/types/products'
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { addToCart, removeFromCart } from '@/app/actions/actions';
import Swal from 'sweetalert2';




function Products() {

const [product,setProduct] = useState<Product[]>([]);
 useEffect(()=>{
    async function fetchedproducts(){
        const fetchedProduct :Product[] = await client.fetch(allProducts);
        setProduct(fetchedProduct)
    }
    fetchedproducts();
 },[])
 const handleaddToCart = (e:React.MouseEvent,product:Product) => {
  e.preventDefault()
  Swal.fire({
    position: "top-right",
    icon:"success",
    title:`${product.title} added to cart`,
    showConfirmButton: false,
    timer: 1000
  })
  addToCart(product)
  }
  
  return (
    <div className='flex flex-col justify-center items-center w-[1440px] h-auto ml-10 mt-10'>
    <div className='grid grid-cols-4 grid-rows-6 gap-x-4 gap-y-8'>   
    {product.map((product)=>(
    <div key={product._id} className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
      <Link href={`../../product/${product.slug.current}`}>
       {product.productImage &&(
       <Image src={urlFor(product.productImage).url()} alt="image" width={200} height={200} className='w-56 h-56 object-cover rounded-md'/>)}
       <h2 className='text-xl text-navbarcolor font-bold mt-4'> {product.title}</h2>
       <div className='flex justify-start items-center space-x-5'>
       <h3 className='text-lg text-customecolor tracking-wide font-semibold  line-through mt-3'>${product.price}</h3>
       <h3 className='text-lg text-customecolor tracking-wide font-semibold mt-3'>${product.discountedPrice}</h3>
       </div>
       <button className='bg-pricegreencolor hover:transition-transform hover:scale-110 duration-200 hover:shadow-lg cursor-pointer px-4 py-2 mt-3 rounded-md shadow-md text-footercolumncolor text-center font-bold' 
       onClick={(e)=>handleaddToCart(e,product)}>
        Add To Cart</button>
        
      </Link>
    </div>
    ))}
    </div>
    <Link href="../../cart">
    <button className='px-10 py-5 mt-10 rounded-md bg-gradient-to-r from-blue-800 to-customecolor transition-transform shadow-md hover:shadow-lg hover:scale-110 duration-200 text- text-xl text-footercolumncolor font-bold'>View Cart</button>
    </Link>
    </div>
  )
}

export default Products