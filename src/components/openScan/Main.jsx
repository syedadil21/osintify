'use client'
import { Chip, Tab, Tabs } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import Summary from './Summary'
import Browse from './Browse'
import { getScanById } from '@/config/Supabase'

const Main = ({slug}) => {
    const [scan, setScan] = useState();
    useEffect(()=> {
        const func = async () => {
            const response = await getScanById(slug);
            setScan(response);
        }
        func();
    },[slug])
  return (
    <>
        <div className='p-16 flex flex-col w-full h-screen'>
            <div className='flex items-center'>
                <h1 className='text-4xl font-semibold mr-3'>{scan?.name}</h1>
                <Chip color='primary'>Completed</Chip>
            </div>
            <div className='py-5'>
                <Tabs key='bordered' variant="bordered" aria-label="Tabs variants">
                    <Tab key="summary" title="Summary">
                        <div className='px-5'>
                            <Summary scan={scan} />
                        </div>
                    </Tab>
                    <Tab key="browse" title="Browse">
                        <div className='px-5'>
                            <Browse scan={scan} />
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
