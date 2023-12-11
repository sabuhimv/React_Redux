import React from 'react'

const Product = ({product}) => {
  return (
    <div className='border w-[310px] p-3 mb-5 mx-5 rounded-md relative'>
        <div className='text-2xl font-bold absolute top-0 right-0 text-white bg-black rounded-md'>{product?.price} <span className='text-sm'>MAN</span></div>
        <img className='w-[200px] h-[200px] m-auto' src={product?.image} alt="" />
        <div className='text-center px-3 mt-3 font-bold text-xl cursor-pointer'>{product?.title}</div>
    </div>
  )
}

export default Product