import axios from 'axios';

export const https = axios.create({
    baseURL: 'https://worldcupjson.net/',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
})