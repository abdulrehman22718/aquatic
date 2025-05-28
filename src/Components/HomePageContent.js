import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesSlider from "./ServicesSlider";
import FeatureCircle from "./FeatureCircle";
import CounterBox from "./CounterBox";
import TeamArea from './TeamArea';
import ProjectSection from './ProjectSection';
import TestimonialSection from './Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from 'react-router-dom';
import AboutComponent from "./AboutComponent";


const HomePageContent = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
        {/* SLIDER */}
        <div className="th-hero-wrapper hero-1">
            <div className="hero-slider-1 th-carousel" id="heroSlide1" data-slide-show="1" data-md-slide-show="1"
                 data-fade="true">
                <div className="th-hero-slide">
                    <div className="th-hero-bg" style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://static.wixstatic.com/media/25a483_c66eef3d71f2467b9a31567952838a85~mv2.webp/v1/fill/w_1350,h_495,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/25a483_c66eef3d71f2467b9a31567952838a85~mv2.webp)',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '100vh' // or whatever height you want
                    }}>

                    </div>

                    <div className="container space-top">
                        <div className="hero-style1">
                            <span className="hero-subtitle" data-ani="slideindown" data-ani-delay="0.7s" style={{
                                backgroundColor: 'white',
                                paddingLeft: '10px',
                            }}>Excellence in</span>
                            <h1 className="hero-title pt-2" data-ani="slideindown" data-ani-delay="0.4s">Design, Build, and Renovation</h1>
                            <p className="hero-text" data-ani="slideinup" data-ani-delay="0.1s">From custom builds to expert renovations, we specialize in high-end pools and premium finishes. Refresh, relax, and rejuvenate in style.</p>
                            <div className="btn-group" data-ani="slideinup" data-ani-delay="0.5s">
                                <Link to="/" className="th-btn style4">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/* FORM */
    }
    {/*
        <div className="booking-section" data-pos-for=".service-sec" data-sec-pos="bottom-half">
          <div className="container">
            <form action="#" method="POST" className="booking-form ajax-contact wow fadeInUp">
              <div className="input-wrap">
                <h3 className="sec-title mb-10">Book An Appointment</h3>
                <div className="row">
                  <div className="form-group col-lg-4 col-sm-6">
                    <input type="text" className="form-control" name="name" id="name4" placeholder="First Name" />
                    <i className="fa-light fa-user"></i>
                  </div>
                  <div className="form-group col-lg-4 col-sm-6">
                    <input type="text" className="form-control" name="name" id="name2" placeholder="Last Name" />
                    <i className="fa-light fa-user"></i>
                  </div>
                  <div className="form-group col-lg-4 col-sm-6">
                    <input type="text" placeholder="Your Email" className="form-control" />
                    <i className="fa-light fa-envelope"></i>
                  </div>
                  <div className="form-group col-lg-4 col-sm-6">
                    <input type="number" className="form-control" name="phone" id="phone" placeholder="Phone Number" />
                    <i className="fa-regular fa-phone"></i>
                  </div>
                  <div className="form-group col-lg-4 col-sm-6">
                    <select name="service" id="service" className="form-select nice-select">
                      <option value="" disabled selected hidden>Select Service</option>
                      <option value="Equipment Install">Equipment Install</option>
                      <option value="Commercial Pool">Commercial Pool</option>
                      <option value="Water Analysis">Water Analysis</option>
                      <option value="Pool Maintenance">Pool Maintenance</option>
                      <option value="Drain & Clean">Drain & Clean</option>
                      <option value="Pool Inspections">Pool Inspectionsn</option>
                    </select>
                  </div>
                  <div className="form-btn col-lg-4 col-sm-6">
                    <button type="button" className="th-btn fw-btn radius-none">Appointment Now</button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </div>
            </form>
          </div>
        </div>
*/
    }

    {/* SERVICES */
    }
    <ServicesSlider/>

    {/* ABOUT AREA */}

    <AboutComponent/>

    {/* CTA AREA */
    }
    <section
        className="cta-area"
        data-bg-src="assets/img/bg/cta_bg_1.jpg"
        style={{backgroundImage: "url('assets/img/bg/cta_bg_1.jpg')"}}
    >
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-7 col-lg-6 mb-5 mb-lg-0">
                    <div className="title-area mb-0 text-center text-lg-start">
                        <span className="sub-title style1">Feel Free to Contact Us</span>
                        <h2 className="sec-title text-white">We will beat any price in town!</h2>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                    <div className="btn-group justify-content-lg-end justify-content-center">
                        <Link to="/" className="th-btn th-border">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* CHART AREA */}
    <section className="space-top overflow-hidden space-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="title-area text-center">
                        <span className="sub-title">Why choose us</span>
                        <h2 className="sec-title">Pioneering the Future of Pool Design &amp; Renovation</h2>
                    </div>
                </div>
            </div>
            <div className="row gy-4 justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <FeatureCircle
                        percent={85}
                        title="Customized Solutions"
                        text="Every pool is unique, and we design each one to fit your space, style, and needs. Whether you’re building from scratch or renovating, our solutions are tailored to bring your vision to life."
                    />
                </div>
                <div className="col-md-6 col-lg-4">
                    <FeatureCircle
                        percent={95}
                        title="Experienced Team"
                        text="Our team of certified technicians and designers has years of experience in pool construction and renovations. We use top-tier materials and innovative techniques to ensure your pool is built to last."
                    />
                </div>
                <div className="col-md-6 col-lg-4">
                    <FeatureCircle
                        percent={90}
                        title="Prompt and Reliable"
                        text="Your time is valuable, and we respect that. From initial consultation to final installation, we are committed to being punctual, professional, and reliable throughout the entire process."
                    />
                </div>
            </div>
        </div>
    </section>

    {/* COUNTER SECTION */
    }
    <CounterBox/>

    {/* TEAM AREA */
    }
    {/*
      <TeamArea />
*/
    }

    {/* PROJECT AREA */
    }
    <ProjectSection/>

    {/* TESTIMONIALS */
    }
    <TestimonialSection/>


    <div className="contact-info-area" data-pos-for=".footer-layout3" data-sec-pos="bottom-half">
        <div className="container">
            <div className="row gx-0 align-items-center">
                <div className="col-xl-3">
                    <div className="contact-media style1">
                        <div className="contact-logo">
                            <img src="assets/img/logo-client.png" style={{height: '75px'}} alt="icon"/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9">
                    <div className="contact-media-wrapp">
                        <div className="contact-media bg-theme">
                            <div className="contact-media_icon">
                                <img src="assets/img/icon/contact_1_1.svg" alt="icon"/>
                            </div>
                            <div className="contact-media_content">
                                <span className="contact-media_subtitle">Call Us For Pool Services</span>
                                <h3 className="contact-media_title"><a href="tel:+8436058966">+(843) 605-8966</a></h3>
                            </div>
                        </div>
                        <div className="contact-media">
                            <div className="contact-media_icon">
                                <img src="assets/img/icon/contact_1_2.svg" alt="icon"/>
                            </div>
                            <div className="contact-media_content">
                                <p className="contact-media_subtitle">Email Us For Any Info.</p>
                                <a href="mailto:starpools85@gmail.com"
                                   className="contact-media_title">starpools85@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</>
)
    ;
};

export default HomePageContent;
