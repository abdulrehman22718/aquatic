import React from 'react';

const MobileMenu = ({ onCloseMenu }) => {
    return (
        <>
            <div className="th-menu-wrapper th-body-visible">
                <div className="th-menu-area" style={{visibility:'visible'}}>
                    <div className="mobile-logo">
                        <a href="index.html"><img src="assets/img/logo-white.svg " alt="Poolax"/></a>
                        <div className="close-menu">
                            <button className="th-menu-toggle"><i className="fal fa-times"></i></button>
                        </div>
                    </div>
                    <div className="th-mobile-menu">
                        <ul>
                            <li className="menu-item-has-children">
                                <a href="index.html">Home</a>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children">
                                        <a href="#">Multipage</a>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Home One </a></li>
                                            <li><a href="index-2.html">Home Two </a></li>
                                            <li><a href="index-3.html">Home Three </a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Onepage</a>
                                        <ul className="sub-menu">
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
                            <li className="menu-item-has-children">
                                <a href="#">Services</a>
                                <ul className="sub-menu">
                                    <li><a href="service.html">Service Page</a></li>
                                    <li><a href="service-details.html">Commercial Pool</a></li>
                                    <li><a href="service-details-2.html">Equipment Install</a></li>
                                    <li><a href="service-details-3.html">Water Analysis</a></li>
                                    <li><a href="service-details-4.html">Pool Maintenance</a></li>
                                    <li><a href="service-details-5.html">Drain & Clean</a></li>
                                    <li><a href="service-details-6.html">Pool Inspections</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children"><a href="#">Shop</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="shop-details.html">Shop Details</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="team-details.html">Team Details</a></li>
                                    <li><a href="testimonials.html">Testimonials</a></li>
                                    <li><a href="price.html">Price Package</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="error.html">Error Page</a></li>

                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Blogs</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="#">Blog Layout</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-grid-2-columns.html">Blog Grid 02 Columns</a></li>
                                            <li><a href="blog-grid-3-columns.html">Blog Grid 03 Columns</a></li>
                                            <li><a href="blog-list.html">Blog List</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog Sidebar</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                            <li><a href="blog.html">Blog No Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;