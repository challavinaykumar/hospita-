import React, { useEffect } from 'react';
import './Pulmonology.css'
import CountUpSection from './Count';
import Rating from './Rating';
import Mainfooter from '../Mainfooter';

const Pulmonology = () => {
    const statics = 'Statistics 2023-24:'
    const maxCounts = [95, 98, 2,100]; // Maximum count values for each card
    const count_names =[ 'Successful Procedures','Patient Satisfaction','Recovery Time in weeks','Advanced Imaging Diagnostics']
    const data = 'Join us at the forefront of vascular care. The Department of Peripheral Vascular Sciences at Asian Vascular Hospital is dedicated to ensuring your vascular health and well-being. Contact us today to schedule a consultation and experience the difference in vascular care.'

    useEffect(()=>{
        document.title = 'Pulmonology'
    },[])

    return (
        <div>

<section id='Cardiovacular'>
                <div className="cardio_head" data-aos="fade-right">
                    <h1>Pulmonology</h1>
                    <p>Welcome to the Pulmonology Department at Asian Vascular Hospital, Hyderabad – your dedicated partner in respiratory health. Our team of experienced pulmonologists is committed to providing comprehensive and personalized care to patients of all ages.</p>
                </div>
            </section>

            <section id='pher_services' className='pher_services_2 pher_services_4'>
                <div className="pher_ser_main">
                    <div className="" data-aos="fade-right">
                    <h1 className='pher_ser_main_head pher_ser_main_head_2'>Why Choose Our Pulmonology Department?</h1>
                    </div>
                <div className="pher_ser pher_ser_2 pher_ser_3" >
                    <div className="ser_card ser_card_2 ser_card_3" data-aos="fade-up">
                        <h1>Expertise</h1>
                        <p>Our pulmonologists are leaders in the field, bringing years of experience and advanced training to ensure the highest quality of care.</p>
                    </div>

                    <div className="ser_card ser_card_2 ser_card_3" data-aos="fade-up">
                        <h1>Cutting-edge Technology</h1>
                        <p>We invest in the latest diagnostic and therapeutic technologies to deliver accurate and effective treatments.</p>
                    </div>

                    <div className="ser_card ser_card_2 ser_card_3" data-aos="fade-up">
                        <h1>Patient-Centric Approach</h1>
                        <p>At Asian Vascular Hospital, we prioritize your well-being. Our team works collaboratively with patients, ensuring a holistic and personalized treatment plan.</p>
                    </div>
                </div>
                
                </div>
            </section>

            <section id='pher_services' className='pher_services_2 pher_services_4'>
                <div className="pher_ser_main">
                    <div className="" >
                    <h1 className='pher_ser_main_head pher_ser_main_head_2'>Services We Offer:</h1>
                    </div>
                <div className="pher_ser pher_ser_2">
                    <div className="ser_card ser_card_2 ser_card_3" data-aos="fade-up">
                        <h1>Diagnostic Services</h1>
                        <p>State-of-the-art imaging and diagnostic tools for accurate and timely identification of respiratory conditions.</p>
                    </div>

                    <div className="ser_card ser_card_2 ser_card_3" data-aos="fade-up">
                        <h1>Treatment Options</h1>
                        <p>Comprehensive care for a wide range of respiratory issues, including asthma, COPD, pulmonary infections, and more.</p>
                    </div>

                    <div className="ser_card ser_card_2 ser_card_3" data-aos="fade-up">
                        <h1>Interventional Pulmonology</h1>
                        <p>Minimally invasive procedures for targeted and precise treatment.</p>
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

export default Pulmonology;