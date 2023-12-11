import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {productDetail, productDetailStatus} = useSelector(state => state.products)
  
    useEffect(()=>{
        dispatch()
    },[dispatch])

    return (
    <div>
        Detail
    </div>
  )
}

export default Detail