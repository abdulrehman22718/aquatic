import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const projects = [
    {
        img: "assets/img/gallery/gallery-1.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-2.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-3.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-4.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-5.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-6.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-7.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-8.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-9.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-10.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-11.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-12.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-13.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-14.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-15.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/gallery-16.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
];
const Gallery = () => {
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };
    return (
        <>
            <section className="space-top mt-5 mb-5">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xxl-12 col-lg-8">
                            <div className="page-single service-single">
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <img src="../../assets/img/gallery/gallery-logo-1.png" className="mt-5" alt="Blog Image" />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <img src="../../assets/img/gallery/gallery-logo-2.png" className="" alt="Blog Image" />
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row justify-content-lg-between justify-content-center align-items-center">
                                        <div className="col-lg-7">
                                            <div className="title-area text-center text-lg-start">
                                                <span className="sub-title style1">Our Work Gallery</span>
                                                <h2 className="sec-title">Explore</h2>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="sec-btn">
                                                <div className="icon-box style3">
                                                    <button
                                                        className="slick-arrow default"
                                                        onClick={() => sliderRef.current.slickPrev()}
                                                    >
                                                        <i className="far fa-arrow-left"></i>
                                                    </button>
                                                    <button
                                                        className="slick-arrow default"
                                                        onClick={() => sliderRef.current.slickNext()}
                                                    >
                                                        <i className="far fa-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <Slider ref={sliderRef} {...settings}>
                                        {projects.map((project, idx) => (
                                            <div key={idx} className="project-item px-3">
                                                <div className="project-img">
                                                    <img
                                                        src={project.img}
                                                        alt={project.title}
                                                        style={{
                                                            width: "100%",
                                                            height: "300px",
                                                            objectFit: "cover",
                                                            borderRadius: "8px",
                                                        }}
                                                    />

                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
