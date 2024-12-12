import { addScan } from '@/config/Supabase';
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import keepProperty from './helper';

 async function dehashed (scanTarget, query ,reqData = "") {
     try {        
        const myHeaders = new Headers();
         myHeaders.append("Accept", "application/json");
         myHeaders.append("Authorization", "Basic ZnlwYXBpOTM4QGdtYWlsLmNvbTpzMmtpaHJtMzhsbXNwbm40anhkMDZpNXN2NHR5b2VpMw==");

         const requestOptions = {
             method: "GET",
             headers: myHeaders,
             redirect: "follow"
         };

        const response = await fetch(`http://localhost:3000/api/dehashed/${scanTarget}?query=${query}`, requestOptions)
        const data = await response.json();
        console.log({dehashed: data.entries});
        

        if(reqData === "all" || reqData.length == 0)
        {
            return { dehashed: data.entries }
        }
        else
        {
            if (reqData === 'ipaddress')
            {
                reqData = 'ip_address'
            }

            const newTemp = data.entries.map(item => {
                keepProperty(item, reqData)
                return item
            }) 

            // console.log('====================================');
            // console.log("FILTERED", newTemp, "FILTERED");
            // console.log('====================================');
            return { dehashed: newTemp}
        }
        
        
     } catch (error) {
         console.log(error);
     }
}

export default dehashed
