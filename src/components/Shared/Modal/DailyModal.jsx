import React from "react";
import HeadModal from "./HeadModal";
import FooterModal from "./FooterModal";
import "../Modal/ScheduleModal.css";
import "../Modal/DailyModal.css"

const DailyModal = () => {
  return (
    <>
      <div className="modal-body">
        <div className="card mt-4 modalcard">
          <HeadModal />
          <div className=" row m-3 mb-0">
            <div className="col-md-3 dailyrecur">
              <span>Recur every :</span>
            </div>
            <div className="col-md-1"><button className="form-control w-auto">01</button></div>
            <div className="col-md-4 dailyrecur m-1"><p>Days</p></div>
          </div>
          <FooterModal />
        </div>
      </div>
    </>
  )
}
export default DailyModal;

