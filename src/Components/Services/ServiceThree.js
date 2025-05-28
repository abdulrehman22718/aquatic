import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
    {
        img: "assets/img/services/service-three-1.png",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/service-three-2.png",
        title: "Water Analysis",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/service-three-3.png",
        title: "Equipment Install",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/service-three-4.png",
        title: "Pool Inspections",
        subtitle: "Residential Services",
    },
];

const ServiceThree = () => {
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
                                    <h2 className="">Affordable Luxury, Built to Impress</h2>
                                    <h4 style={{ color: '#3D5A94' }}>Custom Boutique Pools at Unbeatable Prices</h4>
                                    <p>At Star Pools we offer affordable and price competitive boutique swimming pools. Don't get stuck with a plain run of the mill swimming pool. We will beat any price in town. We can guarantee that</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                                    <video
                                        src="../../assets/video/file.mp4"
                                        controls
                                        controlsList="nodownload"
                                        playsInline
                                        style={{
                                            width: '700px',
                                            maxWidth: '100%',
                                            borderRadius: '10px',
                                            boxShadow: '0 8px 24px rgba(0, 0, 0, 1)',
                                            border: '2px solid #3D5A94'
                                        }}
                                    ></video>
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
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-12 col-md-6 text-center mt-2">
                                <Link to="/" className="btn-services-three w-100">www.avivapools.com</Link>
                            </div>
                            <div className="col-12 col-md-6 text-center mt-2">
                                <Link to="/" className="btn-services-three w-100">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceThree;