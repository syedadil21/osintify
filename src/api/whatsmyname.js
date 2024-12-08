import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

async function whatsmyname(scanTarget) {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const response = await fetch(`http://127.0.0.1:5000/get_username_whatsmyname/${scanTarget}`, requestOptions)
        const data = await response.text();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

export default whatsmyname
