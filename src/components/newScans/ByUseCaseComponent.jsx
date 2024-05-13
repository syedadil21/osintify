'use client'
import { Input } from '@nextui-org/react'
import React, { useState } from 'react'

const ByUseCaseComponent = () => {
    const [currentValueRadio, setCurrentValueRadio] = useState();


  return (
    <>
        <div className='bg-blue-50 w-full flex justify-between my-2'>
            <div className='flex items-start '>
                <Input type='radio' name='list' value={currentValueRadio} onChange={(e) => {setCurrentValueRadio(e.target.value)}}/>
                <p className='mx-3 my-2' onClick={()=>{console.log(currentValueRadio);}}>All</p>
            </div>

            <div className='flex flex-col w-[85%]'>
                <p className='font-semibold mb-2 mt-1'>Get anything and everything about the target</p>
                <p className='mb-4' >All Osintify modules will be enabled (slow) but every possible piece of information about the target will be obtained and analysed</p>
            </div>
        </div>

        <div className='bg-blue-50 w-full flex justify-between my-2'>
            <div className='flex items-start '>
                <Input type='radio' name='list' value={currentValueRadio} onChange={(e) => {setCurrentValueRadio(e.target.value)}}/>
                <p className='mx-3 my-2'>Footprint</p>
            </div>

            <div className='flex flex-col w-[85%]'>
                <p className='font-semibold mb-2 mt-1'>Understand what information this target exposes to the internet.</p>
                <p className='mb-4' >Gain an understanding about the target&apos;s network perimeter, associated identities and other information that is obtained through a lot of web crawling and search engine use.</p>
            </div>
        </div>

        <div className='bg-blue-50 w-full flex justify-between my-2'>
            <div className='flex items-start'>
                <Input type='radio' name='list' value={currentValueRadio} onChange={(e) => {setCurrentValueRadio(e.target.value)}}/>
                <p className='mx-3 my-2'>Investigate</p>
            </div>

            <div className='flex flex-col w-[85%]'>
                <p className='font-semibold mb-2 mt-1'>Best for when you suspect the target to be malicious but need more information.</p>
                <p className='mb-4' >Some basic footprinting will be performed in addition to querying of blacklists and other sources that may have the information about your target&apos;s maliciousness</p>
            </div>
        </div>
    </>
  )
}

export default ByUseCaseComponent
