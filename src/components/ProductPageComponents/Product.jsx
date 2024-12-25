import { Heart, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AccordingProduct from './According-Product'
import { useParams } from 'react-router-dom'

const Product = () => {
const[products, setProducts] = useState([])
const params = useParams()
useEffect(() => {
  // console.log("uruchomiony")
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
        setProducts(data)
    })
    .catch((error) => {
        console.log(error)
    })
}, [])
const found = products.find((product) => product.id === parseInt(params.id))
console.log(products)
  return (
    <div className='my-28 mx-32'>
        <div className='flex flex-col mb-8 space-y-2'>
            <div className='flex'>
                <span className='text-[#1E293B]/50 text-sm'>Store / <span className='text-[#1E293B]'>Designers</span></span>
            </div>
            <h1 className='font-semibold text-[#1E293B]'>{found.title}</h1>
        </div>

        <div className='flex'>
          <div className='flex-1'>
            <img src={found.image} alt="" className='object-cover'/>
          </div>
          <div className='flex-1 flex flex-col space-y-4'>
            <h1 className='font-bold text-4xl text-[#1E293B]'>Product name</h1>
            <h4 className='text-[#1E293B] font-semibold text-2xl'>$ price</h4>
            <span className='text-balance text-[#64748B]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, officiis. Porro nihil cum facere quas voluptatibus provident, ipsa velit quia qui itaque, officiis fugit distinctio, sed id architecto ipsam blanditiis?
            Eum maxime ipsum, laudantium amet totam ad, temporibus architecto officia aliquid cumque qui, sapiente repellat vero tempore rerum corporis? Vero saepe veritatis autem? Unde, impedit? Tempora adipisci inventore tenetur nisi?</span>
            <span className='flex gap-2 items-center text-center'><Star size={24}/><span className='text-[#64748B] text-sm'>100 reviews</span></span>
            <div className='flex flex-col space-y-2'>
              <h4 className='font-semibold text-[#000000]'>Color</h4>
              <div className='flex gap-1'>
                <div className='rounded-md w-[22px] h-[22px] bg-white border'></div>
                <div className='rounded-md w-[22px] h-[22px] bg-blue-700'></div>
                <div className='rounded-md w-[22px] h-[22px] bg-red-500'></div>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <button className='rounded-md w-44 h-10 bg-[#1E293B] text-white font-semibold text-sm'>Add to cart</button>
              <Heart size={24} />
            </div>

            <ul className='flex flex-col'>
              <AccordingProduct 
              title = "Features"
              />
              <AccordingProduct
              title = "Product care"
              />
              <AccordingProduct
              title = "Shipping & Returns"
              />
              <AccordingProduct
              title = "Warranty"
              />
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Product