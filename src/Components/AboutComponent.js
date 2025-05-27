import React, { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const AboutComponent = () => (
    <div className="about-sec overflow-hidden space" id="about-sec">
      <div className="container align-item-center">
        <div className="row">
          <div className="col-xl-6 d-done-mbl">
            <div className="img-box3">
              <div className="img3 wow fadeInUp">
                <img src="assets/img/about/about-1.jpeg" data-aos="fade-down" alt="About"/>
              </div>
              <div className="img4 wow fadeInRight" data-aos="fade-right">
                <img src="assets/img/about/about-2.jpeg" alt="About"/>
              </div>
              <div className="th-experience style2">
                <h2 className="experience-year"><span className="counter-number">25</span>+</h2>
                <p className="experience-text">Years Experience.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xl-5 ms-xl-4 wow fadeInUp">
              <div className="title-area mb-40">
                <span className="sub-title style1">About Us</span>
                <h2 className="sec-title">Top quality and results guaranteed</h2>
                <p className="mb-0">At Star Pools, we’re passionate about transforming backyards into beautiful,
                  functional oases. As a veteran-owned and operated company, we take pride in serving the Carolinas with
                  unmatched expertise in pool design, construction, and renovation. </p> <br/>
                <p className="mb-0">With years of experience in creating custom pools, high-end finishes like Pebble Tec
                  plaster, and state-of-the-art leak detection and repairs, we specialize in delivering quality results
                  that stand the test of time. Whether you’re building your dream pool from scratch, renovating an
                  existing one, or upgrading with the latest technologies, we’re committed to excellence at every
                  step.</p>
              </div>
              {/*<div className="btn-group mt-40">
                            <Link to="about-us" className="th-btn radius-none">About Us</Link>
                        </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default AboutComponent;
