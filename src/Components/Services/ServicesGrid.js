import React from 'react';
import { Link } from 'react-router-dom';
const services = [
    {
        icon: "assets/img/icon/service_3_2.svg",  // Keeping the same icon
        title: "Pebble Tec Plaster",
        description: "High-quality plaster finishes that provide durability and an elegant look for pool.",
        link: "/about-us"
    },
    {
        icon: "assets/img/icon/service_3_2.svg",  // Keeping the same icon
        title: "Concrete Pools",
        description: "Custom-built concrete pools designed for durability and unique style.",
        link: "/about-us"
    },
    {
        icon: "assets/img/icon/service_3_2.svg",  // Keeping the same icon
        title: "Fiberglass Pools",
        description: "Low-maintenance, high-quality fiberglass pools for effortless enjoyment.",
        link: "/about-us"
    },
    {
        icon: "assets/img/icon/service_3_2.svg",  // Add or update the image for this one, if needed
        title: "Leak & Repair",
        description: "Expert leak detection and repair services to keep your pool in top shape.",
        link: "/about-us"
    },
];
const ServicesGrid = () => {
    return (
        <>
            <section className="overflow-hidden space mt-5" id="service-sec">
                <div className="container">
                    <div className="row gy-4">

                        {services.map((service, index) => (
                            <div key={index} className="col-md-6 col-lg-6">
                                <div className="service-box style2 wow fadeInUp" data-bg-src="assets/img/shape/service_shape.png">
                                    <div className="service-box_img global-img">
                                        <img src="assets/img/service/service_1_1.jpg" alt="Service" />
                                    </div>
                                    <div className="service-box_content">
                                        <div className="service-box_icon">
                                            <img src={service.icon} alt="Icon" />
                                        </div>
                                        <h3 className="box-title">
                                            <a href={service.link}>{service.title}</a>
                                        </h3>
                                        <p className="service-box_text">{service.description}</p>
                                        <a href={service.link} className="th-btn border">Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesGrid;