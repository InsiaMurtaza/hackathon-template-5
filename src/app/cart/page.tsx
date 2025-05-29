"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../types/products'
import { getCartItems, updateCartQuantity } from '../actions/actions'
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';





function CartPage() {
const [cartItems,setCartItems] = useState<Product[]>([]);
useEffect(() => {
    setCartItems(getCartItems()); 
  }, []); // Added dependencies if they are defined outside


const handleIncrement=(id:string)=>{
const product = cartItems.find((item)=>item._id === id);
if(product){
    handleQuantityChange(id,product.inventory + 1)
    }
}
const handleDecrement=(id:string)=>{
const product = cartItems.find((item)=>item._id === id);
if(product && product.inventory > 0){
    handleQuantityChange(id,product.inventory - 1)
    }
}
const handleQuantityChange =(id:string,quantity:number)=>{
updateCartQuantity(id,quantity);
setCartItems(getCartItems());
}
const calculateTotal = () => {
  return cartItems?.length ? cartItems.reduce((total, item) => total + item.discountedPrice * item.inventory, 0) : 0;
};
const router = useRouter();

const handleProceed=()=>{
  if (cartItems.length === 0 || calculateTotal() === 0) {
    Swal.fire({
        title: "Your cart is empty!",
        text: "Please add items before proceeding to checkout.",
        icon: "warning",
        confirmButtonColor: "#3085d6"
    });
    return;
}
  Swal.fire({
  title:"Please review your cart",
  icon:"question",
  showCancelButton:true,
  confirmButtonColor:"#3085d6",
  cancelButtonColor:"#d33",
  confirmButtonText:"Yes, proceed!"
  }).then((result)=>{
  if(result.isConfirmed){
      Swal.fire("Congratulations!Your order has been successfully processed.");
      router.push("/checkout");
      setCartItems([]);
      // localStorage.setItem('cart','[]');
      calculateTotal();
      
     };
  });
};

  return (
    <>
    <Navbar/>
    <div className="container flex-col justify-center items-center p-6 ml-60">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>
    
        <div className="md:col-span-2 space-y-4">
          {cartItems.length === 0 ? (<p className="text-center text-gray-500">Your cart is empty.</p>
          ):(
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center bg-white shadow-md rounded-lg p-4 justify-between">
                {item.productImage && 
                (<Image src={urlFor(item.productImage).url()} alt="Product Image" width={500} height={500} className="w-20 h-20 object-cover rounded" />)}
                <div className="flex-1 px-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.discountedPrice}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded">
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-3 py-1 bg-gray-200 rounded">
                    +
                  </button>
                </div>
                </div>
            ))
          )}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mt-10 h-fit">
          <h2 className="text-xl text-pricegreencolor font-bold mb-4">Cart Summary</h2>
          <p className="text-lg text-customecolor font-semibold">Total: ${calculateTotal()}</p>
          <button
            onClick={handleProceed}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default CartPage