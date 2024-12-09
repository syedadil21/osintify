import { addScan } from '@/config/Supabase';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

async function whatsmyname(scanName, scanTarget) {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const response = await fetch(`http://127.0.0.1:5000/get_username_whatsmyname/${scanTarget}`, requestOptions)
        const data = await response.text();
        const scanAdded = await addScan(scanName, scanTarget, data)
        if (scanAdded) {
            toast.success("Scan Completed")
            console.log(scanAdded);
        }
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

export default whatsmyname
