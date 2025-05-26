import React, { useState, useEffect } from 'react';
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
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';



const HomePageContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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

  const slides = [
    {
      subtitle: "Clean Pools, Happy Swimmers",
      title1: "Swim in Serenity,",
      title2: "Thanks to Us",
      text: "Understand the range of services they provide, including cleaning, maintenance, repairs, and special treatments.",
      img: "assets/img/hero/hero_bg_3_1.png",
    },
    {
      subtitle: "Refresh, Relax, Rejuvenate",
      title1: "Pool Perfection",
      title2: "Starts Here",
      text: 'Swimming Pool Cleaning" as the main name for your business, you can consider adding a descriptive context',
      img: "assets/img/hero/hero_bg_3_2.png",
    },
    {
      subtitle: "Quality Service, Clear Results",
      title1: "Crystal Cove",
      title2: "Pool Services",
      text: "It should complement your main business name and help potential customers understand what sets your services",
      img: "assets/img/hero/hero_bg_3_3.png",
    },
  ];
  return (
      <>
        {/* SLIDER */}
        <div className="th-hero-wrapper hero-3" style={{ backgroundColor: '#0181F5', height: '80vh' }}>
          <Slider {...settings}>
            {slides.map((slide, idx) => (
                <div className="th-hero-slide" key={idx}>
                  <div className="th-hero-bg">
                    <img src="/assets/img/hero/hero_overlay_3_1.png" alt="Overlay" />
                  </div>
                  <div className="container">
                    <div className="row align-items-end">
                      <div className="col-lg-7">
                        <div className="hero-style3">
                          <span className="hero-subtitle">{slide.subtitle}</span>
                          <h1 className="hero-title mb-0">{slide.title1}</h1>
                          <h1 className="hero-title">{slide.title2}</h1>
                          <p className="hero-text">{slide.text}</p>
                          <div className="btn-group justify-content-center justify-content-lg-start">
                            <Link to="/about-us" className="th-btn style4 radius-none">
                              About Us
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="th-hero-img">
                          <img src={slide.img} alt="Hero" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </Slider>

          {/* Animation bubbles if needed */}
          <div className="animation-bubble">
            {[...Array(10)].map((_, i) => (
                <div className={`bubble-${i + 1}`} key={i}></div>
            ))}
          </div>
        </div>

        {/* FORM */}
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
*/}

        {/* SERVICES */}
        <ServicesSlider />

        {/* ABOUT AREA */}

        <div className="about-sec overflow-hidden space" id="about-sec">
          <div className="container align-item-center">
            <div className="row">
              <div className="col-xl-6">
                <div className="img-box3">
                  <div className="img3 wow fadeInUp">
                    <img src="assets/img/normal/about_3_1.jpg" data-aos="fade-down" alt="About" />
                  </div>
                  <div className="img4 wow fadeInRight" data-aos="fade-right">
                    <img src="assets/img/normal/about_3_2.jpg" alt="About" />
                  </div>
                  <div className="th-experience style2">
                    <h2 className="experience-year"><span className="counter-number">25</span>+</h2>
                    <p className="experience-text">Years Experience Of Pool Service.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="ps-xl-5 ms-xl-4 wow fadeInUp">
                  <div className="title-area mb-40">
                    <span className="sub-title style1">About Us Our Comoany</span>
                    <h2 className="sec-title">A Legacy of Excellence In Pool Service</h2>
                    <p className="mb-0">Our team consists of certified technician with a wealth of experience in pool maintenance and servicing. We stay updated on the latest industry trends and best practices.</p>
                  </div>
                  <div className="achive-about-wrap">
                    <div className="achive-about">
                      <div className="achive-about_icon">
                        <img src="assets/img/icon/about_1_1.svg" alt="icon" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Our Mission</h3>
                        <p className="achive-about_text">Your time is valuable, which is why we are committed.</p>
                      </div>
                    </div>
                    <div className="achive-about">
                      <div className="achive-about_icon">
                        <img src="assets/img/icon/about_1_2.svg" alt="icon" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Our Vision</h3>
                        <p className="achive-about_text">We understand that every pool is unique. That's why.</p>
                      </div>
                    </div>
                  </div>
                  <div className="btn-group mt-40">
                    <Link to="about-us" className="th-btn radius-none">About Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA AREA */}
        <section
            className="cta-area"
            data-bg-src="assets/img/bg/cta_bg_1.jpg"
            style={{ backgroundImage: "url('assets/img/bg/cta_bg_1.jpg')" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 mb-5 mb-lg-0">
                <div className="title-area mb-0 text-center text-lg-start">
                  <span className="sub-title style1">Feel Free to Contact Use</span>
                  <h2 className="sec-title text-white">Get Premium Pool Services From With Us!</h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="btn-group justify-content-lg-end justify-content-center">
                  {/*<Link to="/about-us" className="th-btn style4">Get Our Services</Link>*/}
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
                  <h2 className="sec-title">Pioneering the Future of Pool Maintenance</h2>
                </div>
              </div>
            </div>
            <div className="row gy-4 justify-content-center">
              <div className="col-md-6 col-lg-4">
                <FeatureCircle
                    percent={85}
                    title="Customized Solutions"
                    text="We understand that every pool is unique. That's why we offer personalized service."
                />
              </div>
              <div className="col-md-6 col-lg-4">
                <FeatureCircle
                    percent={95}
                    title="Experienced Team"
                    text="Our team consists of certified technicians with a wealth of experience in pool."
                />
              </div>
              <div className="col-md-6 col-lg-4">
                <FeatureCircle
                    percent={90}
                    title="Prompt and Reliable"
                    text="Your time is valuable, which is why we are committed to being punctual and reliable."
                />
              </div>
            </div>
          </div>
        </section>

        {/* COUNTER SECTION */}
        <CounterBox />

        {/* TEAM AREA */}
        {/*
      <TeamArea />
*/}

        {/* PROJECT AREA */}
        <ProjectSection />

        {/* TESTIMONIALS */}
        <TestimonialSection />





        <div className="contact-info-area" data-pos-for=".footer-layout3" data-sec-pos="bottom-half">
          <div className="container">
            <div className="row gx-0 align-items-center">
              <div className="col-xl-3">
                <div className="contact-media style1">
                  <div className="contact-logo">
                    <img src="assets/img/logo-client.png" style={{height:'75px'}} alt="icon" />
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="contact-media-wrapp">
                  <div className="contact-media bg-theme">
                    <div className="contact-media_icon">
                      <img src="assets/img/icon/contact_1_1.svg" alt="icon" />
                    </div>
                    <div className="contact-media_content">
                      <span className="contact-media_subtitle">Call Us For Pool Services</span>
                      <h3 className="contact-media_title"><a href="tel:+8436058966">+(843) 605-8966</a></h3>
                    </div>
                  </div>
                  <div className="contact-media">
                    <div className="contact-media_icon">
                      <img src="assets/img/icon/contact_1_2.svg" alt="icon" />
                    </div>
                    <div className="contact-media_content">
                      <p className="contact-media_subtitle">Email Us For Any Info.</p>
                      <a href="mailto:info@starpoolsmb.com" className="contact-media_title">info@starpoolsmb.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
  );
};

export default HomePageContent;
