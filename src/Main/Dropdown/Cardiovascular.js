import React, { useEffect } from 'react';
import './Cardiovascular.css'
import Rating from './Rating';
import Mainfooter from '../Mainfooter';
import CountUpSection from './Count';
import Surgeries from './Surgeries';

const Cardiovascular = () => {
    const statics = 'Statistics 2023-24:'
    const maxCounts = [95, 98, 2,100]; // Maximum count values for each card
    const count_names =[ 'Successful Procedures','Patient Satisfaction','Recovery Time in weeks','Advanced Imaging Diagnostics']
    const data = 'Join us at the forefront of vascular care. The Department of Peripheral Vascular Sciences at Asian Vascular Hospital is dedicated to ensuring your vascular health and well-being. Contact us today to schedule a consultation and experience the difference in vascular care.'
    
    const sur_head = 'Cardiovascular Sciences and CT Surgeries'

    useEffect(()=>{
        document.title = 'Cardio Vascular Sciences / CT Surgeries '
    },[])

    return (
        <div>
            <div className="sur_head_page">
                <Surgeries sur_head={sur_head}/>
            </div>
            <section id='Cardiovacular'>
                <div className="cardio_head"  data-aos="fade-right">
                    {/* <h1>Cardiovascular Sciences and CT Surgeries</h1> */}
                    <p>Welcome to the Department of Cardiovascular Sciences and CT Surgeries at Asian Vascular Hospital, Hyderabad – a hub of excellence in heart care and cutting-edge CT surgical interventions. Our dedicated team of specialists is committed to providing unparalleled cardiovascular care, utilizing state-of-the-art technology and innovative surgical techniques.</p>
                </div>
            </section>

            <section id='pher_services' className='pher_services_2 pher_services_4'>
                <div className="pher_ser_main">
                    <div className="" data-aos="fade-right">
                    <h1 className='pher_ser_main_head pher_ser_main_head_2'>Why Choose Our Cardiovascular Sciences Department?</h1>
                    </div>
                <div className="pher_ser pher_ser_2">
                    <div className="ser_card ser_card_2"  data-aos="fade-up">
                        <h1>Expertise</h1>
                        <p>Our team consists of highly skilled and experienced cardiovascular surgeons, interventional cardiologists, and support staff dedicated to delivering world-class care.</p>
                    </div>

                    <div className="ser_card ser_card_2" data-aos="fade-up">
                        <h1>Advanced Technology</h1>
                        <p>We pride ourselves on staying at the forefront of medical technology. Our department is equipped with the latest diagnostic tools, imaging equipment, and surgical technologies to ensure precise and effective treatments</p>
                    </div>

                    <div className="ser_card ser_card_2" data-aos="fade-up">
                        <h1>Comprehensive Care</h1>
                        <p>From routine check-ups to complex CT surgeries, we offer a comprehensive range of cardiovascular services, ensuring that every patient receives personalized and targeted care.</p>
                    </div>
                </div>
                
                </div>
            </section>

            <div className="">
                <CountUpSection maxCounts={maxCounts} count_names={count_names} data={data} statics={statics}/>
            </div>

            <div className="Cardiorating">
                <Rating/>
            </div>
            
            <div className="Cardio_footer">
                <Mainfooter/>
            </div>

        </div>
    );
};

export default Cardiovascular;