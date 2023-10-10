import React, { useState } from "react";
import "../Assets/css/Auth/Login.css";
import leftimage from "../Assets/images/utiloginfinal.png";
import { useNavigate } from "react-router-dom";
import { setEmpIdCookie, setAuthTokenCookie } from "./Cookie";
import { API_LOGIN } from "../../Constant/apiConstant";
import Api from "../../Constant/apiConstant";
import { fetchRoleWiseData } from "../../Constant/apiService";
import { useDataContext } from "../../Context/DataContext";
import { useEffect } from "react";

const Login = () => {
  const [p_emp_id, setEmpID] = useState(" ");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { roleWiseData, setRoleWiseData } = useDataContext();
const navigate = useNavigate();
  useEffect(() => {
    const empId = localStorage.getItem("emp_id");
    const token = localStorage.getItem("token");
    if (empId && token) {
      fetchRoleWiseData(empId, token)
        .then((roleWiseData) => {
          setRoleWiseData(roleWiseData);
        })
        .catch((error) => {
          console.error("Error fetching role-wise data:", error);
        });
    }
  }, [setRoleWiseData]);

  const handleLogin = async (e) => {
    e.preventDefault();
    Api.post(API_LOGIN.DATA, { p_emp_id, password })
      .then((response) => {
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
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const empId = data[0].p_emp_id;
          const token = data[0].p_auth_token;
          localStorage.setItem("emp_id", empId);
          localStorage.setItem("token", token);

          setEmpIdCookie(empId);
          setAuthTokenCookie(token);

          setEmpID("");
          setPassword("");

          fetchRoleWiseData(empId, token)
            .then((roleWiseData) => {
              setRoleWiseData(roleWiseData);
              // updateRoleWiseData = roleWiseData
              navigate('/Home');
            })
            .catch((error) => {
              console.error("Error fetching role-wise data:", error);
            });
        } else {
          console.error("Invalid API response format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <div className="container-fluid" id="main-container">
        {
          <div className="container-fluid" id="main-container">
            <div className="col-md-12" id="main-login">
              <div className="col-md-6">
                <img src={leftimage} alt="images" className="main-image" />
              </div>
              <div className="col-md-6" id="second-card">
                <div>
                  <div className="text-center">
                    <h2 id="login-heading">LOGIN</h2>
                    <p className="login-p">Please enter your details</p>
                  </div>
                  <div className="main-form">
                    <form>
                      <div className="mb-3">
                        <label className="form-label" id="label-text">
                          Employee ID <span className="required-span">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Please Enter your valid Employee ID"
                          value={p_emp_id}
                          onChange={(e) => {
                            setEmpID(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" id="label-text">
                          Password <span className="required-span">*</span>
                        </label>
                        <input
                          type={showPassword ? "text" : "password"} // Toggle the input type based on showPassword state
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Please Enter your Password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={showPassword}
                          onChange={() => setShowPassword(!showPassword)}
                        />
                        <label className="form-check-label">
                          Show Password
                        </label>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn w-100"
                          id="button-login"
                          onClick={handleLogin}
                          onSubmit={roleWiseData}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="query">
                    <p className="query-p">
                      For any query, Please write to :{" "}
                      <span>mis.analytics@uti.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};
export default Login;
