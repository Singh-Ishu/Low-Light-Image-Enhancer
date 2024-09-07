import React from "react";
import Uploader from "../Components/Uploader/Uploader.jsx";
import Comparison from "../Components/Comparision/Comparision.jsx";
import './UploadImgPg.css';

function UploadImgPg() {
  return (
    <div className="main-container">
      <div className="upload-section">
        <Uploader />
      </div>
      <div className="comparison-section">
        <Comparison />
      </div>
    </div>
  );
}

export default UploadImgPg;
