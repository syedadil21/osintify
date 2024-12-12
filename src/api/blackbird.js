import { addScan } from '@/config/Supabase';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

async function blackbird(scanTarget, query) {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const response = await fetch(`http://127.0.0.1:5000/blackbird?key=${query}&value=${scanTarget}`, requestOptions)
        const data = await response.json();
        console.log({blackbird: data.foundAccounts});
        return { blackbird: data.foundAccounts }
        
        // const scanAdded = await addScan(scanName, scanTarget, data)
        // if (scanAdded) {
        //     toast.success("Scan Completed")
        //     console.log(scanAdded);
        // }

    } catch (error) {
        console.log(error);
    }
}

export default blackbird
