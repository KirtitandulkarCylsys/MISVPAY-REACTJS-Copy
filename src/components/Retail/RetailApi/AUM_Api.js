import { useState, useEffect, useMemo } from 'react';
import { API_AUM_DROPDOWN, API_AUM_Region, API_AUM_UFC } from '../../../Constant/apiConstant';
import {API_AUM_period} from '../../../Constant/apiConstant';
import { API_SCHEME_DETAILS } from '../../../Constant/apiConstant';
import axiosInstance from '../../../Constant/apiConstant';


export const AumDropdownApi = () => {
  const [aum_dropdown, setAumDropdown] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get(API_AUM_DROPDOWN.DATA);
        // const data = await response.json();
        const data = response.data;
        setAumDropdown(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching AUM details", error);
      }
    };

    fetchData();
  }, []);
  return {aum_dropdown, loading}
}

export const useAUMApi = (queryParams) => {
  const [aum_details, setAumDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get(API_AUM_Region.DATA(queryParams));
        // const data = await response.json();
        const data = response.data;
        setAumDetails(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching AUM details", error);
      }
    };

    fetchData();
  }, []);

  return {aum_details,loading};
};

export const usePeriodApi = () => {
  const [aum_period, setAumPeriod] = useState([]);
  const [loading, setLoading] = useState(false);
  const [report_period, setReportPeriod] = useState("");
  const queryParams = new URLSearchParams({
    report_period: report_period,
  })

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get(API_AUM_period.DATA(queryParams));
        // const data = await response.json();
        const data = response.data;
        setAumPeriod(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching AUM details", error);
      }
    };


  return{ aum_period, loading, fetchData, report_period, setReportPeriod};
};


export const useUfc = (queryParams) => {
  const [aum_ufc, setAumUfc] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get(API_AUM_UFC.DATA(queryParams));
        // const data = await response.json();
        const data = response.data;
        setAumUfc(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching AUM details", error);
      }
    };
    fetchData();
  }, []);
  return {aum_ufc,loading};
};

export const Scheme =()=>{

  const [scheme_details, setSchemeDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const response = await axiosInstance.get(API_SCHEME_DETAILS.DATA);
        // const data = await response.json();
        const data = response.data;
        setSchemeDetails(data);
        console.log(scheme_details,"aaaa")
      } catch (error) {
        console.error("Error fetching AUM details", error);
      }
    };
    fetchData();
  }, []);
  return {scheme_details};

}
 
 