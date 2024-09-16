import React, { useEffect } from 'react';
import Imagesec from '../Dropdown/Imagesec';
import './Endovascular.css'
import Rating from '../Dropdown/Rating';
import Mainfooter from '../Mainfooter';
import Surgeries from '../Dropdown/Surgeries';

const Endovascular = () => {
    const txt = 'Welcome to Asian Vascular Hospital, a leading institution at the forefront of vascular care in Hyderabad. Our commitment to excellence is embodied in our state-of-the-art facilities, expert medical team, and cutting-edge technologies. One of our specialized services is the realm of Endovascular Arterial Procedures, where we offer advanced interventions to address a spectrum of arterial conditions.'
    const image = 'https://asianvascular.in/wp-content/uploads/2024/02/image-8.png'

    const sur_head = 'Endovascular Aterial Surgeries'


    useEffect(()=>{
        document.title = 'Endovascular Aterial Surgeries'
    },[])

    return (
        <div>
            <div className="sur_head_page">
                <Surgeries sur_head={sur_head}/>
            </div>

             <div className="image_component">
                <Imagesec txt={txt} image={image} />
            </div>

            <section className='endo_vas' data-aos="fade-up">
                <div className="">
                    <div className="endo_txt_main">
                        <h6>Peripheral Angioplasty and Stenting:</h6>
                    <div className="endo_txt">
                        <span className='endo_it'><i>Your Pathway to Optimal Vascular Health</i></span>
                        <p>Peripheral angioplasty and stenting represent a cornerstone of our Endovascular Arterial Procedures, designed to treat conditions affecting the arteries outside the heart and brain. Our skilled team of interventional vascular specialists employs minimally invasive techniques to restore blood flow, alleviate pain, and improve overall vascular health.</p>
                    </div>
                    <div className="endo_txt">
                        <span className='endo_it'><i>The Procedure:</i></span>
                        <p>Peripheral angioplasty involves the use of a catheter equipped with a balloon to widen narrowed or blocked arteries. This technique enhances blood flow and mitigates symptoms associated with peripheral artery disease (PAD). Our experts meticulously analyze each case to tailor a customized treatment plan, ensuring optimal outcomes for every patient.</p>
                        <p>In cases where the arterial blockage is more complex, stenting may be recommended. A stent is a small, mesh-like tube inserted into the artery to support its walls and maintain an open pathway for blood flow. Asian Vascular Hospital boasts a comprehensive range of stent options, allowing our specialists to choose the most suitable one for each patient’s unique anatomy and condition.</p>
                    </div>
                    </div>

                    <div className="endo_txt_2">
                        <p><i>Why Asian Vascular Hospital?</i></p>
                        
                        <ol>
                            <li><b>Expertise:</b> Our team comprises highly skilled and experienced interventional vascular specialists dedicated to delivering personalized care.</li>
                            <li><b>Cutting-edge Technology:</b> We harness the latest advancements in medical technology, ensuring precision and efficacy in our procedures.</li>
                            <li><b>Holistic Approach:</b> Beyond the procedure itself, our approach emphasizes patient education, lifestyle modifications, and long-term follow-up care for comprehensive vascular health.</li>
                            <li><b>Patient-Centric Care:</b> Your well-being is our priority. From diagnosis to recovery, we are committed to providing compassionate and individualized care.</li>
                        </ol>
                    </div>
                    <div className="endo_txt_3">
                        <span><i>Patient-Centric Services:</i></span>
                        <p>Our commitment to excellence extends beyond medical procedures. At Asian Vascular Hospital, we prioritize patient comfort and convenience. From streamlined appointment processes to post-procedure care, our services are designed with your well-being in mind.</p>
                        <p>Whether you are seeking relief from peripheral artery disease or require specialized vascular care, Asian Vascular Hospital in Hyderabad stands as a beacon of excellence, delivering world-class Endovascular Arterial Procedures. Trust us to guide you on your journey towards optimal vascular health.</p>

                    </div>
                </div>
            </section>
            
            {/* <div className="endo_rating">
                <Rating/>
            </div> */}

            <div className="venous_footer">
                <Mainfooter/>
            </div>

        </div>
    );
};

export default Endovascular;