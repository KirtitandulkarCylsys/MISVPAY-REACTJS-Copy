import React, { useState } from "react";
import "../Modal/ScheduleModal.css";
import DailyModal from "./DailyModal";
import MonthlyModal from "./MonthlyModal";
import WeeklyModal from "./WeeklyModal";
import HeadModal from "./HeadModal";
import FooterModal from "./FooterModal";

const ScheduleModal = () => {
  const [activeTab, setActiveTab] = useState("oneTime");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="modal fade" id="scheduleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog " style={{ maxWidth: "615px" }}>
          <div className="modal-content">
            <div className="">
              <div className="col-md-12 schedulehead "><h5 ><b>Schedule</b></h5></div>             
            </div>
            <div className="modal-body">
              <ul className="nav nav-pills d-flex justify-content-center gap-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={` ${activeTab === "oneTime" ? "active" : ""} schedulebtn `}
                    id="pills-oneTime-tab"
                    data-bs-toggle="pill"
                    onClick={() => handleTabChange("oneTime")}
                  >
                    OneTime
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`${activeTab === "daily" ? "active" : ""} schedulebtn `}
                    id="pills-daily-tab"
                    data-bs-toggle="pill"
                    onClick={() => handleTabChange("daily")}
                  >
                    Daily
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={` ${activeTab === "weekly" ? "active" : ""} schedulebtn`}
                    id="pills-weekly-tab"
                    data-bs-toggle="pill"
                    onClick={() => handleTabChange("weekly")}
                  >
                    Weekly
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={` ${activeTab === "monthly" ? "active" : ""} schedulebtn`}
                    id="pills-monthly-tab"
                    data-bs-toggle="pill"
                    onClick={() => handleTabChange("monthly")}
                  >
                    Monthly
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className={`tab-pane fade ${activeTab === "oneTime" ? "show active" : ""}`} id="pills-oneTime" role="tabpanel">
                  <div className="modal-body">
                    <div className="card mt-4 modalcard">
                      <HeadModal />
                      <div className="mt-3">
                        <FooterModal />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane fade ${activeTab === "daily" ? "show active" : ""}`} id="pills-daily" role="tabpanel">
                  <DailyModal />
                </div>
                <div className={`tab-pane fade ${activeTab === "weekly" ? "show active" : ""}`} id="pills-weekly" role="tabpanel">
                  <WeeklyModal />
                </div>
                <div className={`tab-pane fade ${activeTab === "monthly" ? "show active" : ""}`} id="pills-monthly" role="tabpanel">
                  <MonthlyModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;

