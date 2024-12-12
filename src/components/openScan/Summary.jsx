import { Chip } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import BarChartForSummary from './BarChartForSummary'

const Summary = ({scan}) => {

    const [scansForGraph, setScansForGraph] = useState();
    useEffect(()=>{
        if(scan)
        {
            console.log('====================================');
            // console.log(scan?.result);
            console.
            log('final',[
                {"month": "antitor", "value" : scan?.result?.antitor?.length}, 
                {"month": "blackbird", "value" : scan?.result?.blackbird?.length}, 
                {"month": "blockchain", "value" : scan?.result?.blockchain?.length}, 
                {"month": "dehashed", "value" : scan?.result?.dehashed?.length}, 
                {"month": "hunterio", "value" : scan?.result?.hunterio?.length}, 
                {"month": "siminfo", "value" : scan?.result?.siminfo?.length},
            ]);
            setScansForGraph([
                { "month": "antitor", "value": scan?.result?.antitor?.length },
                { "month": "blockchain", "value": scan?.result?.blockchain?.length },
                { "month": "dehashed", "value": scan?.result?.dehashed?.length },
                { "month": "hunterio", "value": scan?.result?.hunterio?.length },
                { "month": "siminfo", "value": scan?.result?.siminfo?.length },
            ])
            console.log('====================================');
        }
    },[scan])
  return (
    <>
        <div className='w-full flex flex-col'>
            <div className='w-full my-3'>
                <div className='flex justify-evenly'>
                    <div className='flex items-center'>
                        <p className='mx-2'>Total:</p>
                        <Chip>5</Chip>
                    </div>
                    {/* <div className='flex items-center'>
                        <p className='mx-2'>Unique:</p>
                        <Chip>383</Chip>
                    </div> */}
                    <div className='flex items-center'>
                        <p className='mx-2'>Status:</p>
                        <Chip>Completed</Chip>
                    </div>
                    {/* <div className='flex items-center'>
                        <p className='mx-2'>Errors:</p>
                        <Chip>125</Chip>
                    </div> */}
                </div>
            </div>

            <div className='chart'>
                <BarChartForSummary scan={scansForGraph} />
            </div>
        </div>
    </>
  )
}

export default Summary
