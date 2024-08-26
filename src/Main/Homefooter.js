import React from 'react';
import './Homefooter.css'
import { Link } from 'react-router-dom';

const Homefooter = () => {
    return (
        <div>
            <section id='h_footer' data-aos="fade-up">
                <div className="h_footer  gap-5">
                    <div className="h_footer_img" data-aos="fade-right">
                        <img className='img_1' src="https://png.pngtree.com/png-clipart/20230524/original/pngtree-beautiful-female-doctor-wearing-a-medical-coat-and-mask-png-image_9169436.png" alt="" />
                    </div>
                    <div className="h_rate_main" data-aos="fade-up">
                        <div className="h_rate ">
                            <img src="https://salute.vamtam.com/wp-content/uploads/2020/06/logo-main.svg" alt="" />
                            <div className="h_rating_main ">
                                <div className="">
                                <i class="fa-solid fa-star" style={{color: "#FF8D8D"}}></i>
                                <i class="fa-solid fa-star" style={{color: "#FF8D8D"}}></i>
                                <i class="fa-solid fa-star" style={{color: "#FF8D8D"}}></i>
                                <i class="fa-solid fa-star" style={{color: "#FF8D8D"}}></i>
                                <i class="fa-regular fa-star-half-stroke" style={{color: "#FF8D8D"}}></i>
                                </div>
                                <div className="h_rating">
                                    <small>4.7 Overall Rating</small>
                                    <small>3245 reviews on Zocdoc <i class="fa-solid fa-angle-right"></i></small>
                                </div>
                            </div>
                            <a href="/#" className='btn p-2' style={{background:"#132573",color:"#fff"}}>Book on ZocDoc</a>
                        </div>
                        <div className="h_address d-flex justify-content-between">
                            <div className="">
                                <p>Banjara Hills,</p>
                                <p>Hyderabad</p>
                                <p className='tel'>+91 733 732 1806​</p>
                            </div>
                            <div className="">
                                <p>Oppening hours:</p>
                                <p>Evrey day: 07:00 – 23:00h</p>
                            </div>
                            <div className="h_address_brands">
                                <Link to={''}><i className='fa-brands fa-facebook'></i></Link>
                                <Link to={''}><i className='fa-brands fa-x-twitter'></i></Link>
                                <Link to={''}><i className='fa-brands fa-youtube'></i></Link>
                            </div>
                        </div>
                        <div className="h_links d-flex justify-content-between">
                            <p><Link to={'#'}>About</Link></p>
                            <p><Link to={'#'}>Our Doctors</Link></p>
                            <p><Link to={'#'}>Vascualr</Link></p>
                            <p><Link to={'#'}>Cardiology</Link></p>
                        </div>
                        <div className="h_terms_main">
                            <div className="h_terms d-flex">
                                <small><Link to={''}>Terms and Conditions</Link></small>
                                <small><Link to={''}>Privacy Policy</Link></small>
                            </div>
                            <div className="">
                                <small>© 2024 All rights reserved.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homefooter;