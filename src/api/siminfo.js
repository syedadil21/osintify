import { addScan } from '@/config/Supabase';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

async function siminfo(scanTarget) {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const response = await fetch(`http://127.0.0.1:5000/sim/${Number(scanTarget)}`, requestOptions)
        const data = await response.json();
        // const scanAdded = await addScan(scanName, scanTarget, data)
        // if (scanAdded) {
        //     toast.success("Scan Completed")
        //     console.log(scanAdded);
        // }
        console.log({siminfo: data});
        return { siminfo: data }

    } catch (error) {
        console.log(error);
    }
}

export default siminfo
