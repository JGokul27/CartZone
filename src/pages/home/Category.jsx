import React from 'react'
import { Link } from 'react-router-dom'
const companyLogo = [
    {id: 1, img:"/Images/companyLogo/brand1.png"},
    {id: 2, img:"/Images/companyLogo/brand2.png"},
    {id: 3, img:"/Images/companyLogo/brand3.png"},
    {id: 4, img:"/Images/companyLogo/brand4.png"},
    {id: 5, img:"/Images/companyLogo/brand5.png"},
]
const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
        {/* brand images */}
        <div className='flex items-center justify-around flex-wrap gap-5 py-5'>
            {
                companyLogo.map((logo)=>(
                    <div key={logo.id}><img src={logo.img} alt="" width="200px"height="100px" className='hover:scale-105
                    transition-all duration-200'/></div>
                ))
            }
        </div>

        {/* category grid */}
        <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
            <p className='font-semibold uppercase md:-rotate-90 text-center bg-black text-white
            md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
            <div>
                <Link to='/'><img src="/Images/category/image.jpg" alt="" width='645px' className='hover:scale-105
                transition-all duration-200'/></Link>
            </div>
            <div className='md:w-1/2'>
                <div className='grid grid-cols-2 gap-2'>
                <Link to='/'><img src="/Images/category/img2.png" alt=""  width='300px' className='hover:scale-105
                transition-all duration-200'/></Link>
                <Link to='/'><img src="/Images/category/img3.png" alt=""  width='300px' className='hover:scale-105
                transition-all duration-200'/></Link>
                <Link to='/'><img src="/Images/category/img4.png" alt=""  width='300px' className='hover:scale-105
                transition-all duration-200'/></Link>
                <Link to='/'><img src="/Images/category/img6.png" alt=""  width='300px' className='hover:scale-105
                transition-all duration-200'/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category