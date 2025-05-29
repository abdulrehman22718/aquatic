import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
        recaptcha: ""
    });

    const [status, setStatus] = useState("Send");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRecaptcha = (value) => {
        setFormData(prev => ({
            ...prev,
            recaptcha: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.recaptcha) {
            setStatus("Please verify reCAPTCHA.");
            return;
        }

        setStatus("Sending...");

        try {
            const response = await fetch("https://demo.resumescripters.com/backend_server/index.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });

            const text = await response.text();
            if (response.ok && text === "Success") {
                setStatus("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    message: "",
                    recaptcha: ""
                });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="space" id="contact-sec">
            <div className="container space">
                <div className="row gy-40">
                    <div className="col-xl-7 col-xxl-6">
                        <div className="title-area mb-10">
                            <h2 className="sec-title">Contact Information</h2>
                            <p className="mb-0">
                                Star Pools is a veteran-owned and operated company, proudly serving the Carolinas. We
                                specialize in renovations, new builds, and high-end Pebble Tec plaster finishes, and
                                State Of the art leak detections. Whether you’re upgrading with Pebble Tec or starting a
                                new build from the ground up, or making renovations you can trust our years of
                                experience and commitment to excellence.
                            </p>
                            <h4 className="mt-50">
                                Call or text us today to bring your vision to life
                            </h4>
                        </div>
                        <div className="contact-info-wrap">
                            <div className="contact-info">
                                <div className="contact-info_icon">
                                    <i className="fa-light fa-phone"></i>
                                </div>
                                <div className="media-body">
                                    <h3 className="box-title">Phone Number</h3>
                                    <span className="contact-info_text">
                                        <a href="tel:+1843-605-8966">843-605-8966</a>
                                    </span>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info_icon">
                                    <i className="fa-light fa-envelope"></i>
                                </div>
                                <div className="media-body">
                                    <h3 className="box-title">Email Address</h3>
                                    <span className="contact-info_text">
                                        <a href="mailto:starpools85@gmail.com">starpools85@gmail.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-xxl-5 offset-xxl-1">
                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <h3 className="form-title text-center">Get In Touch</h3>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <i className="fa-sharp fa-light fa-user"></i>
                                        <input type="text" className="form-control" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group col-12">
                                        <i className="fa-sharp fa-regular fa-envelope"></i>
                                        <input type="email" className="form-control" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group col-12">
                                        <input type="tel" className="form-control" name="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} required />
                                        <i className="fal fa-phone"></i>
                                    </div>
                                    <div className="form-group col-12">
                                        <i className="fal fa-comment"></i>
                                        <textarea name="message" cols="30" rows="3" className="form-control" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                                    </div>
                                    <div className="form-group col-12">
                                        <ReCAPTCHA
                                            sitekey="6LcsdE0rAAAAALoJys3j9FdzgXh24itywh5FrGI-"
                                            onChange={handleRecaptcha}
                                        />
                                    </div>
                                    <div className="form-btn col-12">
                                        <button type="submit" className="th-btn fw-btn">{status}</button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3">{status}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
