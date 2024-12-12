'use client'
import { Button, Input, Select, SelectItem, Tab, Tabs, useDisclosure } from '@nextui-org/react'
import ByUseCaseComponent from './ByUseCaseComponent'
import ByReqDataComponent from './ByReqDataComponent'
import ByModuleComponent from './ByModuleComponent'
import toast from 'react-hot-toast'
import { useState } from 'react'
import dehashed from '@/api/dehashed'
import blackbird from '@/api/blackbird'
import whatsmyname from '@/api/whatsmyname'
import { addScan, getScans, supabase } from '@/config/Supabase'
import siminfo from '@/api/siminfo'
import hunterio from '@/api/hunterio'
import blockchain from '@/api/blockchain'
import antitor from '@/api/antitor'
import ModalForLoading from '../ModalForLoading'
import decisionFunction from '@/api/decisionFunction'


const Main = () => {

    const [scanName, setScanName] = useState("")
    const [scanTarget, setScanTarget] = useState("")
    const [domain, setDomain] = useState("email");

    const [selectedModule, setSelectedModule] = useState("");
    const [reqData, setReqData] = useState("all");

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const [currentTab, setCurrentTab] = useState('')



    const runScan = async () => {
        // await dehashed(scanName, scanTarget, "ip_address")
        // await blackbird(scanName, scanTarget, "email")
        // await hunterio("","vercel.com")
        // await blockchain("",'1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F')
        // await antitor("",'119.73.97.230')
        // await whatsmyname(scanName, scanTarget)
        // console.log(await getScans())
        // await siminfo(scanName, scanTarget);
        
        if (scanName && scanTarget && domain) {
            toast("Starting to gather data")
            onOpen()
            const response = await decisionFunction(currentTab, scanTarget, reqData, selectedModule, domain)
            // console.log('====================================');
            console.log(response, "Final response");
            // console.log('====================================');
             const scanAdded = await addScan(scanName, scanTarget, response)
             if (scanAdded) {
                 toast.success("Scan Completed")
                 console.log(scanAdded);
             }
            onClose()
        }
        else {
            toast.error("Please enter Scan name, Scan target and Domain ")
        }
    }

    const checkDisabledKeys = () => {
        if (selectedModule === "dehashed")
            return ["blockchain", 'domain',"cnic","phonenumber"]
        else if (selectedModule === "whatsmyname")
            return ["blockchain", 'domain',"cnic","phonenumber", "ipaddress", "email"]
        else if (selectedModule === "blackbird")
            return ["blockchain", 'domain',"cnic","phonenumber", "ipaddress"]
        else if (selectedModule === "siminfo")
            return ["blockchain", 'domain', "ipaddress", "email", "username"]
        else if (selectedModule === "hunterio")
            return ["blockchain","cnic","phonenumber", "ipaddress", "email", "username"]
        else if (selectedModule === "blockchain")
            return ["domain", "cnic", "phonenumber", "ipaddress", "email", "username"]
        else if (selectedModule === "antitor")
            return ["blockchain", "cnic", "phonenumber", "ipaddress", "email", "username"]

        
    }

    return (
        <div className='p-16 w-full bg-black'>
            <ModalForLoading isOpen={isOpen}  onOpenChange={onOpenChange} />
            <h1 className='text-4xl font-semibold'>New Scans</h1>
            <div className='main section w-full flex flex-col'>

                <div className='flex justify-between my-10'>
                    <div className='Inupts flex flex-col justify-around flex-1 px-10'>
                        <Input value={scanName} onChange={(e) => setScanName(e.target.value)} placeholder='Enter the name of the scan' label='Scan Name' className='my-2' />
                        <Input value={scanTarget} onChange={(e) => setScanTarget(e.target.value)} placeholder='Enter the target of the scan' label='Scan Target' className='my-2' />
                        <Select
                            isRequired
                            className="my-2"
                            defaultSelectedKeys={["email"]}
                            label="Domain"
                            placeholder="Select a domain"
                            selectedKeys={[domain]}
                            required
                            disabledKeys={checkDisabledKeys()}
                            unselectable='off'
                            disallowEmptySelection
                            onChange={(e) => {
                                setDomain(e.target.value)
                                setReqData('all')
                            }}
                        >
                            <SelectItem key={"email"}>Email</SelectItem>
                            <SelectItem key={"username"}>Username</SelectItem>
                            <SelectItem key={"ipaddress"}>IPv4 Address</SelectItem>
                            <SelectItem key={"phonenumber"}>Phone Number</SelectItem>
                            <SelectItem key={"cnic"}>National Identity Card (CNIC)</SelectItem>
                            <SelectItem key={"domain"}>Domain</SelectItem>
                            <SelectItem key={"blockchain"}>Blockchain Address</SelectItem>
                        </Select>
                    </div>


                    <div className='flex flex-col w-[70%]'>

                        <p className='ml-2 font-medium'>Following are a list of possible <span className='font-bold'>scan target</span> examples.</p>

                        <div className=' p-3 bg-gray-800 rounded-2xl flex justify-between shadow-lg'>
                            <div>
                                <p><span className='font-bold'>Domain Name: </span> e.g. example.com</p>
                                <p><span className='font-bold'>IPv4 Address: </span> e.g. 1.2.3.4</p>
                                {/* <p><span className='font-bold'>IPv6 Address: </span> e.g. 2040:47700:4700::1111</p> */}
                                {/* <p><span className='font-bold'>Hostname/Sub-domain: </span> e.g. abc.example.com</p> */}
                                <p><span className='font-bold'>Username: </span> e.g. syedadil21</p>
                            </div>

                            <div>
                                <p><span className='font-bold'>Email Address: </span> e.g. andy@example.com</p>
                                <p><span className='font-bold'>Phone Number: </span> e.g. +1234577789</p>
                                <p><span className='font-bold'>Blockchain Address: </span> e.g. 1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F</p>
                                {/* <p><span className='font-bold'>Human Name: </span> e.g. Syed Adil</p> */}
                                {/* <p><span className='font-bold'>Network ASN: </span> e.g. 1234</p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='TabsSection'>
                    {currentTab}
                    <Tabs key='underlined' selectedKey={currentTab} onSelectionChange={setCurrentTab} onChange={(e)=>{
                        setDomain('')
                        setReqData('all')
                        }} variant="underlined" aria-label="Tabs variants">
                        {/* <Tab key="ByUseCase" title="By Use Case">
                        <div className='px-5'>
                            <ByUseCaseComponent/>
                        </div>
                    </Tab> */}
                        <Tab key="ByReqData" title="By Required Data" >
                            <div className='px-5'>
                                {/* {reqData} */}
                                <ByReqDataComponent setReqData={setReqData} domain={domain} />
                            </div>
                        </Tab>
                        <Tab key="ByModule" title="By Module" >
                            <div className='px-5'>
                                {/* {selectedModule} */}
                                <ByModuleComponent setDomain={setDomain} setSelectedModule={setSelectedModule} />
                            </div>
                        </Tab>

                    </Tabs>
                </div>

                <div>
                    <Button color='success' className='text-white' onPress={runScan}>Run Scan Now</Button>
                </div>

            </div>
        </div>
    )
}

export default Main
