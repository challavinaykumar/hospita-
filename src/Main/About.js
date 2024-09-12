import React, { useEffect } from 'react';
import './About.css'
import Mainfooter from './Mainfooter';
import Insurance from './Insurance';


const About = () => {
    useEffect(()=>{
        document.title = 'About'
    },[])
    return (
        <div>

    <section id='' className='abt_sec' data-aos="fade-up">
                <div className="about_main d-flex">
                    <div className="about_image">
                        <div className="" data-aos="fade-right">
                        <img className='about_img_1' src="https://asianvascular.in/wp-content/uploads/2022/01/Screenshot-2022-01-15-at-10.29.21-PM.png" alt="" />
                        </div>

                        <div className="" data-aos="fade-up">
                        <img src="https://vishwarajhospital.com/wp-content/uploads/2023/07/1955440650.jpg"  alt="" className='about_image_card about_image_card_2' />
                        </div>
                    </div>
                    <div className="about_txt">
                        <div className="about_txt_1" data-aos="fade-up">
                            <h1>About
                            Asian Vascular Hospital</h1>
                            <h4>Asian Vascular Hospitals, a dream map of Dr G V Praveen Kumar who had been among the panel of various renown hospitals continuously sharpening his craft for over a decade and has been unceasingly proclaiming illustrous victories noteworthy for records and journals.</h4>
                        </div>
                        <div className="about_txt_2" data-aos="fade-up">
                            <p>Among his ceasing maneuvers he comprehended with the fact that Vascular Health went unnoticed among the majority of the masses of India, that lead to a gravious turn of events in a common man’s life.</p>
                            <p>Vascular system encompassing of Veins and arteries play a crucial role in the fuctioning from head to toe influencing every notion of change in a human body </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id='About' data-aos="fade-up">
                <div className="about_main d-flex">
                    <div className="about_image">
                        <div className="" data-aos="fade-right">
                        <img className='about_img_1' src="https://img.freepik.com/free-photo/full-shot-doctors-discussing-hallway_23-2149355042.jpg?t=st=1724137758~exp=1724141358~hmac=ea25dea834d16243594f57f8c7b91c03e770208e439a79b1018f187beaad0960&w=360" alt="" />
                        </div>
                        <div className="about_image_card" data-aos="fade-up">
                            <h3>Kimbery Bari</h3>
                            <h2>We push the limits of what's possible for our patients.
                            </h2>
                            <h1><i class="fa-solid fa-caret-down"></i></h1>
                        </div>
                    </div>
                    <div className="about_txt">
                        <div className="about_txt_1" data-aos="fade-right">
                            <h1>Welcome To Our Clinic</h1>
                            <h4>Our clients are our priority, we offer
                            quality medical services with a team of specialists.</h4>
                        </div>
                        <div className="about_txt_2" data-aos="fade-up">
                            <p>Our mission is to improve the health of our community by providing high quality, comprehensive medical care in a welcoming and compassionate environment.
On behalf of the entire staff, we would like to welcome you to our clinic. We are pleased to have the opportunity to assist you with your physical therapy care. Our goal is to provide the highest quality and most up-to-date physical therapy treatments available in a professional and caring manner. We are committed to helping you attain your rehabilitation goals. It is also our goal to provide you with outstanding service.</p>
                        </div>
                    </div>
                </div>
            </section> */}


            <div className="team" data-aos="fade-up">
                <div className="team_head">
                    <h1>Meet Our Team</h1>
                </div>
                <div className="team_names_main d-flex">
                    <div className="team_names_sub">
                        <div className="names">
                            <h1>
                            Dr. G.V. Praveen Kumar</h1>
                            <p>Vascular Sciences</p>
                        </div>
                        <div className="names">
                            <h1>Are Nirupama Devi</h1>
                            <p>Pulmonology</p>
                        </div>
                    </div>

                    <div className="team_names_sub">
                        <div className="names">
                            <h1>
                            Dr. J. Venkateshwarulu</h1>
                            <p>
                            Radio Diagnosis & Vascular Sciences</p>
                        </div>
                        <div className="names">
                            <h1>
                            Dr. Hidayathullah</h1>
                            <p>Specality</p>
                        </div>
                    </div>

                    <div className="team_names_sub">
                        <div className="names">
                            <h1>
                            Dr. Narsappa</h1>
                            <p>Specality</p>
                        </div>
                        <div className="names">
                            <h1>
                            Dr. Shoeb Khan</h1>
                            <p>Specality</p>
                        </div>
                    </div>

                </div>
            </div>


{/* 
            <section id='' className='abt_sec' data-aos="fade-up">
                <div className="about_main d-flex">
                    <div className="about_image">
                        <div className="" data-aos="fade-right">
                        <img className='about_img_1' src="https://asianvascular.in/wp-content/uploads/2022/01/Screenshot-2022-01-15-at-10.29.21-PM.png" alt="" />
                        </div>

                        <div className="" data-aos="fade-up">
                        <img src="https://vishwarajhospital.com/wp-content/uploads/2023/07/1955440650.jpg"  alt="" className='about_image_card about_image_card_2' />
                        </div>
                    </div>
                    <div className="about_txt">
                        <div className="about_txt_1" data-aos="fade-up">
                            <h1>About
                            Asian Vascular Hospital</h1>
                            <h4>Asian Vascular Hospitals, a dream map of Dr G V Praveen Kumar who had been among the panel of various renown hospitals continuously sharpening his craft for over a decade and has been unceasingly proclaiming illustrous victories noteworthy for records and journals.</h4>
                        </div>
                        <div className="about_txt_2" data-aos="fade-up">
                            <p>Among his ceasing maneuvers he comprehended with the fact that Vascular Health went unnoticed among the majority of the masses of India, that lead to a gravious turn of events in a common man’s life.</p>
                            <p>Vascular system encompassing of Veins and arteries play a crucial role in the fuctioning from head to toe influencing every notion of change in a human body </p>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id='About' data-aos="fade-up">
                <div className="about_main d-flex">
                    <div className="about_image">
                        <div className="" data-aos="fade-right">
                        <img className='about_img_1' src="https://img.freepik.com/free-photo/full-shot-doctors-discussing-hallway_23-2149355042.jpg?t=st=1724137758~exp=1724141358~hmac=ea25dea834d16243594f57f8c7b91c03e770208e439a79b1018f187beaad0960&w=360" alt="" />
                        </div>
                        <div className="about_image_card" data-aos="fade-up">
                            <h3>Kimbery Bari</h3>
                            <h2>We push the limits of what's possible for our patients.
                            </h2>
                            <h1><i class="fa-solid fa-caret-down"></i></h1>
                        </div>
                    </div>
                    <div className="about_txt">
                        <div className="about_txt_1" data-aos="fade-right">
                            <h1>Welcome To Our Clinic</h1>
                            <h4>Our clients are our priority, we offer
                            quality medical services with a team of specialists.</h4>
                        </div>
                        <div className="about_txt_2" data-aos="fade-up">
                            <p>Our mission is to improve the health of our community by providing high quality, comprehensive medical care in a welcoming and compassionate environment.
On behalf of the entire staff, we would like to welcome you to our clinic. We are pleased to have the opportunity to assist you with your physical therapy care. Our goal is to provide the highest quality and most up-to-date physical therapy treatments available in a professional and caring manner. We are committed to helping you attain your rehabilitation goals. It is also our goal to provide you with outstanding service.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="abt_ins">
                <Insurance/>
            </div>

            <div className="Contact_footer">
                <Mainfooter/>
            </div>


        </div>
    );
};

export default About;