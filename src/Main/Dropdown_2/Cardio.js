import React, { useEffect } from 'react';
import Imagesec from '../Dropdown/Imagesec';
import Rating from '../Dropdown/Rating';
import Mainfooter from '../Mainfooter';
import Surgeries from '../Dropdown/Surgeries';
import './Cardio.css'

const Cardio = () => {
    const txt = 'Welcome to Asian Vascular Hospital in Hyderabad, where we prioritize your cardiovascular health with cutting-edge procedures and specialized services. Our team of highly skilled and experienced cardiologists is dedicated to providing comprehensive care, utilizing state-of-the-art technology to perform a range of cardiovascular procedures. Below are two key services offered at our facility:'
    const image = 'https://asianvascular.in/wp-content/uploads/2024/02/image-16.png'
    
    const sur_head = 'Cardiovacular Procedures'
    useEffect(()=>{
        document.title = 'Cardiovacular Procedures'
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
                            <p><b>1. Percutaneous Transluminal Coronary Angioplasty (PTCA):</b> <span> Percutaneous Transluminal Coronary Angioplasty, commonly known as PTCA, is a minimally invasive procedure designed to treat coronary artery disease. Our expert cardiologists employ this technique to widen narrowed or obstructed coronary arteries, restoring blood flow to the heart muscle. During PTCA, a catheter with a balloon at its tip is inserted into the narrowed artery. Once in place, the balloon is inflated, compressing the plaque against the artery walls and creating a larger opening. In some cases, a stent may be placed to help maintain the artery’s patency. This procedure offers a less invasive alternative to traditional surgery and often allows for a quicker recovery.</span></p>
                        </div>
                        <div className="cere_txt_1">
                            <p><b>2. Coronary Angiogram:</b> <span>A Coronary Angiogram is a diagnostic procedure that provides detailed images of the coronary arteries and helps identify any blockages or abnormalities. During this procedure, a contrast dye is injected into the coronary arteries, and X-ray images are taken to visualize the blood flow and identify areas of concern. The information obtained from a coronary angiogram is crucial for accurate diagnosis and treatment planning. Our experienced team at Asian Vascular Hospital ensures that this procedure is conducted with precision and efficiency, offering valuable insights into your cardiovascular health.</span></p>
                        </div>
                    </div>
                    <div className="endo_txt_2 reno_txt_2">
                        <p><b>Specialties at Asian Vascular Hospital:</b> <span>At Asian Vascular Hospital, we take pride in our commitment to excellence and patient-centered care. Our cardiovascular services are complemented by several specialties that set us apart:</span></p>

                        <ol>
                            <li><b>Expert Cardiologists:</b> <span>Our team consists of skilled and renowned cardiologists who bring a wealth of experience to the table. They are dedicated to providing personalized care and ensuring the best outcomes for our patients.</span></li>
                            <li><b>State-of-the-Art Facilities:</b> <span>Asian Vascular Hospital is equipped with the latest technology and advanced medical equipment, ensuring that our patients receive the highest standard of care.</span></li>
                            <li><b>Comprehensive Care</b> <span> We offer a holistic approach to cardiovascular health, integrating preventive measures, diagnostic procedures, and advanced treatments to address a wide range of cardiovascular conditions.</span></li>
                            <li><b>Patient-Centric Approach: </b> <span>Our commitment to patient satisfaction is reflected in our patient-centric approach. From the moment you enter our facility to your post-procedure care, we prioritize your comfort, well-being, and understanding.</span></li>
                        </ol>

                        <p className='choose'>Experience exceptional cardiovascular care at Asian Vascular Hospital in Hyderabad, where expertise meets compassion, and innovation meets tradition. Your heart health is our priority, and we are dedicated to providing the highest quality care to ensure a healthier and happier life for you</p>
                    </div>
                </div>
            </section>

            {/* <div className="endo_rating reno_rating">
                <Rating/>
            </div> */}

            <div className="reno_footer cardio_footer">
                <Mainfooter/>
            </div>

        </div>
    );
};

export default Cardio;