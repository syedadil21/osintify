import { Input } from '@nextui-org/react'


const ByModuleComponent = () => {
  return (
    <>
        <div className='bg-blue-50 w-full flex justify-between my-2'>
            <div className='flex items-start '>
                <Input type='checkbox' name='checkbox' />
                <p className='mx-3 my-2'>AbstractAPI</p>
            </div>

            <div className='flex flex-col w-[80%]'>
                <p className='mt-2 '>Look up domain, phone and IP address information from AbstractAPI</p>
            </div>
        </div>
        <div className='bg-blue-50 w-full flex justify-between my-2'>
            <div className='flex items-start '>
                <Input type='checkbox' name='checkbox' />
                <p className='mx-3 my-2'>abuse.ch</p>
            </div>

            <div className='flex flex-col w-[80%]'>
                <p className='mt-2 '>Check if host/domain, IP address or netblock is malicious according to Abuse.ch</p>
            </div>
        </div>
        <div className='bg-blue-50 w-full flex justify-between my-2'>
            <div className='flex items-start '>
                <Input type='checkbox' name='checkbox' />
                <p className='mx-3 my-2'>AccountFinder</p>
            </div>

            <div className='flex flex-col w-[80%]'>
                <p className='mt-2 '>Look for possible associated accounts on nearly 200 websites like Ebay, Slashdot, reddit, etc.</p>
            </div>
        </div>
        <div className='bg-blue-50 w-full flex justify-between my-2'>
            <div className='flex items-start '>
                <Input type='checkbox' name='checkbox' />
                <p className='mx-3 my-2'>Ahmia</p>
            </div>

            <div className='flex flex-col w-[80%]'>
                <p className='mt-2 '>Search Tor 'Ahmia' search engine for mentions of the target</p>
            </div>
        </div>
    </>
  )
}

export default ByModuleComponent
