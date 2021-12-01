import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (url:string, headers?: object) => {
    const [ data, setData ] = useState<string>(url)
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ error, setError] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(url, {...headers});
            // const response = await fetch(url, {...headers});
            const data = await response.data
            console.log('hook data', typeof data)
            setData(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    return [loading, data]
}

export default useData;