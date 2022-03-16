import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (service) => {
    const [fetchedData, setFetchedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = `/testurl/test`;

    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': true,
                },
                withCredentials: true,
            })
            .then((response) => {
                if(response.headers['content-type'] === 'application/json' && response.status === 200){
                    return response.data;
                }
                throw response;
            })
            .then((returnedData) => setFetchedData(returnedData))
            .catch((err) => {
                setError(err);
            })
            .finally(() => setLoading(false));
    }, [url]);
    return { fetchedData, loading, error };
};

export const getchatdata = (cusipNo, acctSvcTyCd, begEffDa) => {
    
    const url = `/testchat/test`;

    return axios({
        method: 'get',
        url: url,
        timeout: 10000,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        return response;
    });
};

