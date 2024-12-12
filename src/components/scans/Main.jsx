'use client'
import React, { useEffect, useMemo, useState } from 'react'
import TableForScans from './TableForScans'
import { getScans } from '@/config/Supabase'

const Main = () => {
  // const scans = await getScans();
  // console.log(scans);
  const [scans, setScans] = useState([])

  useEffect(()=> {
    const func = async () => {
      const response = await getScans()
      setScans(response)
    }
    func()
  },[])
  
  return (
    <>
        <div className='h-full p-16 bg-black'>
            <h1 className='text-4xl font-semibold'>Scans</h1>
            <TableForScans scans={scans}/>
        </div>
    </>
  )
}

export default Main
