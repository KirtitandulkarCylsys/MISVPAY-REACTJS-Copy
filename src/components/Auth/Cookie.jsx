import Cookies from "js-cookie";

export const setEmpIdCookie = (empId) => {
  const trimmedEmpId = empId.trim();
  Cookies.set("empId", trimmedEmpId, { expires: 1 }); 
};

export const getEmpIdCookie = () => {
  return Cookies.get("empId");
};

export const removeEmpIdCookie = () => {
  Cookies.remove("empId");
};

export const setAuthTokenCookie = (token) => {
  const trimmedToken = token.trim();
  Cookies.set("authToken", trimmedToken, { expires: 1 }); 
};

export const removeAuthTokenCookie = () => {
  Cookies.remove("authToken");
};
