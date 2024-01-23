import React from 'react'

const Collection = () => {
  return (
    <div className='bg-[url("/Images/collection-banner.jpg")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>
      <div className="h-[580px] flex justify-between md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src="/Images/zara-logo.png" alt="" />
          <p className='text-lg text-white capitalize my-8 md:2/3 leading-[32px]'>
            Fashion is an art, a way to express, A statement of style, a form of
            address. From vintage to modern, from chic to boho, A fashion
            company's designs are sure to glow.
          </p>
          <button className='px-6 py-2 bg-white text-black rounded-sm'>See Collection</button>
        </div>
      </div>
    </div>
  );
}

export default Collection