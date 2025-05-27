import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer
          className="footer-wrapper footer-layout3"
          style={{ backgroundImage: "url('assets/img/bg/footer_bg_3.jpg')" }}
      >
        <div className="widget-area" style={{paddingBottom: '0px'}}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-4">
                <div className="widget footer-widget">
                  <h3 className="widget_title">About Company</h3>
                  <div className="th-widget-about">
                    <p className="about-text">
                      Star Pools is a veteran-owned and operated company, proudly serving the Carolinas.
                      We specialize in renovations, new builds, and high-end Pebble Tec plaster finishes, and State Of the art leak detections.
                    </p>
                    {/*         <div className="th-social footer-social">
                    <a target="_blank" href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a target="_blank" href="https://www.twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" href="https://www.behance.net/">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </div>*/}
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-2">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      {/* <li>
                      <a href="gallery.html">gallery</a>
                    </li>
                    <li>
                      <a href="testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Our Mission</h3>
                  <p>Our mission is simple: to provide our clients with the best pool experience possible. we focus on quality craftsmanship, attention to detail, and customer satisfaction.</p>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <p className="copyright-text text-white text-center">
                  © 2025
                  <a href="https://www.starpoolsmb.com/" style={{fontWeight:'bold', color:'wheat'}}> Star Pools MB </a>. All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Top */}
        <div className="scroll-top">
          <svg
              className="progress-circle svg-content"
              width="100%"
              height="100%"
              viewBox="-1 -1 102 102"
          >
            <path
                d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                style={{
                  transition: "stroke-dashoffset 10ms linear 0s",
                  strokeDasharray: "307.919, 307.919",
                  strokeDashoffset: 307.919,
                }}
            ></path>
          </svg>
        </div>
      </footer >
  );
};

export default Footer;
