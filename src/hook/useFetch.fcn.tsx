import {useState, useEffect} from 'react';

export function useFetch (url: string, options: RequestInit | undefined){
    
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        fetch(url, {
            
            ...options,
            headers:{
                'Accept': 'application/json',
                ...options?.headers
            }
        }).then(r => r.json()).then(data => {
            setLoading(false)
            setData(data)
            console.log(data)

        }).catch((e) => {
            setLoading(false)
            setErrors(e)

        }).finally(() => {
                setLoading(false)
            })
    }, [])
    return {loading,data,errors}
}