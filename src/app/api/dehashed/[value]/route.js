import { NextResponse } from "next/server";

export async function GET(req, context) {
    const axios = require('axios');
    const { params } = context;
    const query = req?.url?.toString()?.split('?')[1]?.split('=')[1]
    
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.dehashed.com/search?query=${query}:"${params.value}"`,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Basic ZnlwYXBpOTM4QGdtYWlsLmNvbTpzMmtpaHJtMzhsbXNwbm40anhkMDZpNXN2NHR5b2VpMw=='
            }
        };
        const resp = await axios.request(config)
        return NextResponse.json(resp.data)
    } catch (error) {
        console.log(error);

    }
    
}