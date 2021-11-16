import { useState, useEffect } from 'react';

const useData = (url:string) => {
    const [ data, setData ] = useState<string>(url)
    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json()    
            setData(data)
            setLoading(false)
        }

        fetchData()
    }, [])

    return [loading, data]
}

export default  useData;