import React from 'react';
import './Insurance.css'
import insurance from '../Images/insurance.png'

const Insurance = () => {
    return (
        <div className='ins_sec' data-aos="fade-up">
            <div  style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
            <h3 style={{textAlign:"center",width:"800px",fontStyle:"italic"}}>"Quality care should be accessible to everyone. To abide by this purpose, we engage an extensive range of insurance agencies."</h3>
            </div>
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