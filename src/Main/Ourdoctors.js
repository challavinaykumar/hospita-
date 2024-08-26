import React, { useEffect } from 'react';
import './Ourdoctors.css'
import Doctors from './Doctors';
import Mainfooter from './Mainfooter';

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
                        <h3>You, our patients, are our top priority. Our physicians, specialists and support staff are caring, experienced and highly trained in their fields. They are committed to excellence – and more importantly, they are committed to you.</h3>
                        <p>We are proud of our outstanding medical staff of highly-skilled physicians.
                        We provide state-of-the-art care in areas such as family medicine, internal medicine, allergy, asthma and otolaryngology (ENT), cardiology, emergency and trauma medicine, nephrology, neurology, obstetrics and gynecology, oncology and hematology, ophthalmology, orthopedics, pediatrics, podiatry, pulmonology, radiology, surgery and urology.</p>
                    </div>
                </div>

            </section>

            <section className="meet_images_comand">
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