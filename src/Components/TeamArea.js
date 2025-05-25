import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


const teamMembers = [
    {
        id: 1,
        name: "Emanuel Maclin",
        role: "Pool Technician",
        image: "assets/img/team/team_3_1.jpg",
        socials: {
            facebook: "https://www.facebook.com/",
            twitter: "https://www.twitter.com/",
            linkedin: "https://www.linkedin.com/",
            behance: "https://www.behance.net/",
            youtube: "https://www.youtube.com/"
        }
    },
    {
        id: 2,
        name: "Jonson Anderson",
        role: "Pool Technician",
        image: "assets/img/team/team_3_2.jpg",
        socials: {
            facebook: "https://www.facebook.com/",
            twitter: "https://www.twitter.com/",
            linkedin: "https://www.linkedin.com/",
            behance: "https://www.behance.net/",
            youtube: "https://www.youtube.com/"
        }
    },
    {
        id: 3,
        name: "Charlie William",
        role: "Pool Technician",
        image: "assets/img/team/team_3_3.jpg",
        socials: {
            facebook: "https://www.facebook.com/",
            twitter: "https://www.twitter.com/",
            linkedin: "https://www.linkedin.com/",
            behance: "https://www.behance.net/",
            youtube: "https://www.youtube.com/"
        }
    },
    {
        id: 4,
        name: "Daniel Thomas",
        role: "Pool Technician",
        image: "assets/img/team/team_3_4.jpg",
        socials: {
            facebook: "https://www.facebook.com/",
            twitter: "https://www.twitter.com/",
            linkedin: "https://www.linkedin.com/",
            behance: "https://www.behance.net/",
            youtube: "https://www.youtube.com/"
        }
    },
    {
        id: 5,
        name: "Daniel Thomas",
        role: "Pool Technician",
        image: "assets/img/team/team_3_5.jpg",
        socials: {
            facebook: "https://www.facebook.com/",
            twitter: "https://www.twitter.com/",
            linkedin: "https://www.linkedin.com/",
            behance: "https://www.behance.net/",
            youtube: "https://www.youtube.com/"
        }
    }
];

const TeamArea = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section
            className="team-area overflow-hidden space"
            style={{ backgroundImage: "url('assets/img/bg/team_bg_1.jpg')" }}
        >
            <div className="container">
                <div className="row align-content-lg-center">
                    <div className="col-xl-4 align-items-xl-center">
                        <div className="team-content-area text-center text-xl-start">
                            <div className="title-area mb-30">
                                <span className="sub-title style1">Team Members</span>
                                <h2 className="sec-title">Our Professional Expert</h2>
                                <p className="sec-text">
                                    Our team consists of certified technicians with a wealth of experience in pool maintenance and servicing. We stay updated on the latest industry trends and best practices to deliver exceptional results.
                                </p>
                            </div>
                            <Link to="/about-us" className="th-btn radius-none">View All Members</Link>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <Slider {...settings} className="teamSlide">
                            {teamMembers.map(member => (
                                <div key={member.id} className="col-sm-6 col-lg-4 col-xxl-3">
                                    <div className="th-team team-item wow fadeInUp">
                                        <div className="team-img">
                                            <img src={member.image} alt={member.name} />
                                        </div>
                                        <div className="team-item_content">
                                            <h3 className="box-title">
                                                <Link to="/about-us">{member.name}</Link>
                                            </h3>
                                            <span className="team-desig">{member.role}</span>
                                            <div className="team-social">
                                                <a target='_blank' href={member.socials.facebook}><i className="fab fa-facebook-f"></i></a>
                                                <a target='_blank' href={member.socials.twitter}><i className="fab fa-twitter"></i></a>
                                                <a target='_blank' href={member.socials.linkedin}><i className="fab fa-linkedin-in"></i></a>
                                                <a target='_blank' href={member.socials.behance}><i className="fa-brands fa-behance"></i></a>
                                                <a target='_blank' href={member.socials.youtube}><i className="fab fa-youtube"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamArea;
