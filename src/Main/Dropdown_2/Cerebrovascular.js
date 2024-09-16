import React, { useEffect } from 'react';
import './Cerebrovascular.css'
import Imagesec from '../Dropdown/Imagesec';
// import Rating from '../Dropdown/Rating';
import Mainfooter from '../Mainfooter';
import Surgeries from '../Dropdown/Surgeries';

const Cerebrovascular = () => {
    const txt = 'At Asian Vascular Hospital in Hyderabad, we take pride in offering state-of-the-art cerebrovascular procedures, utilizing cutting-edge technology and a team of highly skilled vascular specialists. Our commitment to excellence and patient-centric care has established us as a leading institution for a range of cerebrovascular interventions.'
    const image = 'https://asianvascular.in/wp-content/uploads/2024/02/image-14.png'
    
    const sur_head = 'Cerebrovascular Procedures'


    useEffect(()=>{
        document.title = 'Cerebrovascular Procedures'
    },[])

    return (
        <div>
                        <div className="sur_head_page">
                <Surgeries sur_head={sur_head}/>
            </div>

            <div className="image_component">
                <Imagesec txt={txt} image={image} />
            </div>

            <section className='cerebro_sec'data-aos="fade-up">
                <div className="">
                    <div className="cere_txt_1">
                        <div className="cere_txt">
                            <h6>1. Carotid Endarterectomy:</h6>
                            <p>Carotid Endarterectomy is a surgical procedure designed to treat carotid artery disease, a condition that can lead to stroke. Our team of vascular surgeons at Asian Vascular Hospital is equipped with extensive experience and expertise in performing Carotid Endarterectomy with precision and care. The procedure involves removing the plaque that accumulates within the carotid arteries, thus reducing the risk of stroke and improving blood flow to the brain. Patients can trust our dedicated team to provide personalized care and a seamless recovery process.</p>
                        </div>
                        <div className="cere_txt">
                            <h6>2. Carotid Bypass:</h6>
                            <p>Carotid Bypass is a specialized procedure aimed at restoring blood flow to the brain by creating a bypass around a blocked or narrowed carotid artery. Our vascular surgeons at Asian Vascular Hospital are at the forefront of innovation in this field, employing advanced techniques to ensure optimal outcomes for our patients. With a focus on minimally invasive approaches whenever possible, we prioritize patient comfort and swift recovery. Trust our experts to deliver comprehensive care and exceptional results in Carotid Bypass procedures.</p>
                        </div>
                        <div className="cere_txt">
                            <h6>3. Carotid Angioplasty and Stenting:</h6>
                            <p>Carotid Angioplasty and Stenting offer a less invasive alternative for treating carotid artery disease. Our skilled interventional vascular specialists at Asian Vascular Hospital employ this technique to widen narrowed arteries and place stents to keep them open, promoting improved blood flow to the brain. This approach, known for its reduced recovery time and enhanced patient comfort, exemplifies our commitment to utilizing the latest advancements in vascular care. Patients can be confident in the hands of our expert team for personalized treatment plans tailored to their unique needs.</p>
                        </div>
                    </div>
                    <div className="cere_txt_2">
                        <h6>Why Choose Asian Vascular Hospital:</h6>

                        <ul>
                            <li><b>Specialized Expertise:</b> <span>Our vascular specialists bring a wealth of experience in cerebrovascular procedures, ensuring the highest standards of care.</span></li>
                            <li><b>Cutting-edge Technology:</b> <span> We invest in the latest technology and techniques to provide our patients with the most advanced and effective treatments available.</span></li>
                            <li><b>Patient-Centric Approach</b> <span>At Asian Vascular Hospital, we prioritize patient well-being and comfort, offering personalized care plans and support throughout the treatment journey.</span></li>
                            <li><b>Comprehensive Services: </b> <span>Beyond the aforementioned cerebrovascular procedures, our hospital offers a range of vascular services, ensuring comprehensive care for all our patients.</span></li>
                        </ul>

                        <p>Experience the difference in cerebrovascular care at Asian Vascular Hospital in Hyderabad – where expertise meets compassion for a healthier tomorrow.</p>
                    </div>
                </div>
            </section>
{/* 
            <div className="endo_rating">
                <Rating/>
            </div> */}

            <div className="venous_footer">
                <Mainfooter/>
            </div>

        </div>
    );
};

export default Cerebrovascular;