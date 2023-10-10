import React from "react";
import HeadModal from "./HeadModal";
import FooterModal from "./FooterModal";
import "../Modal/ScheduleModal.css";
import "../Modal/DailyModal.css";

const WeeklyModal = () => {
  return (
    <>
      <div className="modal-body">
        <div className="card mt-4 modalcard">
          <HeadModal />
          <div className=" row">
            <div className="col-md-12 m-3 d-flex gap-5 dailyrecur">
              <span>Recur every :</span>
              <div className="col-md-1"><button className="form-control w-auto">01</button></div>
            </div>
          </div>
          <div className="row dailyrecur m-2">
            <div className="col-md-12"><p>Weeks on :</p></div>
            <div className="col-md-3"><input type="checkbox" />Sunday</div>
            <div className="col-md-3"><input type="checkbox" />Monday</div>
            <div className="col-md-3"><input type="checkbox" />Teusday</div>
            <div className="col-md-3"><input type="checkbox" />Wednesday</div>
            <div className="col-md-3"><input type="checkbox" />Thursday</div>
            <div className="col-md-3"><input type="checkbox" />Friday</div>
            <div className="col-md-3"><input type="checkbox" />Saturday</div>
          </div>
          <FooterModal />
        </div>
      </div>
    </>
  )
}
export default WeeklyModal;

