'use client'
import { Chip, Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import Summary from './Summary'
import Browse from './Browse'

const Main = ({slug}) => {
  return (
    <>
        <div className='p-16 flex flex-col w-full h-screen'>
            <div className='flex items-center'>
                <h1 className='text-4xl font-semibold mr-3'>{slug}</h1>
                <Chip color='primary'>Running</Chip>
            </div>
            <div className='py-5'>
                <Tabs key='bordered' variant="bordered" aria-label="Tabs variants">
                    <Tab key="summary" title="Summary">
                        <div className='px-5'>
                            <Summary/>
                        </div>
                    </Tab>
                    <Tab key="browse" title="Browse">
                        <div className='px-5'>
                            <Browse/>
                        </div>
                    </Tab>
                    {/* <Tab key="ByModule" title="By Module">
                        <div className='px-5'>
                        </div>
                    </Tab> */}

                </Tabs>
            </div>
        </div>
    </>
  )
}

export default Main
