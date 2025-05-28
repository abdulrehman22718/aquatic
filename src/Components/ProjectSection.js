import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const projects = [
    {
        img: "assets/img/gallery/1.jpg",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/2.jpg",
        title: "Water Analysis",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/3.jpg",
        title: "Equipment Install",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/4.jpeg",
        title: "Pool Inspections",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/5.jpg",
        title: "Leak Detection",
        subtitle: "Commercial Services",
    },
    {
        img: "assets/img/gallery/6.jpg",
        title: "Filter Maintenance",
        subtitle: "Commercial Services",
    },
    {
        img: "assets/img/gallery/7.jpg",
        title: "Pool Remodeling",
        subtitle: "Premium Services",
    },
    {
        img: "assets/img/gallery/8.jpg",
        title: "Chemical Treatment",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/9.jpg",
        title: "Green Pool Recovery",
        subtitle: "Emergency Services",
    },
    {
        img: "assets/img/gallery/10.jpg",
        title: "Heater Installation",
        subtitle: "Installation Services",
    },
    {
        img: "assets/img/gallery/11.jpg",
        title: "Custom Pool Design",
        subtitle: "Premium Services",
    },
    {
        img: "assets/img/gallery/12.jpg",
        title: "Tile & Coping Work",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/gallery/13.jpg",
        title: "Pump Replacement",
        subtitle: "Maintenance Services",
    },
    {
        img: "assets/img/gallery/14.jpeg",
        title: "Salt System Setup",
        subtitle: "Installation Services",
    },
    {
        img: "assets/img/gallery/15.webp",
        title: "Weekly Pool Service",
        subtitle: "Subscription Services",
    },
];

const ProjectSection = () => {
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
        <section
            className="project-sec bg-top-center overflow-hidden space"
            id="Portfolio-sec"
            style={{ backgroundImage: `url('assets/img/bg/project_bg_1.jpg')` }}
        >
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-7">
                        <div className="title-area text-center text-lg-start">
                            <span className="sub-title style1">Our Work Gallery</span>
                            <h2 className="sec-title">Recent Pool Maintenance Work</h2>
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
                            <div className="project-content gallery-hover-effect">
                                <div className="media-left">
                                    <span className="project-subtitle text-white">{project.subtitle}</span>
                                    <h4 className="box-title">
                                        <Link to="/gallery">{project.title}</Link>
                                    </h4>
                                    <Link to="/gallery" className="icon-btn popup-image">
                                        <i className="far fa-plus"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ProjectSection;
