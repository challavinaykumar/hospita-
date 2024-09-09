import React from 'react';
import './Insurance.css'
import insurance from '../Images/insurance.png'

const Insurance = () => {
    return (
        <div className='ins_sec' data-aos="fade-up">
            {/* <h1>Insurances and Health Sevices Cover</h1> */}
            <section className="ins_main">
                <div className="" >
                    <img src={insurance} alt="" className='ins'/>
                </div>
                <div className="ins_imgs" >
                    <img src="https://salute.vamtam.com/wp-content/uploads/2021/06/logos-1.jpg" alt="" />
                    <img src="https://salute.vamtam.com/wp-content/uploads/2021/06/logos-2.jpg" alt="" />
                    <img src="https://salute.vamtam.com/wp-content/uploads/2021/06/logos-3.jpg" alt="" />
                    <img src="https://salute.vamtam.com/wp-content/uploads/2021/06/logos-4.jpg" alt="" />
                    <img src="https://salute.vamtam.com/wp-content/uploads/2021/06/logos-5.jpg" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Insurance;