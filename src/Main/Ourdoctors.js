import React, { useEffect } from 'react';
import './Ourdoctors.css'
import Doctors from './Doctors';
import Mainfooter from './Mainfooter';
// import doc1 from '../Images/SUB01216.png'
import doc2 from '../Images/SUB00967.png'
import doc3 from '../Images/SUB01003.png'
import doc4 from '../Images/SUB01054.png'
import doc5 from '../Images/SUB01144.png'
import doc6 from '../Images/SUB00807.png'
import doc7 from '../Images/SUB00903.png'

const Ourdoctors = () => {
    const img = 'https://www.syncpointsolutions.com/assets/images/healthcare/hc.webp'
    const txt = 'Providers'

    

    useEffect(()=>{
        document.title = 'Our doctors'
    },[])

    return (
        <div>
            <Doctors image={img} txt={txt}/>

            <section id='meet'>
                <div className="meet_main">
                    <div className="meet_left" data-aos="fade-right">
                        <h1>Meet Our Specialists</h1>
                    </div>
                    <div className="meet_right" data-aos="fade-up">
                        <h3>Our display of pride does not come from empty promises but from our prestigious panel of Doctors who savour challenges as a daily snack. The idioms that define our panel are patient-friendly, patient-centric, masters, artists, compassionate and excellence.</h3>
                        <p>We are proud of our outstanding medical staff of highly-skilled physicians.
                        We provide state-of-the-art care in areas such as family medicine, internal medicine, allergy, asthma and otolaryngology (ENT), cardiology, emergency and trauma medicine, nephrology, neurology, obstetrics and gynecology, oncology and hematology, ophthalmology, orthopedics, pediatrics, podiatry, pulmonology, radiology, surgery and urology.</p>
                    </div>
                </div>

            </section>

            {/* <section className="meet_images_comand">
                    <div className="meet_images_main">
                        <div className="meet_sub" data-aos="zoom-in">
                            <img src="https://asianvascular.in/wp-content/uploads/2019/09/dr-praveen-2.jpeg" alt="" />
                            <div className="meet_images_txt">
                            <h3>
                            Dr. G.V. Praveen Kumar</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>
                            Vascular Sciences</small>
                        </div>

                        <div className="meet_sub" data-aos="zoom-in">
                            <img src="https://asianvascular.in/wp-content/uploads/2019/09/Nirupama.jpeg" alt="" />
                            <div className="meet_images_txt">
                            <h3>
                            Are Nirupama Devi</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>
                            Pulmonology</small>
                        </div>

                        <div className="meet_sub" data-aos="zoom-in">
                            <img src="https://asianvascular.in/wp-content/uploads/2019/09/image.jpg" alt="" />
                            <div className="meet_images_txt">
                            <h3>
                            Dr. J. Venkateshwarulu</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>
                            Radio Diagnosis & Vascular Sciences</small>
                        </div>

                        <div className="meet_sub" data-aos="zoom-in">
                            <img src="https://asianvascular.in/wp-content/uploads/2019/09/Hidayatulla.jpeg" alt="" />
                            <div className="meet_images_txt">
                            <h3>Dr. Hidayathullah</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>Specialist</small>
                        </div>

                        <div className="meet_sub" data-aos="zoom-in">
                            <img src="https://asianvascular.in/wp-content/uploads/2019/09/Narsappa.jpeg" alt="" />
                            <div className="meet_images_txt">
                            <h3>Dr. Narsappa</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>Specalist</small>
                        </div>

                        <div className="meet_sub" data-aos="zoom-in">
                            <img src="https://asianvascular.in/wp-content/uploads/2019/09/Shoeb.jpeg" alt="" />
                            <div className="meet_images_txt">
                            <h3>Dr. Shoeb Khan</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>Specalist</small>
                        </div>

                    </div>
                </section> */}

                           <section className="meet_images_comand">
                    <div className="meet_images_main">
                        <div className="meet_sub" data-aos="zoom-in">
                            <img src={doc2} alt="" />
                            <div className="meet_images_txt">
                            <h3>
                            Dr. G.V. Praveen Kumar</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>
                            Vascular Sciences</small>
                        </div>

                        <div className="meet_sub" data-aos="zoom-in">
                            <img src={doc6} alt="" />
                            <div className="meet_images_txt">
                            <h3>
                            Are Nirupama Devi</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>
                            Pulmonology</small>
                        </div>

                        <div className="meet_sub" data-aos="zoom-in">
                            <img src={doc3} alt="" />
                            <div className="meet_images_txt">
                            <h3>
                            Dr. J. Venkateshwarulu</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>
                            Radio Diagnosis & Vascular Sciences</small>
                        </div>

                        <div className="meet_sub" data-aos="zoom-in">
                            <img src={doc4} alt="" />
                            <div className="meet_images_txt">
                            <h3>Dr. Hidayathullah</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>Specialist</small>
                        </div>

                        <div className="meet_sub" data-aos="zoom-in">
                            <img src={doc5} alt="" />
                            <div className="meet_images_txt">
                            <h3>Dr. Narsappa</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>Specalist</small>
                        </div>

                        <div className="meet_sub" data-aos="zoom-in">
                            <img src={doc7} alt="" />
                            <div className="meet_images_txt">
                            <h3>Dr. Shoeb Khan</h3>
                            <div className="meet_brands">
                                <i className='fa-brands fa-facebook'></i>
                                <i className='fa-brands fa-skype'></i>
                            </div>
                            </div>
                            <small>Specalist</small>
                        </div>

                    </div>
                </section>



                <section className='reviews_carousel' data-aos="fade-right">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item active rv_head">
      <h1>WHAT OUR PATIENTS SAY</h1>
      <div className="rv_content">
      <i class="fa-solid fa-quote-left"></i>
      <p><i>I highly recommend them to anyone needing medical attention. Reservations are easy to set up via their app and recommended to avoid wait time. Yelp only allows for 5 stars. I would give them a 10.
Gary
Carbon Health San Francisco Patient
I highly recommend them to anyone needing medical attention. Reservations are easy to set up via their app and recommended to avoid wait time. Yelp only allows for 5 stars. I would give them a 10.</i></p>
      </div>
      <div className="rv_gary">
        <h4><i>Gary</i></h4>
        <small><i>Carbon Health San Fransisco Patient</i></small>
      </div>
    </div>
    
    <div class="carousel-item active rv_head">
      <h1>WHAT OUR PATIENTS SAY</h1>
      <div className="rv_content">
      <i class="fa-solid fa-quote-left"></i>
      <p><i>I highly recommend them to anyone needing medical attention. Reservations are easy to set up via their app and recommended to avoid wait time. Yelp only allows for 5 stars. I would give them a 10.
Gary
Carbon Health San Francisco Patient
I highly recommend them to anyone needing medical attention. Reservations are easy to set up via their app and recommended to avoid wait time. Yelp only allows for 5 stars. I would give them a 10.</i></p>
      </div>
      <div className="rv_gary">
        <h4><i>Gary</i></h4>
        <small><i>Carbon Health San Fransisco Patient</i></small>
      </div>
    </div>

    <div class="carousel-item active rv_head">
      <h1>WHAT OUR PATIENTS SAY</h1>
      <div className="rv_content">
      <i class="fa-solid fa-quote-left"></i>
      <p><i>I highly recommend them to anyone needing medical attention. Reservations are easy to set up via their app and recommended to avoid wait time. Yelp only allows for 5 stars. I would give them a 10.
Gary
Carbon Health San Francisco Patient
I highly recommend them to anyone needing medical attention. Reservations are easy to set up via their app and recommended to avoid wait time. Yelp only allows for 5 stars. I would give them a 10.</i></p>
      </div>
      <div className="rv_gary">
        <h4><i>Gary</i></h4>
        <small><i>Carbon Health San Fransisco Patient</i></small>
      </div>
    </div>

  </div>
</div>
</section>

<div className="our_doctor_footer">
    <Mainfooter/>
</div>

        </div>
    );
};

export default Ourdoctors;