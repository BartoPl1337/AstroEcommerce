import { Copyright } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-20 mb-12 px-36 flex justify-between'>
        <h6 className='flex text-[#8392AB] text-xs items-center gap-2'>Copyright <Copyright /> Corporate UI Design System by Creative Tim.</h6>
        <ul className='text-[#8392AB] font-xs flex gap-7'>
            <li>
                <Link>
                    Store
                </Link>
            </li>
            <li>
                <Link>
                    Abouts Us
                </Link>
            </li>
            <li>
                <Link>
                    Blog
                </Link>
            </li>
            <li>
                <Link>
                    Products
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Footer