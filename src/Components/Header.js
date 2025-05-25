import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onToggleMenu }) => {
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
                                                    <i className="far fa-phone"></i>
                                                    <a href="tel:+46825476243">(+468) 254 76243</a>
                                                </li>
                                                <li>
                                                    <i className="fa-regular fa-messages"></i>
                                                    <a href="mailto:info@poolax.com">info@poolax.com</a>
                                                </li>
                                                <li>
                                                    <i className="fa-light fa-clock"></i>Work Time: Mon - Fri 09AM - 6PM
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-auto">
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
                                    </div>
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
                                                    <img src="assets/img/logo3.svg" alt="Poolax" />
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
                                                <button type="button" className="icon-btn searchBoxToggler">
                                                    <i className="far fa-search"></i>
                                                </button>
                                                <a
                                                    href="#"
                                                    className="icon-btn sideMenuToggler d-none d-lg-block"
                                                    aria-label="Open Side Menu"
                                                >
                                                    <i className="far fa-bars"></i>
                                                </a>
                                                 <Link to="/About-Us" className="request-quote">
                                                    Request a quote
                                                </Link>
                                                <button
                                                    className="icon-btn th-menu-toggle d-inline-block d-lg-none"
                                                    aria-label="Toggle Menu"
                                                    onClick={onToggleMenu}
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

        </>
    );
};

export default Header;
