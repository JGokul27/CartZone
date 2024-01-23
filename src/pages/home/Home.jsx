import React from 'react'
import Banner from './Banner'
import BestSellers from './BestSellers'
import Category from './Category'
import Collection from './Collection'
import NewsLetter from './NewsLetter'
import Product from './Product'

function Home() {
  return (
    <div>
      <Banner/>
      <Category/>
      <Product/>
      <Collection/>
      <BestSellers/>
      <NewsLetter/>
    </div>
  )
}

export default Home