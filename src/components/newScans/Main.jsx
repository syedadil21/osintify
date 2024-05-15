'use client'
import { Button, Input, Tab, Tabs } from '@nextui-org/react'
import ByUseCaseComponent from './ByUseCaseComponent'
import ByReqDataComponent from './ByReqDataComponent'
import ByModuleComponent from './ByModuleComponent'


const Main = () => {
  return (
    <div className='p-16 w-full'>
      <h1 className='text-4xl font-semibold'>New Scans</h1>
        <div className='main section w-full flex flex-col'>
            
            <div className='flex justify-between my-10'>
                <div className='Inupts flex flex-col justify-around'>
                    <Input placeholder='Enter the name of the scan' label='Scan Name' className='my-2'/> 
                    <Input placeholder='Enter the target of the scan' label='Scan Target' className='my-2'/> 
                </div>


                <div className='flex flex-col w-[70%]'>

                    <p className='ml-2 font-medium'>Following are a list of possible <span className='font-bold'>scan target</span> examples.</p>

                    <div className=' p-3 bg-gray-800 rounded-2xl flex justify-between shadow-lg'>
                        <div>
                            <p><span className='font-bold'>Domain Name: </span> e.g. example.com</p>
                            <p><span className='font-bold'>IPv4 Address: </span> e.g. 1.2.3.4</p>
                            <p><span className='font-bold'>IPv6 Address: </span> e.g. 2040:47700:4700::1111</p>
                            <p><span className='font-bold'>Hostname/Sub-domain: </span> e.g. abc.example.com</p>
                            <p><span className='font-bold'>Subnet: </span> e.g. 1.2.3.0/24</p>
                        </div>
                        
                        <div>
                            <p><span className='font-bold'>Email Address: </span> e.g. andy@example.com</p>
                            <p><span className='font-bold'>Phone Number: </span> e.g. +1234577789</p>
                            <p><span className='font-bold'>Human Name: </span> e.g. Syed Adil</p>
                            <p><span className='font-bold'>Username: </span> e.g. syedadil21</p>
                            <p><span className='font-bold'>Network ASN: </span> e.g. 1234</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='TabsSection'>


                <Tabs key='underlined' variant="underlined" aria-label="Tabs variants">
                    <Tab key="ByUseCase" title="By Use Case">
                        <div className='px-5'>
                            <ByUseCaseComponent/>
                        </div>
                    </Tab>
                    <Tab key="ByReqData" title="By Required Data">
                        <div className='px-5'>
                            <ByReqDataComponent/>
                        </div>
                    </Tab>
                    <Tab key="ByModule" title="By Module">
                        <div className='px-5'>
                            <ByModuleComponent/>
                        </div>
                    </Tab>

                </Tabs>
            </div>

            <div>
                <Button color='success' className='text-white'>Run Scan Now</Button>
            </div>

        </div>
    </div>
  )
}

export default Main
