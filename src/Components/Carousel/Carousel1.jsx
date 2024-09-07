import React from "react";
import './Carousel1.css';
import placeholderImg from './placeholder_img.png';

function Carousel1(){
    return(
    <>
    <div id="main">
        <div className="slider">
            <div className="slidertrack">
                <div className="slide">
                    <img src={placeholderImg}/>
                </div>
                <div className="slide">
                    <img src={placeholderImg}/>
                </div>
                <div className="slide">
                    <img src={placeholderImg}/>
                </div>
                <div className="slide">
                    <img src={placeholderImg}/>
                </div>
                <div className="slide">
                    <img src={placeholderImg}/>
                </div>
                {/*Second track*/}
                <div className="slide">
                    <img src={placeholderImg}/>
                </div>
                <div className="slide">
                    <img src={placeholderImg}/>
                </div>
                <div className="slide">
                    <img src={placeholderImg}/>
                </div>
                <div className="slide">
                    <img src={placeholderImg}/>
                </div>
                <div className="slide">
                    <img src={placeholderImg}/>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Carousel1;