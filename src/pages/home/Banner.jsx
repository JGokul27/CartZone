import React from 'react'
import bannerImg from '/Images/banner1.png'
import { FaShoppingBag } from 'react-icons/fa'

function Banner() {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 px-4'>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
        <div className='md:w-1/2'>
                <img src={bannerImg} alt="" width='500px' className='rounded-3xl h-[65rem]'/>
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-light mb-5'>Collections</h1>
                <p className='text-xl mb-7'>You can explore and shop many different
                    collection form various brands here.
                </p>
                <button className='bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'>
                    <FaShoppingBag className='inline-flex'/><a href='#products'>Shop Now</a></button>
            </div>
            
        </div>
    </div>
  )
}

export default Banner