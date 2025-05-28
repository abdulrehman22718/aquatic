import React from "react";
import { Link } from 'react-router-dom';


const Financing = () => {
    return (
        <>
            <section className="space-top mt-5 mb-5">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xxl-12 col-lg-8">
                            <div className="page-single service-single">
                                <h3 className="">We offer two options when it comes to financing.</h3>
                                <h4 className="text-theme">Find the Pool Finish Texture and Water Color that fits your vision.</h4>

                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <img src="../../assets/img/partner-1.png" className="mt-5" alt="Blog Image" />
                                        <Link to="https://www.hfsfinancial.net/promo/66e300ae5d97512f48953a02/" target="_blank" className="btn-services-three w-100">Apply Now</Link>
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <img src="../../assets/img/partner-2.png" className="mt-5" alt="Blog Image" />
                                        <Link to="https://vistafi.com/contractor/star-pools001uo00000pooxfyax/" target="_blank" className="btn-services-three w-100" style={{marginTop:'40px'}}>Apply Now</Link>
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

export default Financing;
