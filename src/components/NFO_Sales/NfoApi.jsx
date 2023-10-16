import React,{useState, useEffect} from 'react';
import { API_NFO } from '../../Constant/apiConstant';
import axiosInstance from "../../Constant/apiConstant";

export const NfoApi = ()=>{
    const [nfo_details, setNfoDetails]= useState([]);
    const [loading, setLoading]= useState('');
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true)
          try {
            const response = await axiosInstance.get(API_NFO.DATA);
            const data = response.data;
            setNfoDetails(data);
            setLoading(false)
          } catch (error) {
            console.error("Error fetching Nfo details", error);
          }
        };
    
        fetchData();
    }, []);
    return {nfo_details, loading};
}