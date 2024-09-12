import React, { useEffect } from 'react';
import './Peripheral.css'
import CountUpSection from './Count';
import Mainfooter from '../Mainfooter';
import Rating from './Rating';
import Surgeries from './Surgeries';

const Peripheral = () => {
    const statics = 'Statistics 2023-24:'
    const maxCounts = [95, 98, 2]; // Maximum count values for each card
    const count_names =[ 'Successful Procedures','Patient Satisfaction','Average Recovery Time in weeks']
    const data = 'Join us at the forefront of vascular care. The Department of Peripheral Vascular Sciences at Asian Vascular Hospital is dedicated to ensuring your vascular health and well-being. Contact us today to schedule a consultation and experience the difference in vascular care.'

    const sur_head = 'Pheriperal Vascular sciences'
    
    useEffect(()=>{
        document.title = 'Pheriperal Vascular sciences'
    },[])

    return (
        <div>
            <div className="sur_head_page">
                <Surgeries sur_head={sur_head}/>
            </div>
            <section id='Peripheral'>
                <div className="">
    
                </div>
                <div className="pher_about ">
                <div className="pher_image" data-aos="fade-right">
                        <img src="https://asianvascular.in/wp-content/uploads/2023/12/New-Project-2023-12-21T110825.484.png" alt="" />
                    </div>

                    <div className="pher_txt">
                        <div className="Pher_txt_2" data-aos="fade-up">
                            {/* <h1 style={{fontSize:"40px"}}>Peripheral Vascular Sciences</h1> */}
                            <p>Welcome to the Department of Peripheral Vascular Sciences at Asian Vascular Hospital, Hyderabad—a dedicated center for cutting-edge vascular care. Our team of experienced and skilled vascular specialists is committed to providing comprehensive and innovative solutions for a wide range of peripheral vascular conditions.</p>
                        </div>
                        <div className="Pher_txt_2" data-aos="fade-up">
                            <h1>About Peripheral Vascular Sciences Hyderabad:</h1>
                            <p>At the heart of our department is a commitment to excellence in patient care, research, and education. Our specialists are leaders in the field, utilizing the latest advancements in vascular science to offer personalized treatment plans for each patient.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section id='pher_services'>
                <div className="pher_ser_main">
                    <div className="" data-aos="fade-right">
                    <h1 className='pher_ser_main_head'>Our Services</h1>
                    </div>
                <div className="pher_ser" data-aos="fade-up">
                    <div className="ser_card">
                        <h1>Diagnostic Imaging</h1>
                        <p>Utilizing state-of-the-art imaging techniques to accurately diagnose vascular conditions.</p>
                    </div>

                    <div className="ser_card" data-aos="fade-up">
                        <h1>Minimally Invasive Procedures</h1>
                        <p>Offering advanced, less invasive interventions to minimize recovery time and discomfort.</p>
                    </div>

                    <div className="ser_card" data-aos="fade-up">
                        <h1>Vascular Surgery</h1>
                        <p>Providing surgical solutions for complex vascular issues with a focus on patient outcomes.</p>
                    </div>
                </div>
                
                </div>
            </section>

            <section id='pher_services' className='pher_services_2'>
                <div className="pher_ser_main">
                    <div className=""  data-aos="fade-right">
                    <h1 className='pher_ser_main_head pher_ser_main_head_2'>Why Choose Asian Vascular Hospital?</h1>
                    </div>
                <div className="pher_ser pher_ser_2">
                    <div className="ser_card ser_card_2"  data-aos="fade-up">
                        <h1>Experienced Specialists</h1>
                        <p>Our team comprises highly skilled vascular surgeons, interventional radiologists, and other specialists who bring extensive experience to the diagnosis and treatment of peripheral vascular diseases.</p>
                    </div>

                    <div className="ser_card ser_card_2"  data-aos="fade-up">
                        <h1>State-of-the-Art Facilities</h1>
                        <p>Equipped with the latest technology, our hospital ensures that patients receive the most advanced and effective treatments available</p>
                    </div>

                    <div className="ser_card ser_card_2"  data-aos="fade-up">
                        <h1>Patient-Centric Approach</h1>
                        <p>We prioritize patient well-being, focusing on individualized care plans that take into account each patient's unique medical history and needs.</p>
                    </div>
                </div>
                
                </div>
            </section>
            
            <div className="">
                <CountUpSection maxCounts={maxCounts} count_names={count_names} data={data} statics={statics}/>
            </div>

            
            <div className="">
                <Rating/>
            </div>

            <div className="count_footer">
                <Mainfooter/>
            </div>




        </div>
    );
};

export default Peripheral;