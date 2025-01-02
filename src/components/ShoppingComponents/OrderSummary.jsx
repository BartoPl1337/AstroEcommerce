import React from 'react'

const OrderSummary = () => {
  return (
    <div className='flex flex-col space-y-4 w-[430px] px-8 rounded-lg border-x-[1px] border-[#DDE0E5] py-4 bg-[#33415614]'>
        <h1 className='text-[#1E293B] font-semibold text-xl'>Order Summary</h1>
        <div className='text-[#64748B] flex justify-between'>
            <span>Subtotal</span>
            <span>$...</span>
        </div>
        <hr className='h-0.5 bg-[#DEE2E6]'/>
        <div className='text-[#64748B] flex justify-between'>
            <span>Shipping Tax</span>
            <span>$0</span>
        </div>
        
        <hr className='h-0.5 bg-[#DEE2E6]'/>

        <div className='text-[#1E293B] font-semibold text-xl flex justify-between'>
            <h3>Total</h3>
            <h3>$...</h3>
        </div>

        <button className='bg-[#1E293B] font-semibold text-sm py-2.5 rounded-md w-full text-[#FFFFFF]'>Checkout</button>
        <button className='bg-[#FFFFFF] font-semibold text-sm py-2.5 rounded-md w-full text-[#1E293B] border-[#ADB5BD] border-[1px]'>Checkout</button>
        <span className='text-[#6C757D] text-sm text-center'>Tax included. Shipping calculated at checkout.</span>
    </div>
  )
}

export default OrderSummary