import { Input } from '@nextui-org/react'
import { useState } from 'react';


const ByModuleComponent = () => {
    const [currentValueRadio, setCurrentValueRadio] = useState();
    return (
        <>
            <div className='bg-gray-800 rounded-2xl w-full flex justify-between my-2'>
                <div className='flex items-start '>
                    <Input type='radio' name='list' value={currentValueRadio} onChange={(e) => { setCurrentValueRadio(e.target.value) }} />
                    <p className='mx-3 my-2'>AbstractAPI</p>
                </div>

                <div className='flex flex-col w-[80%]'>
                    <p className='mt-2 '>Look up domain, phone and IP address information from AbstractAPI</p>
                </div>
            </div>
            <div className='bg-gray-800 rounded-2xl w-full flex justify-between my-2'>
                <div className='flex items-start '>
                    <Input type='radio' name='list' value={currentValueRadio} onChange={(e) => { setCurrentValueRadio(e.target.value) }} />
                    <p className='mx-3 my-2'>abuse.ch</p>
                </div>

                <div className='flex flex-col w-[80%]'>
                    <p className='mt-2 '>Check if host/domain, IP address or netblock is malicious according to Abuse.ch</p>
                </div>
            </div>
            <div className='bg-gray-800 rounded-2xl w-full flex justify-between my-2'>
                <div className='flex items-start '>
                    <Input type='radio' name='list' value={currentValueRadio} onChange={(e) => { setCurrentValueRadio(e.target.value) }} />
                    <p className='mx-3 my-2'>AccountFinder</p>
                </div>

                <div className='flex flex-col w-[80%]'>
                    <p className='mt-2 '>Look for possible associated accounts on nearly 200 websites like Ebay, Slashdot, reddit, etc.</p>
                </div>
            </div>
            <div className='bg-gray-800 rounded-2xl w-full flex justify-between my-2'>
                <div className='flex items-start '>
                    <Input type='radio' name='list' value={currentValueRadio} onChange={(e) => { setCurrentValueRadio(e.target.value) }} />
                    <p className='mx-3 my-2'>Ahmia</p>
                </div>

                <div className='flex flex-col w-[80%]'>
                    <p className='mt-2 '>Search Tor &apos;Ahmia&apos; search engine for mentions of the target</p>
                </div>
            </div>
        </>
    )
}

export default ByModuleComponent
