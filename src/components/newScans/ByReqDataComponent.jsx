import { Input } from '@nextui-org/react'
import React from 'react'

const ByReqDataComponent = ({ domain, setReqData }) => {
  return (
    <>
        <div className='w-full bg-gray-800 rounded-2xl flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input onClick={()=>setReqData('all')} width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>All available data</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input onClick={()=>setReqData('address')} isDisabled={domain==="blockchain" || domain === 'domain'} width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Address</p>
            </div>
        </div>
        <div className='w-full bg-gray-800 rounded-2xl flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                  <Input onClick={()=>setReqData('username')} isDisabled={domain === "blockchain" || domain === 'cnic' || domain ==='phonenumber' || domain ==="domain" } width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Username</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                  <Input onClick={()=>setReqData('email')} isDisabled={domain === 'blockchain' || domain === 'cnic' || domain ==="phonenumber"} width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Email</p>
            </div>
        </div>
        <div className='w-full bg-gray-800 rounded-2xl flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>
                <Input onClick={()=>setReqData('movies')} isDisabled={domain !== "ipaddress"} width={1} className='w-10 mr-3' type='radio' name='list' size='sm' />
                <p>Movies</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                  <Input onClick={()=>setReqData('phonenumber')} isDisabled={domain === "blockchain" || domain ==="domain" } width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Phone Number</p>
            </div>
        </div>
        <div className='w-full bg-gray-800 rounded-2xl flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                  <Input onClick={()=>setReqData('ipaddress')} isDisabled={domain !== "email" && domain !== "username" && domain !=="ipaddress"} width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>IPv4 Address</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                  <Input onClick={()=>setReqData('cnic')} isDisabled={(domain !== "cnic" && domain !=="phonenumber")} width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>CNIC</p>
            </div>
        </div>
        <div className='w-full bg-gray-800 rounded-2xl flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                  <Input onClick={() => setReqData('blockchain')} isDisabled={domain !== "blockchain"} width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Blockchain Details</p>
            </div>
            
            {/* <div className='flex w-[40%] p-5 items-center'>   
                  <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>CNIC</p>
            </div> */}
        </div>
        {/* <div className='w-full bg-gray-800 rounded-2xl flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Account on External Site</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Affiliate - Company Name</p>
            </div>
        </div>

        <div className='w-full bg-gray-800 rounded-2xl flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Affiliate - Domain Name</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Affiliate - Email Address</p>
            </div>
        </div>
        <div className='w-full bg-gray-800 rounded-2xl flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Affiliate - IP Address</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Affiliate - IPv6 Address</p>
            </div>
        </div>
        <div className='w-full bg-gray-800 rounded-2xl flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Affiliate - Internet Name</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Affiliate - Web Content</p>
            </div>
        </div>
        <div className='w-full bg-gray-800 rounded-2xl flex justify-start my-5'>
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>Country Name</p>
            </div>
            
            <div className='flex w-[40%] p-5 items-center'>   
                <Input width={1} className='w-10 mr-3' type='radio' name='list' size='sm'/>
                <p>City Name</p>
            </div>
        </div> */}
        
    </>
  )
}

export default ByReqDataComponent
