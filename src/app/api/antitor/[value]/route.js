import { NextResponse } from "next/server";

export async function GET(_, context) {
    const axios = require('axios');
    const { params } = context;
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.antitor.com/history/peer/?ip=${params.value}&key=57707ea1d091496c88f4cf01283de8ae`,
            headers: {
                'Cookie': 'JSESSIONID=1b1o3jc7w929g13kgu1azmf19s'
            }
        };
        const resp = await axios.request(config)
        return NextResponse.json(resp.data)

    } catch (error) {
        console.log(error);

    }

}