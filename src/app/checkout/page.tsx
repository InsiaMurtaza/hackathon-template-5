"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../types/products'
import { getCartItems } from '../actions/actions';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { v4 as uuidv4 } from 'uuid';


function Checkout() {
const [cartItems,setCartItems] = useState<Product[]>([]);
const [formValues,setFormValues] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
    city:""
})
const [formErrors,setFormErrors] = useState({
 name:false,
 email:false,
 phone:false,
 address:false,
 city:false
})
useEffect(()=>{setCartItems(getCartItems());
},[])
const total = cartItems.reduce((total,item)=>total + item.discountedPrice*item.inventory,0);

const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormValues({
       ...formValues,[e.target.id]:e.target.value 
    })
}
const validateForm=()=>{
const errors = {
name:!formValues.name,
email:!formValues.email,
phone:!formValues.phone,
address:!formValues.address,
city:!formValues.city
}
setFormErrors(errors);
return Object.values(errors).every((error) =>!error);
}

const handlePlaceOrder= async()=>{
    Swal.fire({
        title:"Processing Your Order...",
        text:"Please wait a moment...",
        icon:"info",
        showCancelButton:true,
        cancelButtonText:"Cancel",
        cancelButtonColor:"#d33",
        showConfirmButton:true,
        confirmButtonText:"Proceed",
        confirmButtonColor:"#3085d6",
    }).then((result)=>{
        if(result.isConfirmed){
            if(validateForm()){
                // localStorage.removeItem('cartItems');
                localStorage.setItem('cart','[]');
            Swal.fire("Your Order has been successfully processed!")
              }  
            else{
                Swal.fire("Error!Please fill in all the fields and then proceed.")
            }
    
        }
    })

    const orderData ={
   _type:"order",
   name:formValues.name,
   email:formValues.email,
   phone:formValues.phone,
   address:formValues.address,
   city:formValues.city,
   cartItems:cartItems.map(item=>({
    _type:"reference",
    _ref:item._id,
    _key: uuidv4()
   })),
   total:total,
   date:new Date().toISOString
    };
    try{
        await client.create(orderData)
        localStorage.removeItem("cartItems")
        }
    catch(error) {
        console.error("Error creating order",error)
        }
    }

  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center w-[1440px] h-auto'>
    <div className='grid grid-cols-1 md:grid-cols-2 space-x-8'>   
    <div className='flex-col justify-center items-end space-y-5 w-auto h-auto ml-32 mt-20 px-4 py-8 rounded-lg shadow-md'>
    <h1 className='text-3xl text-navbarcolor font-bold text-center'>Order Summary</h1>
     {cartItems.length>0 ? (
        cartItems.map((item)=>(
        <div key={item._id} className='flex-col justify-center items-end space-y-4'>
        {item.productImage && 
        <Image src={urlFor(item.productImage).url()} alt="Product Image" width={200} height={200} className="object-cover"/>}
        <h2 className='text-lg text-left font-bold text-navbarcolor'>ProductName: {item.title}</h2>
        <h2 className='text-lg text-left font-bold text-navbarcolor'>Quantity: {item.inventory}</h2>
        <h2 className='text-xl text-left font-bold text-navbarcolor'>Amount: {item.discountedPrice * item.inventory}</h2>
        </div>)
        )):(<p>No items in the cart</p>)}
    </div> 
    <div className='flex-col justify-center items-center w-auto h-auto mt-20 px-4 py-8 space-y-8 rounded-lg shadow-md'>
    <h1 className='text-navbarcolor text-3xl font-bold text-center'>Billing Information</h1> 
    <div className='flex justify-center items-center'>
    <label className='text-navbarcolor text-xl font-bold text-center'>Name:</label>    
    <input type="text" id="name" placeholder='Enter Your Name' value={formValues.name} onChange={handleInputChange} className='ml-8 px-4 w-[500px] rounded-md shadow-md'/>
    {formErrors.name && (
     <p className='text-sm text-red-500'>Name is required</p>   
    )}
    </div>
    <div className='flex justify-center items-center'>
    <label className='text-navbarcolor text-xl font-bold text-center'>Email:</label>    
    <input type="text" id="email" placeholder='Enter Your Email' value={formValues.email} onChange={handleInputChange} className='ml-9 px-4 w-[500px] rounded-md shadow-md'/>
    {formErrors.email && (
     <p className='text-sm text-red-500'>Email is required</p>   
    )}
    </div>
    <div className='flex justify-center items-center'>
    <label className='text-navbarcolor text-xl font-bold text-center'>Phone:</label>    
    <input type="text" id="phone" placeholder='Enter Your Phonenumber' value={formValues.phone} onChange={handleInputChange} className='ml-7 px-4 w-[500px] rounded-md shadow-md'/>
    {formErrors.phone && (
     <p className='text-sm text-red-500'>Phone number is required</p>   
    )}
    </div>
    <div className='flex justify-center items-center'>
    <label className='text-navbarcolor text-xl font-bold text-center'>Address:</label>    
    <input type="text" id="address" placeholder='Enter Your Address' value={formValues.address} onChange={handleInputChange} className='ml-3 px-4 w-[500px] rounded-md shadow-md'/>
    {formErrors.address && (
     <p className='text-sm text-red-500'>Address is required</p>   
    )}
    </div>
    <div className='flex justify-center items-center'>
    <label className='text-navbarcolor text-xl font-bold text-center'>City:</label>    
    <input type="text" id="city" placeholder='Enter Your City' value={formValues.city} onChange={handleInputChange} className='ml-14 px-4 w-[500px] rounded-md shadow-md'/>
    {formErrors.city && (
     <p className='text-sm text-red-500'>This field is required</p>   
    )}
    </div>
    <div className='flex justify-center items-center'>
    <button onClick={handlePlaceOrder} className='px-8 py-4 rounded-md shadow-md bg-gradient-to-r from-blue-800 to-customecolor text-footercolumncolor text-xl font-bold text-center hover:shadow-lg hover:scale-110 duration-200'>Place Order</button>
    </div>
    </div> 
    </div>   
    </div>
    <Footer/>
    </>
  ) 
}

export default Checkout