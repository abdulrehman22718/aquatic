import React from 'react';

const MobileMenu = ({ onCloseMenu }) => {
    return (
        <>
            <div className="sidemenu-wrapper d-none d-lg-block ">
                <div className="sidemenu-content bg-black2">
                    <button className="closeButton sideMenuCls" onClick={onCloseMenu}>
                        <i className="far fa-times"></i>
                    </button>
                    <div className="widget footer-widget">
                        <div className="th-widget-about">
                            <div className="about-logo">
                                <a href="index.html"><img src="assets/img/logo-white.svg" alt="Poolax" /></a>
                            </div>
                            <p className="about-text">We provide specialized winterization services to safeguard your pool during the off-season, and when spring arrives, we handle the thorough opening process.</p>

                            <div className="th-social  footer-social">
                                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.behance.net/"><i className="fa-brands fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="widget footer-widget">
                        <h3 className="widget_title">Recent Posts</h3>
                        <div className="recent-post-wrap">
                            <div className="recent-post">
                                <div className="media-img">
                                    <a href="blog-details.html"><img src="assets/img/blog/recent-post-2-1.jpg" alt="Blog Image" /></a>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Installation of new Equipment</a></h4>
                                    <div className="recent-post-meta">
                                        <a href="blog.html"><i className="fal fa-calendar-days"></i>12 Oct, 2023</a>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="media-img">
                                    <a href="blog-details.html"><img src="assets/img/blog/recent-post-2-2.jpg" alt="Blog Image" /></a>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Installation of new Equipment</a></h4>
                                    <div className="recent-post-meta">
                                        <a href="blog.html"><i className="fal fa-calendar-days"></i>22 Oct, 2023</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget footer-widget">
                        <h4 className="widget_title">Newsletter</h4>
                        <div className="newsletter-widget">
                            <p className="md-10">Sign Up to get updates & news about us . Get Latest Deals from Walker's Inbox to our mail address.</p>
                            <div className="footer-search-contact mt-25">
                                <form>
                                    <input className="form-control" type="email" placeholder="Enter your email" />
                                </form>
                                <div className="footer-btn mt-10">
                                    <button type="submit" className="th-btn style4 fw-btn">Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup-search-box d-none d-lg-block">
                <button className="searchClose"><i className="fal fa-times"></i></button>
                <form action="#">
                    <input type="text" placeholder="What are you looking for?" />
                    <button type="submit"><i className="fal fa-search"></i></button>
                </form>
            </div>
        </>
    );
};

export default MobileMenu;