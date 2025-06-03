import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({filteredItems}) => {
  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
    items-center justify-center gap-12 shadow-sm'>
        {
            filteredItems.slice(0, 12).map((items)=>(
                <div key={items.id}>
                    <Link to={`/clothes/${items.id}`}>
                        <img src={items.image} alt="" className='mx-auto w-full h-80 hover:scale-105
                        transition-all duration-300'/>
                        </Link>
                    <div className='my-10 px-4'>
                        <h4 className='text-base font-semibold mb-2'>{items.title}</h4>
                        <div className='flex justify-between'>
                            <p>{items.category}</p>
                            <p>{items.price}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cards