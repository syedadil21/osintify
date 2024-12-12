import { addScan } from '@/config/Supabase';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

async function blockchain(scanTarget) {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const response = await fetch(`https://blockchain.info/rawaddr/${scanTarget}`, requestOptions)
        const data = await response.json();
        // const scanAdded = await addScan(scanName, scanTarget, data)
        // if (scanAdded) {
        //     toast.success("Scan Completed")
        //     console.log(scanAdded);
        // }
        data.txs = data.txs.length;

        console.log({blockchain: data});
        return { blockchain: data };

    } catch (error) {
        console.log(error);
    }
}

export default blockchain
