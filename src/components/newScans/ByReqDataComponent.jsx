import { Input } from '@nextui-org/react'
import React from 'react'

const ByReqDataComponent = () => {
  return (
    <>
        <div className='w-full bg-blue-50 flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='checkbox' size='sm'/>
                <p>Account on External Site</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='checkbox' size='sm'/>
                <p>Affiliate - Company Name</p>
            </div>
        </div>

        <div className='w-full bg-blue-50 flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='checkbox' size='sm'/>
                <p>Affiliate - Domain Name</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='checkbox' size='sm'/>
                <p>Affiliate - Email Address</p>
            </div>
        </div>
        <div className='w-full bg-blue-50 flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='checkbox' size='sm'/>
                <p>Affiliate - IP Address</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='checkbox' size='sm'/>
                <p>Affiliate - IPv6 Address</p>
            </div>
        </div>
        <div className='w-full bg-blue-50 flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='checkbox' size='sm'/>
                <p>Affiliate - Internet Name</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='checkbox' size='sm'/>
                <p>Affiliate - Web Content</p>
            </div>
        </div>
        <div className='w-full bg-blue-50 flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='checkbox' size='sm'/>
                <p>Bitcoin Address</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='checkbox' size='sm'/>
                <p>Bitcoin Balance</p>
            </div>
        </div>
        
    </>
  )
}

export default ByReqDataComponent