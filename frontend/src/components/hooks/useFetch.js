import {useContext, useEffect} from 'react'
import { FetchContext } from "../../store/fetch";
import axios from 'axios'

export const useFetch = (url) => {
    const { setLoading, setData, setError } = useContext(FetchContext);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(url);
            const json = await res.json();
            setData({payload: json});
          } catch (error) {
            setError(error);
          }
        };
        fetchData();
      }, []);
}
