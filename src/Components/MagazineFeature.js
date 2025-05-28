import React from "react";
import { Link } from 'react-router-dom';

const MagazineFeature = () => {
    return (
        <>
            <section className="space-top mt-5">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xxl-12 col-lg-8">
                            <div className="page-single service-single">
                                <div className="page-content">
                                    <h2 className="">We partner with PebbleTec because we believe you deserve the best.</h2>
                                    <h4 style={{ color: '#3D5A94' }}>Unmatched Durability, Beauty, and Performance</h4>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <img src="../../assets/img/magazine/magazine-1.png" className="magazine-img" alt="Blog Image" />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <img src="../../assets/img/magazine/magazine-2.png" className="magazine-img" alt="Blog Image" />
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

export default MagazineFeature;
