import { Star } from 'lucide-react'
import React from 'react'

const Stars = (props) => {
  return (
    <div className='flex gap-1.5 items-center'>
        <span className='text[#64748B]'>{props.star}</span>
        <Star 
        size={24}
        color="#F19937"
        fill={props.opinions < 1 ? '#fff' : '#F19937'}
        />
        <div className='w-full rounded-full h-2 relative bg-[#1E293B0B] overflow-hidden'>
            <div className={`absolute bg-[#F19937] h-full w-[${props.procent}%] inset-0`}></div>
        </div>
        <span className='text-[#64748B] text-sm'>{props.procent}%</span>
    </div>
  )
}

export default Stars