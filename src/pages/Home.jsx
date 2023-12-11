import React from 'react'
import SliderComponent from '../components/home/SliderComponent'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'
import { useState } from 'react'

const Home = () => {
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      <SliderComponent />
      <Sorting setSort={setSort} />
      <div className='flex'>
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort}/>
      </div>
    </div>
  )
}

export default Home