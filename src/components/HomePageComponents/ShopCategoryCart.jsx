import { Link } from 'react-router-dom'
import React from 'react'

const ShopCategoryCart = (props) => {
  return (
      <Link to='/Category' className='flex justify-center w-full'>
        <img src={props.src} alt="ShopCategory" className='rounded-md object-cover hover:shadow-2xl hover:shadow-cyan-500/50 w-full'/>
      </Link>
  )
}

export default ShopCategoryCart