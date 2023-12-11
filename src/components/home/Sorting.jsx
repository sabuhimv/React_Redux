import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
        <select onChange={e=> setSort(e.target.value)} className='bg-white py-3 px-5 outline-none' name="" id="">
            <option disabled value="">Select</option>
            <option value="inc">Artma</option>
            <option value="dec">Azalma</option>
        </select>
    </div>
  )
}

export default Sorting