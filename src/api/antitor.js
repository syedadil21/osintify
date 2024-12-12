import { addScan } from '@/config/Supabase';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

async function antitor(scanTarget) {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        console.log('====================================');
        console.log(scanTarget);
        console.log('====================================');
        const response = await fetch(`http://localhost:3000/api/antitor/${scanTarget}`, requestOptions)
        const data = await response.json();
        const filteredMovies = data.contents.filter(item => item.category === "Movies"); 
        console.log({antitor: filteredMovies});
        return { antitor: filteredMovies };
        //  const scanAdded = await addScan(scanName, scanTarget, data)
        //  if (scanAdded) {
        //      toast.success("Scan Completed")
        //      console.log(scanAdded);
        //  }

    } catch (error) {
        console.log(error);
    }
}

export default antitor
