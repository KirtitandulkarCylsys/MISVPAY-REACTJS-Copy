import { useEffect, useState } from "react";
import axiosInstance, { API_SUMMARY_TRANSACTION } from "../../../Constant/apiConstant";
// nested regions api
export const RegionApi = (queryParams) => {
  const [regions, setRegion] = useState([]);
  const [loading, setLoading]= useState();
  useEffect(() => {
    const fetchRegionData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(API_SUMMARY_TRANSACTION.DATA(queryParams));
        const data = response.data;
        setRegion(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching  details", error);
      }
    };
    fetchRegionData();
  }, [queryParams]);
  return { regions, loading };
};

// nested ufcApi
export const UfcApi = (queryParams) => {
  const [ufc, setUfc] = useState([]);
  useEffect(() => {
    const fetchUfcData = async () => {
      try {
				const response = await axiosInstance.get(API_SUMMARY_TRANSACTION.DATA(queryParams));
        const data = response.data;
        setUfc(data);
      } catch (error) {
        console.error("Error fetching  details", error);
      }
    };
    fetchUfcData();
  }, [queryParams]);
  return { ufc };
};

// nested RM Api
export const RMApi = (queryParams) => {
  const [rm, setRm] = useState([]);
  useEffect(() => {
    const fetchRMData = async () => {
      try {
        const response = await axiosInstance.get(API_SUMMARY_TRANSACTION.DATA(queryParams));
        const data = response.data;
        setRm(data);
      } catch (error) {
        console.error("Error fetching  details", error);
      }
    };
    fetchRMData();
  }, [queryParams]);
  return { rm };
};

// all India regionwise APi
export const AllRegionwise = (queryParams) => {
  const [regionwise, setRegionWise] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAllRegionData = async () => {
      setLoading(true);
      try {
				const response = await axiosInstance.get(API_SUMMARY_TRANSACTION.DATA(queryParams));
        const data = response.data;
        setRegionWise(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching  details", error);
      }
    };
    fetchAllRegionData();
  }, [queryParams]);
  return { regionwise, loading };
};

// all India ufcwise APi
export const AllUfcwise = (queryParams) => {
  const [ufcwise, setUfcWise] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAllRegionData = async () => {
      setLoading(true);
      try {
				const response = await axiosInstance.get(API_SUMMARY_TRANSACTION.DATA(queryParams));
				const data = response.data;
        setUfcWise(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching  details", error);
      }
    };
    fetchAllRegionData();
  }, [queryParams]);
  return { ufcwise, loading };
};

// all India rmwise APi
export const AllRmwise = (queryParams) => {
  const [rmwise, setRmWise] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAllRegionData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(API_SUMMARY_TRANSACTION.DATA(queryParams));
        const data = response.data;
        setRmWise(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching  details", error);
      }
    };
    fetchAllRegionData();
  }, [queryParams]);
  return { rmwise, loading };
};
