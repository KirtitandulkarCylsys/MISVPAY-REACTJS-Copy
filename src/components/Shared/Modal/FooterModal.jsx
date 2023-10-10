import React from "react";
import "../Modal/ScheduleModal.css";

const FooterModal = () => {
  return (
    <>
      <div className="row m-3 mt-3">
        <div className="col-md-2">
          <button className="form-control">To</button>
        </div>
        <div className="col-md-10">
          <input className="form-control mail-inputbox " type="text" />
        </div>
        <div className="col-md-2 mt-3">
          <button className="form-control">Cc</button>
        </div>
        <div className="col-md-10 mt-3">
          <input className="form-control  mail-inputbox" type="text" />
        </div>
      </div>
      <div className="col-md-12 d-flex justify-content-center">
        <textarea className="form-control" placeholder="message" style={{ width: "95%" }} />
      </div>
      <div className=" col-md-12 d-flex mt-4 mb-4">
        <div className="col-md-8"></div>
        <div className="col-md-4">
          <button type="button" className="btn BgcolorOrange colorwhite m-1 closebuttons" data-bs-dismiss="modal">Discard</button>
          <button type="button" className="btn BgcolorOrange colorwhite m-1 closebuttons">Save</button>
        </div>
      </div>
    </>
  )
}
export default FooterModal;
