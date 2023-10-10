import axiosInstance from "./apiConstant";
import { API_ROLEWISE } from "./apiConstant";
// import { useDataContext } from '../Context/DateContext'

export const fetchRoleWiseData = async (
  empId,
  token,
  currentDate,
  quarterNo
) => {
  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  try {
    const response = await axiosInstance.get(API_ROLEWISE.DATA, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        emp_id: empId,
        current_date: formattedDate.toString(),
        quarter_no: 0,
      },
    });

    if (response.status >= 200 && response.status < 300) {
      const contentType = response.headers.get("content-type");
      console.log("Content-Type:", contentType);

      if (contentType && contentType.includes("application/json")) {
        return response.data;
      } else {
        console.error("Response is not in JSON format");
        throw new Error("Response is not in JSON format");
      }
    } else {
      console.error(`Network response was not ok (${response.status})`);
      throw new Error(`Network response was not ok (${response.status})`);
    }
  } catch (error) {
    console.error("Error fetching role-wise data:", error);
    throw error;
  }
};
