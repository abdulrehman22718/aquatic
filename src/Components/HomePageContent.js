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
      <div className="th-hero-wrapper hero-3" style={{ backgroundColor: '#0181F5' }}>
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
                          Discover More
                        </Link>
                        <Link to="/about-us" className="th-btn th-border radius-none">
                          Our Services
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
                  <Link to="about-us" className="th-btn radius-none">More About Us</Link>
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
                <Link to="/about-us" className="th-btn style4">Get Our Services</Link>
                <Link to="/" className="th-btn th-border">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CHART AREA */}
      <section className="space-top overflow-hidden">
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
          <div className="why-wrapper">
            <div className="row">
              <div className="col-xl-6">
                <div className="title-area mb-35 text-center text-lg-start">
                  <h3 className="sec-title">We are a friendly and professional pool services & renovation company</h3>
                  <p className="mt-n2">Our certified technicians perform routine pool cleaning and skimming. This
                    includes
                    removing debris, leaves, and any foreign matter from the pool surface and skimmers to ensure
                    proper water flow.</p>
                </div>
                <p className="mt-n2 mb-30"> We begin by understanding your specific pool needs and gathering essential
                  information about your pool's size.</p>
                <div className="info-media_wrapp mb-35">
                  <div className="info-media style2">
                    <div className="info-media_icon">
                      <i className="fa-solid fa-check-double"></i>
                    </div>
                    <div className="media-body">
                      <h3 className="h6 info-media_title">Personalized Service</h3>
                    </div>
                  </div>
                  <div className="info-media style2">
                    <div className="info-media_icon">
                      <i className="fa-solid fa-check-double"></i>
                    </div>
                    <div className="media-body">
                      <h3 className="h6 info-media_title">Prompt and Reliable</h3>
                    </div>
                  </div>
                </div>
                <div className="checklist style4">
                  <ul>
                    <li><i className="fa-regular fa-arrow-right"></i>Regular Cleaning and Skimming</li>
                    <li><i className="fa-regular fa-arrow-right"></i>Brushing and Vacuuming</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="img-box4">
                  <div className="img1">
                    <img src="assets/img/normal/about_4_1.jpg" alt="About" />
                  </div>
                  <div className="img2">
                    <img src="assets/img/normal/about_4_2.jpg" alt="About" />
                  </div>
                  <div className="why-video">
                    <a href="https://www.youtube.com/" target='_blank' className="play-btn popup-video"><i className="fa-light fa-play"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTER SECTION */}
      <CounterBox />

      {/* TEAM AREA */}
      <TeamArea />

      {/* PRICE AREA */}
      <section className="space ">
        <div className="container">
          <div className="price-title-wrapper">
            <div className="title-area text-center">
              <span className="sub-title">Our Price Plan</span>
              <h2 className="sec-title">Choose The Right Plan Which You Need <span className="text-theme">!</span></h2>
            </div>
          </div>
          <div className="row gy-5 justify-content-center">

            <div className="col-xl-4 col-md-6">
              <div className="price-card ">
                <div className="price-card-wrapp">
                  <div className="price-card_content">
                    <h4 className="price-card_price">
                      <span className="currency">$</span>
                      120 <span className="duration">Monthly</span>
                    </h4>
                  </div>
                  <h3 className="price-card_title box-title">
                    Residential Plan </h3>
                </div>
                <div className="price-border"></div>
                <div className="available-list">
                  <ul>
                    <li>Installation of new equipment</li>
                    <li>Repairs for all pool</li>
                    <li>Water Quality Guarantee</li>
                    <li>Chemically balance the water</li>
                    <li>Lake Lines Underground</li>
                    <li className="unavailable">Automatic Cleaners</li>
                    <li className="unavailable">Heater and Venting</li>
                  </ul>
                </div>
                <div className="price-btn mt-35">
                  <Link to="/about-us" className="th-btn border radius-none">Choose Plan</Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="price-card active">
                <div className="price-card-wrapp">
                  <div className="price-card_content">
                    <h4 className="price-card_price">
                      <span className="currency">$</span>
                      160 <span className="duration">Monthly</span>
                    </h4>
                  </div>
                  <h3 className="price-card_title box-title">
                    Commercial Plan </h3>
                </div>
                <div className="price-border"></div>
                <div className="available-list">
                  <ul>
                    <li>Installation of new equipment</li>
                    <li>Repairs for all pool</li>
                    <li>Water Quality Guarantee</li>
                    <li>Chemically balance the water</li>
                    <li>Lake Lines Underground</li>
                    <li>Automatic Cleaners</li>
                    <li className="unavailable">Heater and Venting</li>
                  </ul>
                </div>
                <div className="price-btn mt-35">
                  <Link to="/about-us" className="th-btn border radius-none">Choose Plan</Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="price-card ">
                <div className="price-card-wrapp">
                  <div className="price-card_content">
                    <h4 className="price-card_price">
                      <span className="currency">$</span>
                      180 <span className="duration">Monthly</span>
                    </h4>
                  </div>
                  <h3 className="price-card_title box-title">
                    Emergency Plan </h3>
                </div>
                <div className="price-border"></div>
                <div className="available-list">
                  <ul>
                    <li>Installation of new equipment</li>
                    <li>Repairs for all pool</li>
                    <li>Water Quality Guarantee</li>
                    <li>Chemically balance the water</li>
                    <li>Lake Lines Underground</li>
                    <li>Automatic Cleaners</li>
                    <li>Heater and Venting</li>
                  </ul>
                </div>
                <div className="price-btn mt-35">
                  <Link to="/about-us" className="th-btn border radius-none">Choose Plan</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT AREA */}
      <ProjectSection />

      {/* TESTIMONIALS */}
      <TestimonialSection />

      <div className="" data-pos-for=".blog-sec" data-sec-pos="bottom-half">
        <div className="container">
          <div className="newsletter-sec bg-theme">
            <div className="row gx-0 align-items-center">
              <div className="col-lg-6 col-xl-5">
                <div className="newsletter-wrapper">
                  <h4 className="h4 newsletter-title text-white mb-0">Sign Up to get updates & news about us.</h4>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7">
                <div className="newsletter-form-wrapper">
                  <form className="newsletter-form">
                    <input className="form-control " type="email" placeholder="Enter your Email" required="" />
                    <button type="button" className="th-btn style3">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <section
        className="blog-sec space overflow-hidden"
        id="blog-sec"
        style={{ backgroundImage: `url('assets/img/bg/blog_bg_1.jpg')`, marginTop: '-70px' }}
      >        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Blog Posts</span>
            <h2 className="sec-title">Our Latest News & Updates</h2>
          </div>
          <div className="row slider-shadow th-carousel" id="blogSlide3" data-slide-show="3" data-lg-slide-show="2" data-md-slide-show="1" data-sm-slide-show="1" data-arrows="true">
            <div className="col-md-6 col-xl-4">
              <div className="blog-grid wow fadeInLeft">
                <div className="blog-img global-img">
                  <img src="assets/img/blog/blog_3_1.jpg" alt="blog image" />
                  <div className="blog-wrapper">
                    <span className="blog-grid_date">12 Oct 2023</span>
                  </div>
                </div>
                <div className="blog-grid_content">
                  <div className="blog-meta">
                    <Link to="/about-us"><i className="fa-regular fa-user"></i>By Jonson</Link>
                    <Link to="/about-us"><i className="fa-regular fa-comments"></i>Comments (56)</Link>
                  </div>
                  <h3 className="box-title"><Link to="/about-us">How To Re-organize Your Home Swimming Pool</Link></h3>
                  <Link to="/about-us" className="th-btn border radius-none">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="blog-grid wow fadeInRight">
                <div className="blog-img global-img">
                  <img src="assets/img/blog/blog_3_2.jpg" alt="blog image" />
                  <div className="blog-wrapper">
                    <span className="blog-grid_date">24 oct 2023</span>
                  </div>
                </div>
                <div className="blog-grid_content">
                  <div className="blog-meta">
                    <Link to="/about-us"><i className="fa-regular fa-user"></i>By Jonson</Link>
                    <Link to="/about-us"><i className="fa-regular fa-comments"></i>Comments (70)</Link>
                  </div>
                  <h3 className="box-title"><a href="blog-details.html">How to Revamp Your Pool Area for a Stylish Makeover</a></h3>
                  <Link to="/about-us" className="th-btn border radius-none">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="blog-grid wow fadeInLeft">
                <div className="blog-img global-img">
                  <img src="assets/img/blog/blog_3_3.jpg" alt="blog image" />
                  <div className="blog-wrapper">
                    <span className="blog-grid_date">26 nov 2023</span>
                  </div>
                </div>
                <div className="blog-grid_content">
                  <div className="blog-meta">
                    <Link to="/about-us"><i className="fa-regular fa-user"></i>By Jonson</Link>
                    <Link to="/about-us"><i className="fa-regular fa-comments"></i>Comments (34)</Link>
                  </div>
                  <h3 className="box-title"><Link to="/about-us">The Science of Pool Chemistry Keeping Your Water</Link></h3>
                  <Link to="/about-us" className="th-btn border radius-none">Read More</Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


      <div className="contact-info-area" data-pos-for=".footer-layout3" data-sec-pos="bottom-half">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-xl-3">
              <div className="contact-media style1">
                <div className="contact-logo">
                  <img src="assets/img/logo.svg" alt="icon" />
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
                    <h3 className="contact-media_title"><a href="tel:+46825476243">+(468) 254 76243</a></h3>
                  </div>
                </div>
                <div className="contact-media">
                  <div className="contact-media_icon">
                    <img src="assets/img/icon/contact_1_2.svg" alt="icon" />
                  </div>
                  <div className="contact-media_content">
                    <p className="contact-media_subtitle">Email Us For Any Info.</p>
                    <a href="mailto:info@poolax.com" className="contact-media_title">info@poolax.com</a>
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
