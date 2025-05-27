import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from "./MobileMenu";

const Header = ({ onToggleMenu }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            <header className="th-header header-layout3 header-absolute onepage-nav">
                <div className="header-top">
                    <div className="container th-container">
                        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
                            <div className="col-auto d-none d-lg-block">
                                <div className="header-links">
                                    <ul>
                                        <li>
                                            <i className="far fa-phone" aria-hidden="true"></i>
                                            <a href="tel:+18436058966">(843) 605-8966</a>
                                        </li>

                                        <li>
                                            <i className="fa-regular fa-messages"></i>
                                            <a href="mailto:starpools85@gmail.com">starpools85@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                   {/*         <div className="col-auto">
                                <div className="social-links">
                                    <span className="social-title">Follow Us On:</span>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.skype.com/" target="_blank" rel="noreferrer">
                                        <i className="fa-brands fa-skype"></i>
                                    </a>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>

                {/* Main Menu */}
                <div className="sticky-wrapper">
                    <div className="menu-area">
                        <div className="container th-container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <Link to="/">
                                            <img  style={{height:'65px'}} className="img-fluid"
                                                  src="assets/img/logo-client.png"
                                                  alt="Poolax" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto me-lg-auto">
                                    <nav className="main-menu d-none d-lg-block">
                                        <ul>
                                            {/* <li className="menu-item-has-children">
                                                <a href="index.html">Home</a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Multipage</a>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="index.html">Home One</a>
                                                            </li>
                                                            <li>
                                                                <a href="index-2.html">Home Two</a>
                                                            </li>
                                                            <li>
                                                                <a href="index-3.html">Home Three</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">Onepage</a>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <a href="index-onepage.html">Home One Onepage</a>
                                                            </li>
                                                            <li>
                                                                <a href="index-2-onepage.html">Home Two Onepage</a>
                                                            </li>
                                                            <li>
                                                                <a href="index-3-onepage.html">Home Three Onepage</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/About-Us">About Us</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Services</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">Pebble Tec Plaster</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Concrete Pools</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Fiberglass Pools</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Leak & Repair</a>
                                                    </li>

                                                </ul>
                                            </li>

                                            {/* <li>
                                                        <a href="#service-sec">Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="#Portfolio-sec">gallery</a>
                                                    </li>
                                                    <li>
                                                        <a href="#blog-sec">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="#contact-sec">Contact Us</a>
                                                    </li> */}
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-auto">
                                    <div className="header-button">
                                        <Link to="/About-Us" className="request-quote">
                                            Request a quote
                                        </Link>
                                        <button
                                            className="icon-btn th-menu-toggle d-inline-block d-lg-none"
                                            aria-label="Toggle Menu"
                                            onClick={toggleMobileMenu}
                                        >
                                            <i className="far fa-bars"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {isMobileMenuOpen && (
                <>
                    <div className="th-menu-wrapper " onClick={toggleMobileMenu}>
                        <div className="th-menu-area" onClick={(e) => e.stopPropagation()}>
                            <div className="mobile-logo">
                                <a href="index.html"><img src="assets/img/logo-white.svg" alt="Poolax"/></a>
                                <div className="close-menu">
                                    <button className="th-menu-toggle" onClick={toggleMobileMenu}>
                                        <i className="fal fa-times" ></i>
                                    </button>
                                </div>
                            </div>
                            <div className="th-mobile-menu">
                                <ul>
                                    <li className="menu-item-has-children th-item-hth-children">
                                        <a href="index.html">Home<span className="th-mean-expand"></span></a>
                                        <ul className="sub-menu th-submenu">
                                            <li className="menu-item-has-children th-item-hth-children">
                                                <a href="#">Onepage<span className="th-mean-expand"></span><span
                                                    className="th-mean-expand"></span></a>
                                                <ul className="sub-menu th-submenu">
                                                    <li><a href="index-onepage.html">Home One Onepage</a></li>
                                                    <li><a href="index-2-onepage.html">Home Two Onepage</a></li>
                                                    <li><a href="index-3-onepage.html">Home Three Onepage</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html">About us</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
                        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                            <button className="menu-close" onClick={toggleMobileMenu}>
                                <i className="fas fa-times"></i>
                            </button>
                            <div className="menu-logo">
                                <img src="assets/img/logo-client.png" alt="Poolax" style={{height: '65px'}}/>
                            </div>
                            <hr/>
                            <ul className="mobile-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/About-Us">About Us</Link></li>
                                <li>
                                    <span>Services</span>
                                    <ul className="submenu">
                                        <li><a href="#">Pebble Tec Plaster</a></li>
                                        <li><a href="#">Concrete Pools</a></li>
                                        <li><a href="#">Fiberglass Pools</a></li>
                                        <li><a href="#">Leak & Repair</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Pages</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><Link to="/Contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </>
            )}

        </>
    );
};

export default Header;
