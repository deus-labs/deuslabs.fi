import React, { Component } from "react";

class SliderOne extends Component {
  render() {
    return (
        <div className="slider-activation">
            {/* Start Single Slide */}
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1" data-black-overlay="6">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="inner">
                                <h1 className="title theme-gradient">Building <br /> the <h1 className="title theme-gradient custom-title">decentralized</h1> future. </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderOne;