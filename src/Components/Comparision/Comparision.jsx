import React from "react";
import './Comparision.css';

function Comparision(){
    return(<>
    <div className="image-container">
      <div className="image-wrapper">
        <img src="../../assets/placeholder_img.png" alt="Original" className="comparison-image" />
        <p className="image-description">Original Image<br />Image Specs</p>
      </div>

      <div className="image-wrapper">
        <img src="/path/to/enhanced-image.jpg" alt="Enhanced" className="comparison-image" />
        <p className="image-description">Enhanced Image<br />Image Specs</p>
      </div>
    </div>
    </>)
}
export default Comparision;