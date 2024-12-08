import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

 async function dehashed (scanTarget) {
     try {
         const myHeaders = new Headers();
         myHeaders.append("Accept", "application/json");
         myHeaders.append("Authorization", "Basic ZnlwYXBpOTM4QGdtYWlsLmNvbTpzMmtpaHJtMzhsbXNwbm40anhkMDZpNXN2NHR5b2VpMw==");

         const requestOptions = {
             method: "GET",
             headers: myHeaders,
             redirect: "follow"
         };

        const response = await fetch(`http://localhost:3000/api/dehashed/${scanTarget}`, requestOptions)
        const data = await response.text();
        console.log(data);
        
     } catch (error) {
         console.log(error);
     }
}

export default dehashed
