import { Product } from "@/app/types/products";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import { addToCart } from '@/app/actions/actions';
import Swal from 'sweetalert2';
import Link from "next/link";

interface ProductPageProps {
    params: { slug: string };
}
async function getProduct(slug:string):Promise<Product>{
    return client.fetch(groq`*[_type== "product" && slug.current== $slug][0]{
       _id,
       title,
       productImage,
       price,
       discountedPrice,
       description,
       tags,
       isNew }`,{slug})
}

export default async function ProductPage({params}:ProductPageProps){
const { slug } = params;
const product:Product = await getProduct(slug)
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
return(
    <>
    <Navbar2/>
    <div className="flex justify-center items-center w-[1440px] h-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 w-[1040px] h-auto gap-12 mt-10 ml-28">
    <div className="flex-col justify-center items-center space-y-8">
    {product.productImage &&    
    <Image src={urlFor(product.productImage).url()} alt="Product Image" width={500} height={500} className="w-[500px] h-[500px] rounded-lg shadow-md"/>}
    <div className="flex justify-start items-center space-x-5">
    <button className='bg-pricegreencolor hover:transition-transform hover:scale-110 duration-200 hover:shadow-lg cursor-pointer px-4 py-2 rounded-md shadow-md text-footercolumncolor text-center font-bold' 
    onClick={(e)=>handleaddToCart(e,product)}>
    Add To Cart</button>
    <Link href="../../cart">
    <button className="bg-gradient-to-r from-blue-800 to-customecolor hover:transition-transform hover:scale-110 duration-200 hover:shadow-lg px-4 py-2 rounded-md shadow-md text-footercolumncolor text-center font-bold">View Cart</button>
    </Link>
    <Link href="../../shop">
    <button className="bg-gradient-to-r from-customecolor to-blue-800 hover:transition-transform hover:scale-110 duration-200 hover:shadow-lg px-4 py-2 rounded-md shadow-md text-footercolumncolor text-center">Go Back</button>
    </Link>
    </div>
    </div>
    <div className="flex-col justify-center items-center space-y-5">
    <h1 className="text-5xl text-left font-bold text-navbarcolor">{product.title}</h1> 
    <div className="flex justify-start items-center space-x-7">
    <h3 className="text-2xl font-semibold text-left text-customecolor line-through">${product.price}</h3>
    <h3 className="text-2xl font-semibold text-left text-customecolor">${product.discountedPrice}</h3>
    </div>
    <h4 className="flex items-center text-sm text-pricegreencolor font-bold">{product.tags}</h4>
    <p className="text-[16px] text-navbarcolor text-left">{product.description}</p>
    </div> 
    </div>
    </div>
    <Footer/>
    </>
) 
}