import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const services = [
    {
        icon: "assets/img/icon/service_3_2.svg",  // Keeping the same icon
        title: "Pebble Tec Plaster",
        description: "High-quality plaster finishes that provide durability and an elegant look for pool.",
        link: "/pebble-tec-plaster"
    },
    {
        icon: "assets/img/icon/service_3_2.svg",  // Keeping the same icon
        title: "Concrete Pools",
        description: "Custom-built concrete pools designed for durability and unique style.",
        link: "/concrete-pools"
    },
    {
        icon: "assets/img/icon/service_3_2.svg",  // Keeping the same icon
        title: "Fiberglass Pools",
        description: "Low-maintenance, high-quality fiberglass pools for effortless enjoyment.",
        link: "/fiber-glass-pools"
    },
    {
        icon: "assets/img/icon/service_3_2.svg",  // Add or update the image for this one, if needed
        title: "Leak & Repair",
        description: "Expert leak detection and repair services to keep your pool in top shape.",
        link: "/leak-and-repair"
    },
];

const ServicesSlider = () => {
    const sliderRef = useRef(null);

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200, // lg
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992, // md
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576, // sm
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div
            className="service-sec overflow-hidden space"
            id="service-sec"
            style={{ backgroundImage: "url('assets/img/bg/service_bg_2.jpg')",marginTop:'-100px' }}
        >
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center space-top">
                    <div className="col-lg-7">
                        <div className="title-area text-center text-lg-start">
                            <span className="sub-title style1">Our Best Services</span>
                            <h2 className="sec-title">Our Best Pool Services For You!</h2>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="sec-btn">
                            <div className="icon-box">
                                <button
                                    onClick={() => sliderRef.current.slickPrev()}
                                    className="slick-arrow default"
                                    aria-label="Previous Slide"
                                >
                                    <i className="far fa-arrow-left"></i>
                                </button>
                                <button
                                    onClick={() => sliderRef.current.slickNext()}
                                    className="slick-arrow default"
                                    aria-label="Next Slide"
                                >
                                    <i className="far fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row slider-shadow th-carousel">
                    <Slider ref={sliderRef} {...settings}>
                        {services.map((service, idx) => (
                            <div className="slide-wrapper" key={idx}>
                                <div
                                    className="service-item"
                                    style={{
                                        backgroundImage: "url('assets/img/shape/service_shape_4.png')",
                                    }}
                                >
                                    <div className="service-item_content">
                                        <div className="service-item_icon">
                                            <img src={service.icon} alt={`${service.title} Icon`} />
                                        </div>
                                        <h3 className="box-title">
                                            <a href={service.link}>{service.title}</a>
                                        </h3>
                                        <p className="service-item_text">{service.description}</p>
                                        <Link to={service.link} className="th-btn border radius-none">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ServicesSlider;
