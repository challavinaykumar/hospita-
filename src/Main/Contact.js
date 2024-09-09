import React, { useEffect } from 'react';
import './Contact.css'
import Doctors from './Doctors';
import { Link } from 'react-router-dom';
import Mainfooter from './Mainfooter';

const Contact = () => {
    
    const img = 'https://i0.wp.com/island-iv.com/wp-content/uploads/2020/05/Untitled-20-scaled-1.jpg?resize=1200%2C362&ssl=1'
    const txt = 'Contacts'

    useEffect(()=>{
        document.title = 'Contacts'
    },[])

    return (
        <div>
            
                <Doctors image={img} txt={txt}/>


                <section id='Contact'>
                    <div className="cnt_cmnd">
                        <div className="cnt_main" data-aos="fade-right">
                            <div className="cnt_sub">
                                <div className="cnt_hd">
                                    <h1>Address</h1>

                                <div className="cnt_add_txt">
                                    <p>55 Huntington Ave Ste / Boston, USA  </p>
                                    <p className='cnt_num'><span>Phone Number:</span><Link>+1 541-754-3010</Link></p>
                                    <p className='cnt_mail'><span>E-Mail:</span><Link> Info@salute.com</Link></p>
                                </div>


                                <div className="cnt_add_txt_2">
                                    <h3>VAT Number: 001863260B93</h3>
                                    <p>The hospital has a parking lot for patients and visitors.</p>

                                    <p> The hospital team will appreciate if those whose health condition allow, take the drop off option without parking or use other transport means or alternative parking lots in the area.</p>
                                </div>

                                </div>
                            </div>


                        </div>
                        <div className="cnt_main" data-aos="fade-up">
                            <div className="cnt_sub">
                                <div className="cnt_hd">
                                    <h1>Contact Form</h1>

                                    <div className="cnt_cnt_form">
                                        <input type="text" placeholder='First Name'/>
                                        <input type="text" placeholder='Family Name'/>
                                        <input type="text" placeholder='Phone Number'/>
                                        <input type="text" placeholder='Email'/>
                                        <input type="text" placeholder='Subject'/>
                                        <textarea name="" id="" placeholder='Questions'></textarea>
                                        <Link className='btn send_btn'><i className='fa-solid fa-envelope'></i> Send</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="cnt_main" data-aos="fade-right">
                            <div className="cnt_sub">
                                <div className="cnt_hd">
                                    <h1>Telephone Directory</h1>
                                    
                                    <div className="tel_txt">
                                        <p>Main Hospital Number: 718-000-000</p>
                                        <p>Admitting: 718-000-000</p>
                                        <p>Billing: 718-000-000</p>
                                        <p>Bone & Joint Center (Orthopedics): 718-000-000</p>
                                        <p>Caregiver 24-Hour Hotline: 718-000-000</p>
                                        <p>Case Management / Social Work: 718-000-000</p>
                                        <p>Children’s Hospital (Pediatrics): 718-000-000</p>
                                        <p>Medical Records: 718-000-000</p>
                                        <p>Patient Information: 718-000-000</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="cnt_main" data-aos="fade-up">
                            <div className="cnt_sub">
                                <div className="cnt_hd">
                                    <h1>Call Center</h1>
                                </div>
                                <div className="call_txt">
                                        <p>Call: 718-000-000</p>
                                        <p>24/7, RNs connect you with specialists</p>
                                        <p>Doctor’s Office to Hospital</p>
                                        <p>Hospital to Hospital</p>
                                        <p>All service lines accepted</p>
                                </div>

                                <div className="cnt_hd cnt_hd_2">
                                    <h1>Patient Concerns & Complaints</h1>
                                </div>

                                <div className="call_txt">
                                    <p>We are dedicated to providing quality health care to patients of all faiths and backgrounds. If you have a concern regarding the care received, we encourage you to report it to your attending physician, or you may contact our Patient Relations Department. </p>
                                    <p>One of our contact agents will make sure to record your concern and address it properly. Once we have investigated internally your case, we will contact you back for information and further agreements. </p>
                                </div>

                            </div>
                        </div>


                    </div>
                </section>


            <div className="Contact_foot">
                <Mainfooter/>
            </div>

        </div>
    );
};

export default Contact;
