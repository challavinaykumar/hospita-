import React from 'react';
import './Doctors.css'
import { Link } from 'react-router-dom';
import { FaHandHoldingMedical } from "react-icons/fa";



const Doctors = (p) => {
    return (
        <div>
            <div className="get_care">
                <img src={p.image} alt="" />
                <div className="get_contain_main">
                    <div className="get_icons_main">
                    <div className="get_icons">
                        <div className="get_icons_sub d-flex align-items-center justify-content-center gap-3">
                            <i className='fa-solid fa-print'></i>
                            <i className='fa-solid fa-envelope'></i>
                            <i className='fa-solid fa-share'></i>
                        </div>
                    </div>
                    </div>
                <div className="get_care_container">
                    <div className="get_container_sub">
                        <div className="get_txt">
                        <h2>GET CARE</h2>
                        <h1>{p.txt}</h1>
                        </div>

                
                        <div className="get_appoint d-flex justify-content-between align-items-center">
                            <Link className='btn req_btn'>Request Appointement <i className='fa-solid fa-angle-right'></i></Link>
                        <h4 className='d-flex align-items-center gap-3'><FaHandHoldingMedical className='i'/> <span>+1 541-754-3010</span></h4>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;