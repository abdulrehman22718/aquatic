import React from 'react';
import { Link } from 'react-router-dom';
import CounterSection from '../CounterBox';
const AboutUs = () => {
    return (
        <div className="space-bottom">
            <div className="breadcumb-wrapper "  style={{ backgroundImage: `url('assets/img/breadcumb/breadcumb-bg.jpg')` }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h2 className="breadcumb-title">About Us</h2>
                        <div className="breadcumb-menu-wrapper">
                            <ul className="breadcumb-menu">
                                <li><Link to="/">Home</Link></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="animation-bubble">
                    <div className="bubble-1"></div>
                    <div className="bubble-2"></div>
                    <div className="bubble-3"></div>
                    <div className="bubble-4"></div>
                    <div className="bubble-5"></div>
                    <div className="bubble-6"></div>
                    <div className="bubble-7"></div>
                    <div className="bubble-8"></div>
                    <div className="bubble-9"></div>
                    <div className="bubble-10"></div>
                </div>
            </div>
            <div className="about-sec overflow-hidden space" id="about-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 wow fadeInLeft">
                            <div className="img-box1">
                                <div className="img1">
                                    <img src="assets/img/normal/about_1.jpg" alt="About"/>
                                </div>
                                <div className="img2 global-img movingX">
                                    <img src="assets/img/normal/about_2.jpg" alt="About"/>
                                </div>
                                <div className="th-experience jump">
                                    <h3 className="experience-year"><span className="counter-number">25</span>+</h3>
                                    <p className="experience-text">Years Experience In Pool Service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="wow fadeInRight">
                                <div className="title-area mb-25">
                                    <span className="sub-title style1">About Us</span>
                                    <h2 className="sec-title mb-20">Simplify Pool Maintenance with Our Expert Services</h2>
                                    <blockquote className="about-blockquote">
                                        <p>Brand team building results after premium web-readiness value web enabled e-business
                                            engage web enabled strategic...</p>
                                    </blockquote>
                                    <p className="about-desc">we take pride in offering comprehensive pool cleaning and maintenance
                                        services
                                        to ensure your pool remains a pristine oasis for relaxation and enjoyment. Our team of
                                        certified technicians is dedicated.</p>
                                </div>
                                <div className="btn-group justify-content-start">
                                    <div className="checklist">
                                        <ul>
                                            <li>Regular Cleaning and Skimming</li>
                                            <li>Brushing and Vacuuming</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;