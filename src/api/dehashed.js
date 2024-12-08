import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

 async function dehashed () {
     try {
         let url = "https://api.dehashed.com/search?query=username:\"test\"";
         console.log(url)
         let result = await axios({
             method: 'get',
             headers: {
                 'Content-Type': 'application/json',
                 "Accept": "application/json",
                 "Authorization": "s2kihrm38lmspnn4jxd06i5sv4tyoei3",
                 "Access-Control-Allow-Headers": "Content-Type",
                 "Access-Control-Allow-Origin": 'http://localhost:3000',
                 "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
             },
             url: url,
             timeout: 10000,
         });
         // TODO: Check if result.data.success if true or not And then handle errors
         console.log(result);
         
         let json = result.data;
         if (json?.success) {
             return json?.data
         }
         else {
             toast.error(json?.message)
         }

     } catch (error) {
         console.log(error);
         toast.error(error?.response?.data?.message)
     }
}

export default dehashed
