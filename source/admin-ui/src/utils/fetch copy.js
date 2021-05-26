import axios from 'axios';
import { apiHost } from './index'

export async function fetch(url, options) {
    options = options || {}
    options.url = url
    options.method = options.method || 'get';

    try {
        return await axios(options);
    } catch (err) {
        console.log(err)

        throw new Error("SERVICE_ERROR")
    }
}

export async function get(url, options = {}) {
    options.method = 'get';
    if(!options.external){
        url = api(url)
    }
    return fetch(url, options);
}

export async function post(url, options = {}) {
    debugger
    options.method = 'post';
    if(!options.external){
        url = api(url)
    }

    return fetch(url, options);
}

export function api(url) {
    return apiHost + url;
}

