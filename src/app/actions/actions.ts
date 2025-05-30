import { Product } from "../types/products";


export const addToCart = (product:Product) => {
    const cart:Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingProductIndex = cart.findIndex(item => item._id === product._id)
    if(existingProductIndex>-1){
        cart[existingProductIndex].inventory += 1
    }
    else{
        cart.push({...product,inventory:1})
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}
export const removeFromCart =(product:Product) => {
const cart:Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
const existingProductIndex = cart.findIndex(item => item._id === product._id)
cart.filter(item => item._id !== product._id)
if(existingProductIndex > 1){
    cart[existingProductIndex].inventory -= 1
localStorage.setItem('cart',JSON.stringify(cart))
}}

export const updateCartQuantity = (productID:string,quantity:number) => {
const cart:Product[]= JSON.parse(localStorage.getItem('cart') || '[]')
const productIndex = cart.findIndex(item => (item._id === productID))
if(productIndex >-1){
    cart[productIndex].inventory = quantity
    localStorage.setItem('cart',JSON.stringify(cart))
}
}
export const getCartItems = ():Product[] => {
    return   JSON.parse(localStorage.getItem('cart') || '[]')
    
}

