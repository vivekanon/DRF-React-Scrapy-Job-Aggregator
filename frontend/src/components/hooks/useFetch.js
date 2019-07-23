import {useContext, useEffect} from 'react'
import { FetchContext } from "../../store/fetch";
import axios from 'axios'

export default function useFetch() {
    const { setLoading, setData,  setError } = useContext(FetchContext);
    useEffect((url)=> {
        setIsLoading(true)
        axios.get(url)
        .then(res=> setData(res.data), setLoading(false))
        .catch(error=> setError(error))
    }, [url])
}