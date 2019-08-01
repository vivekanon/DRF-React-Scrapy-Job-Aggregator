import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { FetchContext } from "../../store/fetch";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination() {
    const { data, setData, setError, setLoading } = useContext(FetchContext);
    const [nextArrow, setNextArrow] = useState(true)
    const [prevArrow, setPrevArrow] = useState(true)
    useEffect(()=> {
      if(data.payload.next !== null) {
        setNextArrow(true)
      } else {
        setNextArrow(false)
      }
    }, [data])
    useEffect(()=> {
      if(data.payload.previous !== null) {
        setPrevArrow(true)
      } else {
        setPrevArrow(false)
      }
    }, [data])
    function nextPage() {
      setLoading(true)
      axios.get(`${data.payload.next ? data.payload.next : setNextArrow(false)}`)
      .then(response=> setData({payload: response.data}), setLoading(false))
      .catch(error=> setError(error))
    }
    function prevPage() {
      if(data.payload.previous === null) {
        setPrevArrow(false)
      } else {
        setPrevArrow(true)
      }
      setLoading(true)
      axios.get(`${data.payload.previous ? data.payload.previous : setPrevArrow(false)}`)
      .then(response=> setData({payload: response.data}), setLoading(false))
      .catch(error=> setError(error))
    }
    return (
          <div className="items-center flex">
          {
            prevArrow ?
            <button 
              className="border px-2 py-2 border-grey-100 text-indigo-600 transform shadow job-card hover:shadow-md hover:text-indigo-800"
              onClick={()=> prevPage()}>
              <IoIosArrowBack  />
            </button>
            : null
            }
            {
              nextArrow ?
              <button 
                className="border px-2 py-2 border-grey-100 text-indigo-600 transform shadow job-card hover:shadow-md hover:text-indigo-800"
                onClick={()=> nextPage()}>           
                <IoIosArrowForward  />
              </button>
              : null
            }
          </div>
    );
  }