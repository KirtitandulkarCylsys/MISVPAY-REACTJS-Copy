import React from "react";
import "../Modal/ScheduleModal.css";

const HeadModal = () => {
  return (
    <>
      <div className="row mt-2 rowfirst">
        <div className="col-md-4">
          <input className="form-control" type="text" placeholder="Today" />
        </div>
        <div className="col-md-4">
          <input className="form-control" type="text" placeholder="Monday" />
        </div>
      </div>
      <div className="row mt-2 rowfirst ">
        <div className="col-md-4">
          <label htmlFor><b>Date</b></label>
          <input className="form-control" type="date" />
        </div>
        <div className="col-md-4">
          <label htmlFor><b>Time</b></label>
          <input className="form-control" type="time" />
        </div>
      </div>
    </>
  )
}
export default HeadModal;

