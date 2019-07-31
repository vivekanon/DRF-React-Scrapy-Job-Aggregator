import { useContext, useEffect } from 'react'
import { FetchContext } from "../../store/fetch";
import Axios from 'axios';

export const useHookFetch = (url) => {
    const { setLoading, setData, setError } = useContext(FetchContext);
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
          try {
            const res = await fetch(url);
            const json = await res.json();
            setData({payload: json});
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        fetchData();
      }, []);
}

export function Fetch(path) {
    Axios.get(path)
    .then(response=> response.data)
    .catch(error=> error)
}