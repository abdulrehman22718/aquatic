import React from 'react';
import { Link } from 'react-router-dom';
const services = [
    {
        icon: "../../assets/img/services/service-three-4.png",  // Keeping the same icon
        title: "Pebble Tec Plaster",
        description: "High-quality plaster finishes that provide durability and an elegant look for pool.",
        link: "/pebble-tec-plaster"
    },
    {
        icon: "../../assets/img/services/service-three-2.png",  // Keeping the same icon
        title: "Concrete Pools",
        description: "Custom-built concrete pools designed for durability and unique style.",
        link: "/concrete-pools"
    },
    {
        icon: "assets/img/service/service_1_1.jpg",  // Keeping the same icon
        title: "Fiberglass Pools",
        description: "Low-maintenance, high-quality fiberglass pools for effortless enjoyment.",
        link: "/fiber-glass-pools"
    },
    {
        icon: "../../assets/img/services/service-4-3.png",  // Add or update the image for this one, if needed
        title: "Leak & Repair",
        description: "Expert leak detection and repair services to keep your pool in top shape.",
        link: "/leak-and-repair"
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
                                <div className="service-box style2 wow fadeInUp" style={{ background: "url('assets/img/shape/service_shape.png')" }}>
                                    <div className="service-box_img global-img">
                                        <img src={service.icon} alt="Service" style={{ width: '400px', height: '200px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="service-box_content">

                                        <h3 className="box-title">
                                            <Link href={service.link}>{service.title}</Link>
                                        </h3>
                                        <p className="service-box_text">{service.description}</p>
                                        <Link to={service.link} className="th-btn border">Read More</Link>
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