import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const projects = [
    {
        img: "assets/img/services/service-4-1.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/service-4-2.png",
        title: "Water Analysis",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/service-4-3.png",
        title: "Equipment Install",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/service-4-4.png",
        title: "Pool Inspections",
        subtitle: "Residential Services",
    },
];

const ServiceFour = () => {
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
            <section className="space-top mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-lg-8">
                            <div className="page-single service-single">
                                <div className="page-content">
                                    <h2 className="">Trusted Leak Detection & Repair Experts in the Carolinas</h2>
                                    <h4 style={{ color: '#3D5A94' }}>Precision Pool Leak Solutions for Homes & Businesses</h4>
                                    <p>
                                        Star Pools is the most trusted and go-to leak detection and repair company in the Carolinas.
                                        With state-of-the-art equipment, they are able to pinpoint the leak in your swimming pool,
                                        serving both commercial and residential clients with expertise.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="container p-4"
                id="Portfolio-sec"
                style={{ backgroundImage: `url('assets/img/bg/project_bg_1.jpg')`, borderRadius: '20px', marginBottom: '100px' }}
            >
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
            </section>
        </>
    );
};

export default ServiceFour;