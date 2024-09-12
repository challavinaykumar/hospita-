import React, { useEffect } from 'react';
import Imagesec from '../Dropdown/Imagesec';
import './Renovascular.css'
import Rating from '../Dropdown/Rating';
import Mainfooter from '../Mainfooter';
import Surgeries from '../Dropdown/Surgeries';

const Renovascular = () => {
    const txt = 'At Asian Vascular Hospital in Hyderabad, we take pride in offering advanced and comprehensive renovascular procedures to address a range of vascular conditions. Our state-of-the-art facility, equipped with cutting-edge technology and staffed by a team of highly skilled vascular specialists, ensures that you receive top-notch care tailored to your individual needs.'
    const image = 'https://asianvascular.in/wp-content/uploads/2024/02/image-15.png'

    const sur_head = 'Renovascular Procedures'


    useEffect(()=>{
        document.title = 'Renovascular Procedures'
    },[])

    return (

        <div>
                        
            <div className="sur_head_page">
                <Surgeries sur_head={sur_head}/>
            </div>
            
            <div className="image_component">
                <Imagesec txt={txt} image={image} />
            </div>

            <section className='cerebro_sec' data-aos="fade-up">
                <div className="">
                    <div className="cere_txt_1 ren_txt">
                        <div className="cere_txt_1">
                            <p><b>Renal Artery Stenting:</b> <span> Renal artery stenosis, a narrowing of the blood vessels that supply the kidneys, can lead to serious health issues, including high blood pressure and kidney damage. Our experienced vascular specialists employ the latest techniques, including renal artery stenting, to restore proper blood flow to the kidneys. This minimally invasive procedure involves the placement of a stent, a small mesh-like tube, to widen the narrowed artery, promoting optimal kidney function and overall cardiovascular health.</span></p>
                        </div>
                        <div className="cere_txt_1">
                            <p><b>A-V Fistula Creation:</b> <span>For patients requiring hemodialysis, creating an arteriovenous (A-V) fistula is a critical step to ensure effective and sustainable dialysis treatments. Our skilled vascular surgeons excel in A-V fistula creation, a procedure that involves connecting an artery to a vein, typically in the arm. This surgical technique enhances blood flow, making the blood vessels more robust and suitable for dialysis. By prioritizing patient comfort and successful outcomes, our specialists ensure that A-V fistula creation is performed with precision and expertise.</span></p>
                        </div>
                    </div>
                    <div className="endo_txt_2 reno_txt_2">
                        <p><b>Specialties at Asian Vascular Hospital:</b> <span>Our commitment to excellence extends beyond the procedures we offer. At Asian Vascular Hospital, we prioritize patient-centered care and strive for positive outcomes through a range of specialties:</span></p>

                        <ol>
                            <li><b>Expert Vascular Surgeons:</b> <span>Our team of vascular surgeons brings a wealth of experience and expertise to the table. They are dedicated to providing personalized care and utilizing the latest advancements in vascular medicine.</span></li>
                            <li><b>State-of-the-Art Facilities:</b> <span>Our hospital is equipped with the most advanced diagnostic and interventional technology, ensuring accurate diagnoses and effective treatments. We prioritize patient safety and comfort throughout the entire process.</span></li>
                            <li><b>Comprehensive Care:</b> <span> Beyond the procedural aspects, our hospital emphasizes comprehensive care. We provide thorough pre- and post-procedure consultations, ensuring that patients are well-informed and supported at every step of their medical journey.</span></li>
                            <li><b>Patient-Centric Approach:</b> <span>We understand that each patient is unique, and we tailor our approach to meet individual needs. Our compassionate and dedicated staff go the extra mile to create a supportive and comfortable environment for all our patients.</span></li>
                        </ol>

                        <p className='choose'>Choosing Asian Vascular Hospital for your renovascular procedures means choosing excellence, innovation, and patient-focused care. Trust us to deliver the highest standard of vascular healthcare in Hyderabad.</p>
                    </div>
                </div>
            </section>

            <div className="endo_rating reno_rating">
                <Rating/>
            </div>

            <div className="">
                <Mainfooter/>
            </div>

        </div>
    );
};

export default Renovascular;