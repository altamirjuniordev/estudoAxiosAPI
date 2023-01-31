//configuração de objeto global

import axios from 'axios'

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
        AlgumaCoisa: "teste"
    },
});

export default blogFetch