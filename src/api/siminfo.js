import { addScan } from '@/config/Supabase';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import keepProperty from './helper';

async function siminfo(scanTarget, reqData = "") {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const response = await fetch(`http://127.0.0.1:5000/sim/${Number(scanTarget)}`, requestOptions)
        const data = await response.json();
       
        if (reqData === "all" || reqData.length == 0) {
            console.log(data, 'no req');
            
            return { siminfo: data }
        }
        else 
        {
            if (reqData === 'address') 
            {
                reqData = 'Address'
            }
            if (reqData === 'phonenumber') 
            {
                reqData = 'Mobile #'
            }
            if (reqData === 'cnic') 
            {
                reqData = 'CNIC'
            }

            const newTemp = data.map(item => {
                keepProperty(item, reqData)
                return item
            })
            // console.log("AFTER",newTemp);
            
            return { siminfo: newTemp }

        }

        console.log({siminfo: data});

    } catch (error) {
        console.log(error);
    }
}

export default siminfo
