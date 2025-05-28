import React from "react";
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className="space" id="contact-sec">
            <div className="container space">
                <div className="row gy-40">
                    <div className="col-xl-7 col-xxl-6">
                        <div className="title-area mb-10">
                            <h2 className="sec-title">Contact Information</h2>
                            <p className="mb-0">
                                Star Pools is a veteran-owned and operated company, proudly serving the Carolinas. We
                                specialize in renovations, new builds, and high-end Pebble Tec plaster finishes, and
                                State Of the art leak detections. Whether you’re upgrading with Pebble Tec or starting a
                                new build from the ground up, or making renovations you can trust our years of
                                experience and commitment to excellence.
                            </p>
                            <h4 className="mt-50">
                                Call or text us today to bring your vision to life
                            </h4>
                        </div>
                        <div className="contact-info-wrap">

                            <div className="contact-info">
                                <div className="contact-info_icon">
                                    <i className="fa-light fa-phone"></i>
                                </div>
                                <div className="media-body">
                                    <h3 className="box-title">Phone Number</h3>
                                    <span className="contact-info_text">
                                        <a href="tel:+1843-605-8966"> 843-605-8966</a>
                                    </span>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info_icon">
                                    <i className="fa-light fa-envelope"></i>
                                </div>
                                <div className="media-body">
                                    <h3 className="box-title">Email Address</h3>
                                    <span className="contact-info_text">
                                        <a href="mailto:starpools85@gmail.com">starpools85@gmail.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*<h5 className="mt-35">Follow us today!</h5>
                        <p>Crystal clear pools start with a click </p>
                        <div className="th-social  footer-social style2">
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.behance.net/"><i className="fa-brands fa-behance"></i></a>
                        </div>*/}
                    </div>
                    <div className="col-xl-5 col-xxl-5 offset-xxl-1">
                        <div className="contact-form-wrapper">
                            <form action="mail.php" method="POST" className="contact-form">
                                <h3 className="form-title text-center">Get In Touch</h3>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <i className="fa-sharp fa-light fa-user"></i>
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group col-12">
                                        <i className="fa-sharp fa-regular fa-envelope"></i>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group col-12">
                                        <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number" />
                                        <i className="fal fa-phone"></i>
                                    </div>
                                    <div className="form-group col-12">
                                        <i className="fal fa-comment"></i>
                                        <textarea name="message" id="message" cols="30" rows="3" className="form-control" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-btn col-12">
                                        <button type="button" className="th-btn fw-btn">Send Messages Now</button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
