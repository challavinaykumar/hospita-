import React from 'react';
import './Mainfooter.css'
import { FaHandHoldingMedical } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Mainfooter = () => {
    return (
        <div>
            <section id='Main_footer' data-aos="fade-up">
                <div className="">
                <div className="main_foot">
                    <div className="foot_card">
                        <div className="foot_image">
                            <img src="https://salute.vamtam.com/wp-content/uploads/2020/06/logo-main.svg" alt="" />
                        </div>
                        <p>We are a family centered practice that incorporates compassion and dedication to promote your well being.</p>
                        <h4><FaHandHoldingMedical className='i'/> <span>+91 733 732 1806</span></h4>
                        <button className='btn btn_clr'>Request an Appointment <i className='fa-solid fa-angle-right'></i></button>
                    </div>
                    <div className="main_foot_cnt">
                        <div className="">
                            <h1>Patient Care <i className='fa-solid fa-angle-right'></i></h1>
                            <p><Link>Providers</Link></p>
                            <p><Link>Visiting Hours and Direction</Link></p>
                            <p><Link>Online Forms</Link></p>
                            <p><Link>Request an Appointment</Link></p>
                            <p><Link>Testomonials and Reviews</Link></p>
                            <p><Link>Billing and Insurance</Link></p>
                        </div>
                        <div className="">
                            <h1>Patient Care <i className='fa-solid fa-angle-right'></i></h1>
                            <p><Link>About</Link></p>
                            <p><Link>Quality & Safety</Link></p>
                            <p><Link>Careers</Link></p>
                            <p><Link>FAQ</Link></p>
                            <p><Link>Contact & Location</Link></p>
                            <p><Link>Blog</Link></p>
                        </div>
                    </div>
                    <div className="main_foot_form_main">
                        <div className="foot_form">
                            <div className="">
                                <h1>Contacts <i className='fa-solid fa-angle-right'></i></h1>
                            </div>
                            <div className="foot_add">
                                <p>Address:</p>
                                <p className='bos'>Banjara Hills,<br /> Hyderabad</p>
                            </div>
                            <div className="foot_add">
                                <p>Phone:</p>
                                <p>+91 733 732 1806​</p>
                            </div>
                            <div className="foot_add">
                                <p>Opening Hours:</p>
                                <p>Mo-Fri: 07:00-23:00h</p>
                            </div>
                            <div className="foot_brands d-flex gap-3 mt-2">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-x-twitter'></i>
                                <i className='fa-brands fa-youtube'></i>
                                <i className='fa-brands fa-instagram'></i>
                                <i className='fa-brands fa-linkedin'></i>
                            </div>
                            <Link className='btn dir_btn '>Directions</Link>
                        </div>
                    </div>
                </div>

                </div>
            </section>
            <div className="terms">
                    <div className="terms_left">
                        <small>© 2024
                        All rights reserved.</small>
                    </div>
                    <div className="terms_right">
                        <small>Sitemap
                        </small>
                        <small>Terms and Conditions</small>
                        <small>Privacy Policy</small>
                        <small>Manage Cookies</small>
                    </div>
                </div>
        </div>
    );
};

export default Mainfooter;