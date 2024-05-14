import { Chip } from '@nextui-org/react'
import React from 'react'
import BarChartForSummary from './BarChartForSummary'

const Summary = () => {
  return (
    <>
        <div className='w-full flex flex-col'>
            <div className='w-full my-5'>
                <div className='flex justify-evenly'>
                    <div className='flex items-center'>
                        <p className='mx-2'>Total:</p>
                        <Chip>452</Chip>
                    </div>
                    <div className='flex items-center'>
                        <p className='mx-2'>Unique:</p>
                        <Chip>383</Chip>
                    </div>
                    <div className='flex items-center'>
                        <p className='mx-2'>Status:</p>
                        <Chip>Running</Chip>
                    </div>
                    <div className='flex items-center'>
                        <p className='mx-2'>Errors:</p>
                        <Chip>125</Chip>
                    </div>
                </div>
            </div>

            <div className='chart'>
                <BarChartForSummary/>
            </div>
        </div>
    </>
  )
}

export default Summary
