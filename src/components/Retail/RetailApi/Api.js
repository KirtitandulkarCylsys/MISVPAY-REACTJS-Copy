import { useState } from "react";
import { API_SUMMARY_TRANSACTION } from "../../../Constant/apiConstant";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../Constant/apiConstant";
import { useDataContext } from "../../../Context/DataContext";
const Api = () => {
  const [hide, setHide] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [select_type, setSelectType] = useState("");
  const [transaction_summary_report, setTransactionSummaryReport] = useState([]);
  // const [pageNumber, setPageNumber]=useState([]);
  const [loading, setLoading] = useState(false);
  const { roleWiseData } = useDataContext();
  const emproles = roleWiseData ? roleWiseData[0].EMP_ROLE : null;
  const channel = roleWiseData ? roleWiseData[0].CHANNEL_CODE : null;
  const zoneData = roleWiseData ? roleWiseData[0].ZONE : null;
  const REGIONData = roleWiseData ? roleWiseData[0].REGIONCODE : null;
  const UFCData = roleWiseData ? roleWiseData[0].UFC_CODE : null;
  const QUARTERData = roleWiseData ? roleWiseData[0].YEAR : null;
  const emp_id = roleWiseData ? roleWiseData[0].EMP_ID : null;
  let commonReportValue = "";
  switch (emproles) {
    case "ZH":
      commonReportValue = "ZONEWISE";
      break;
    case "RH":
      commonReportValue = "REGIONWISE";
      break;
    case "CM":
      commonReportValue = "UFCWISE";
      break;
    case "RM":
      commonReportValue = "RMWISE";
      break;
    default:
      commonReportValue = "";
  }

  const fetchTransactionSummary = async () => {
    try {
      const formattedStartDate = startDate.split("-").reverse().join("/");
      const formattedEndDate = endDate.split("-").reverse().join("/");
      const queryParams = new URLSearchParams({
        employee_id: emp_id,
        emprole: emproles,
        quarter: "202324Q2",
        start_date: formattedStartDate,
        end_date: formattedEndDate,
        select_type: select_type,
        scheme_code: "nill",
        channel: channel,
        zone: zoneData,
        region: REGIONData,
        ufc: UFCData,
        rm: emp_id,
        common_report: commonReportValue,
        page_number: "1",
        page_size: "",
      });

      if (startDate > endDate) {
        toast.error("End Date must be Greater Than Start Date");
        setLoading(false);
      } else {
        setLoading(true);

        const response = await axiosInstance.get(
          API_SUMMARY_TRANSACTION.DATA(queryParams)
        );
        const data = response.data;
        setTransactionSummaryReport(data);
        setLoading(false);
        setHide(true);
        console.log(transaction_summary_report);
      }
    } catch (error) {
      console.error("error fetching transaction summary data", error);
      throw new Error("Error fetching transaction summary data");
    }
  };

  const togglehide = async () => {
    try {
      await fetchTransactionSummary();
      setHide(true);
    } catch (error) {
      setHide(false);
      toast.error("Please fill all the fields");
    }
  };

  const formatNumberToIndianFormat = (number) => {
    if (typeof number !== "number") {
      return number;
    }
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  return {
    hide,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    select_type,
    setSelectType,
    transaction_summary_report,
    loading,
    togglehide,
    setHide,
    setLoading,
    formatNumberToIndianFormat,
    emproles
  };
};

export default Api;
