import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const projects = [
    {
        img: "assets/img/services/plaster-1.jpg",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/plaster-2.jpg",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/plaster-3.jpg",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/plaster-4.jpg",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/plaster-5.jpg",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/plaster-6.jpg",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },
    {
        img: "assets/img/services/plaster-7.jpg",
        title: "Pool Water Cleaning",
        subtitle: "Residential Services",
    },

];
const ServiceOne = () => {
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

                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <h2 className="">We partner with PebbleTec because we believe you deserve the best.</h2>
                                            <h4 style={{ color: '#3D5A94' }}>The World's most trusted pool finishes®</h4>
                                            <p>Investing in the best possible pool finish is crucial for a successful pool building or remodeling project. That's why we confidently offer PebbleTec pool finishes - the world-renowned brand that stands for exceptional design, sourcing, and screening. PebbleTec has set the gold standard for the pool industry, and we proudly stand behind their commitment to quality.</p>
                                        </div>
                                        <div className='col-md-4'>
                                            <iframe width="560" height="200" src="https://www.youtube.com/embed/_w3BCqWWglM?si=gbx_JQmlrYmr5Wzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>

                                    </div>
                                    <div className="service-feature-wrap">
                                        <div className="service-feature style2">
                                            <div className="service-feature_icon">
                                                <img src="assets/img/icon/service_feature_1_2.svg" alt="Icon" />
                                            </div>
                                            <div className="service-feature_content">
                                                <h4 className="service-feature_title">Beauty</h4>
                                                <p className="service-feature_text">PebbleTec's exclusive, top-of-the-line materials create the most beautiful pools in the world with a breathtaking array of water colors.</p>
                                            </div>
                                        </div>
                                        <div className="service-feature style2">
                                            <div className="service-feature_icon">
                                                <img src="assets/img/icon/service_feature_1_3.svg" alt="Icon" />
                                            </div>
                                            <div className="service-feature_content">
                                                <h4 className="service-feature_title">Durability</h4>
                                                <p className="service-feature_text">PebbleTec’s dedicated support team brings the expertise to ensure your pool installation is done right.</p>
                                            </div>
                                        </div>
                                        <div className="service-feature style2">
                                            <div className="service-feature_icon">
                                                <img src="assets/img/icon/service_feature_1_3.svg" alt="Icon" />
                                            </div>
                                            <div className="service-feature_content">
                                                <h4 className="service-feature_title">Expert Support</h4>
                                                <p className="service-feature_text">Maintain wireless scerios after sure quality vectors future</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xxl-12 col-lg-8">
                            <div className="page-single service-single" style={{ backgroundColor: '#3d5a94' }}>
                                <div className="page-content">
                                    <h3 className="text-white">Your outdoor living space can be a lasting oasis with the World’s Most Trusted Pool Finishes®.</h3>
                                    <h4 className="text-white">Find the Pool Finish Texture and Water Color that fits your vision.</h4>
                                    <p className="text-white">PebbleTec's easy to use design tool let's you imagine ALL the possibilities.</p>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-md-12 text-center mt-2 mb-5">
                                                <img src="assets/img/soil.jpg" alt="Icon" className="borderRadius-20 box-shadow-black" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 col-md-6 text-center mt-2">
                                                <Link to="https://partner.pebbletec.com/all-finishes" target='_blank' className="btn-services w-100">BROWSER ALL FINISHES</Link>
                                            </div>
                                            <div className="col-12 col-md-6 text-center mt-2">
                                                <Link to="https://pebbletec.com/products/pool-finishes/" target='_blank' className="btn-services w-100">VISIT PEBBLETEC.COM</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xxl-12 col-lg-8">
                            <div className="page-single service-single">
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

            <section className="space-extra-bottom">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xxl-12 col-lg-8">
                            <div className="page-single service-single">
                                <div className="page-content text-center">
                                    <h3 className="">Why choose a genuine PebbleTec pool finish instead of plaster?</h3>
                                    <div className="gap-10 ">
                                        <div className="col-sm-6 col-lg-auto process-card-wrap center-mobile">
                                            <div className="process-card3">
                                                <div className="process-card_icon">
                                                    <img src="assets/img/icon/service_3_1.svg" alt="Icon" />
                                                </div>
                                                <h2 className="process-card_title">Aesthetics</h2>
                                                <p className="process-card_text">PebbleTec finishes give a naturally elegant, even look that accentuates the water color.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-auto process-card-wrap center-mobile">
                                            <div className="process-card3">
                                                <div className="process-card_icon">
                                                    <img src="assets/img/icon/service_3_5.svg" alt="Icon" />
                                                </div>
                                                <h2 className="process-card_title">Durability</h2>
                                                <p className="process-card_text">PebbleTec finishes can last over 20 years with proper pool care.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-auto process-card-wrap center-mobile">
                                            <div className="process-card3">
                                                <div className="process-card_icon">
                                                    <img src="assets/img/icon/service_3_2.svg" alt="Icon" />
                                                </div>
                                                <h2 className="process-card_title">Choices</h2>
                                                <p className="process-card_text">PebbleTec finishes offer a range of texture options and over 50 stunning water colors. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default ServiceOne;