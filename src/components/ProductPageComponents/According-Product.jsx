import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

const AccordingProduct = (props) => {
const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='border-t'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[#1E293B] py-4'>{props.title}</h1>
       {isOpen ? <Minus /> : <Plus />}
      </div>
    </div>
  )
}

export default AccordingProduct