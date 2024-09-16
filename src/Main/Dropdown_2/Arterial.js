import React, { useEffect } from 'react';
import './Arterial.css'
import Imagesec from '../Dropdown/Imagesec';
import Rating from '../Dropdown/Rating';
import Mainfooter from '../Mainfooter';
import Surgeries from '../Dropdown/Surgeries';

const Arterial = () => {
    const txt = 'Welcome to Asian Vascular Hospital, a leading healthcare institution in Hyderabad specializing in state-of-the-art arterial surgeries. Our dedicated team of experienced vascular surgeons and cutting-edge facilities make us a trusted choice for individuals seeking comprehensive vascular care.'
    const image = 'https://asianvascular.in/wp-content/uploads/2024/02/image-6.png'

    const sur_head = 'Arterial Surgeries'
    useEffect(()=>{
        document.title = 'Arterial Surgeries'
    },[])

    return (
        <div>
            <div className="sur_head_page">
                <Surgeries sur_head={sur_head}/>
            </div>
            
            
            <div className="">
                <Imagesec  txt={txt} image={image} />
            </div>

            <section className='art_sec' data-aos="fade-up">
                <div className="art_txt_main">
                    <h3>Arterial Surgeries Services</h3>
                    <div className="art_txt">
                        <ol>
                            <li><b>Aorta Bifemoral Bypass:</b> <span>At Asian Vascular Hospital, we offer Aorta Bifemoral Bypass surgeries to address a range of vascular conditions. This procedure involves rerouting blood flow around a blocked or narrowed section of the aorta, ensuring improved blood circulation to the lower extremities. Our skilled surgeons utilize advanced techniques to enhance the success rates of this critical procedure.</span></li>
                            <li><b>Aorto Iliac Bypass: </b> <span>Our hospital excels in performing Aorto Iliac Bypass surgeries, a crucial intervention for patients with compromised blood flow to the lower abdominal and pelvic regions. Our team leverages the latest technologies and evidence-based practices to optimize outcomes and promote faster recovery for our patients.</span></li>
                            <li><b>Femero Popliteal Bypass:</b> <span>Asian Vascular Hospital is renowned for its expertise in Femero Popliteal Bypass surgeries. This procedure aims to restore blood flow to the lower leg by bypassing obstructed or narrowed arteries. Our surgeons are committed to providing personalized care and employing minimally invasive techniques whenever possible for a smoother recovery experience.</span></li>
                            <li><b>Femero Distal Bypass:</b> <span>Addressing peripheral arterial disease, our hospital offers Femero Distal Bypass surgeries to enhance blood flow to the lower extremities. With a focus on precision and patient well-being, our experienced vascular surgeons utilize advanced technologies to achieve optimal results in this intricate procedure.</span></li>
                        </ol>
                    </div>
                </div>
            </section>

            <section >
                <div className="art_txt_main art_txt_main_2">
                    <h3>Specialties at Asian Vascular Hospital</h3>
                    <div className="art_txt art_txt_2">
                        <ul>
                            <li><b>Aorta Bifemoral Bypass:</b> <span>At Asian Vascular Hospital, we offer Aorta Bifemoral Bypass surgeries to address a range of vascular conditions. This procedure involves rerouting blood flow around a blocked or narrowed section of the aorta, ensuring improved blood circulation to the lower extremities. Our skilled surgeons utilize advanced techniques to enhance the success rates of this critical procedure.</span></li>
                            <li><b>Aorto Iliac Bypass: </b> <span>Our hospital excels in performing Aorto Iliac Bypass surgeries, a crucial intervention for patients with compromised blood flow to the lower abdominal and pelvic regions. Our team leverages the latest technologies and evidence-based practices to optimize outcomes and promote faster recovery for our patients.</span></li>
                            <li><b>Femero Popliteal Bypass:</b> <span>Asian Vascular Hospital is renowned for its expertise in Femero Popliteal Bypass surgeries. This procedure aims to restore blood flow to the lower leg by bypassing obstructed or narrowed arteries. Our surgeons are committed to providing personalized care and employing minimally invasive techniques whenever possible for a smoother recovery experience.</span></li>
                            <li><b>Femero Distal Bypass:</b> <span>Addressing peripheral arterial disease, our hospital offers Femero Distal Bypass surgeries to enhance blood flow to the lower extremities. With a focus on precision and patient well-being, our experienced vascular surgeons utilize advanced technologies to achieve optimal results in this intricate procedure.</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* <div className="art_rating">
                <Rating/>
            </div> */}

            <div className="venous_footer">
                <Mainfooter/>
            </div>

        </div>
    );
};

export default Arterial;