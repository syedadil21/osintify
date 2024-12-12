import { addScan } from '@/config/Supabase';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

async function hunterio(scanTarget) {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const response = await fetch(`https://api.hunter.io/v2/domain-search?domain=${scanTarget}&api_key=6e659b94a4b6c71de7fc5f35ab46979048a3059f`, requestOptions)
        const data = await response.json();
        // const scanAdded = await addScan(scanName, scanTarget, data)
        // if (scanAdded) {
        //     toast.success("Scan Completed")
        //     console.log(scanAdded);
        // }
        const filteredData = data.data.emails.map(item => {
            return {"email": item.value}
        }) 
        
        console.log({hunterio: filteredData});
        return { hunterio: filteredData };

    } catch (error) {
        console.log(error);
    }
}

export default hunterio
