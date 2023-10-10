import React from "react";
import preview from "../Assets/images/preview.gif";

const Loading =()=>{

 return(
    <>
    <div className="d-flex justify-content-center">
     <img src={preview} alt="images" width="200px" height="200px" />
     </div>
    </>
 )

}
export default Loading;