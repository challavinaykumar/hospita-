/** @format */

import React, { useEffect} from "react";
// import Nav from '../Components/Nav';
import "./Home.css";
import Homefooter from "./Homefooter";
import Rating from "./Dropdown/Rating";
import Insurance from "./Insurance";
// import Header from '../Components/Header';
// import { Link } from 'react-router-dom';

const Home = () => {
  // const read_more = useRef()
  // const read_btn = useRef()
  
  // const read_click = ()=>{
  //   read_more.current.style.display = 'block'
  //   read_btn.current.style.display = 'none'
  // }

  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <section className="home">
        {/* <img src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17820.jpg?t=st=1723808687~exp=1723812287~hmac=fde4a9c5430cea9bec263e2b167099db0d0ec8005ea6f923dda187e4ab870dcf&w=996" alt="" /> */}
        <div className="home_txt">
          <h1>
            Leading Specialists in <br />
            <span>Vascualr Treatments </span>
            <br /> in india
          </h1>
        </div>
      </section>

      {/* about */}

      <section className="">
        <div className="d-flex about_main">
          <div className="abt_txt" data-aos="fade-right">
            <p>About</p>
            <div className="abt_txt_head">
              <h1>Why Asian Vascular </h1>
              <h1>Hospitals?</h1>
            </div>
          </div>
          <div className="abt_image_main d-flex gap-5 align-items-center">
            <div className="abt_image" data-aos="fade-up">
              <img
                className="abt_img"
                src="https://salute.vamtam.com/wp-content/uploads/2021/06/iStock-1298114811.jpg"
                alt=""
              />
              <div className="" data-aos="fade-up">
                <p className="circle_txt">High quality care</p>
              </div>
            </div>
            <div className="abt_lrm" data-aos="fade-up">
              <p style={{textAlign:'justify'}}>
              We are distinctive from a regular commercial hospital, we've been treating the patients with the utmost care and precision <b>manoeuvred</b> over 20,000 successful surgeries since our short emergence and nursing the Patients back to their confident healthy selves. 
Apart from regular surgeries, we heaved complicated cases which kept defying the odds persistently where other hospitals have given up on the patients significantly impacting their golden lives.

              </p>
              {/* <p style={{textAlign:'justify'}} className="read_hide" ref={read_more}>We are distinctive from a regular commercial hospital, we've been treating the patients with the utmost care and precision manoeuvred over 20,000 successful surgeries since our short emergence and nursing the Patients back to their confident healthy selves. 
Apart from regular surgeries, we heaved complicated cases which kept defying the odds persistently where other hospitals have given up on the patients significantly impacting their golden lives.
</p> */}
              <small style={{cursor:'pointer'}} >
                READ MORE <i class="fa-solid fa-angle-right"></i>
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="home_ser" data-aos="fade-up">
        <div className="d-grid justify-content-around">
          <div className=" ser_main d-flex align-items-center gap-5">
            <div className="ser_sub d-flex gap-5 align-items-center">
              <div className="ser_images ser_images_1" data-aos="fade-right">
                <img
                  src="https://ysm-res.cloudinary.com/image/upload/ar_1:1,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yms/prod/4760f4d2-d982-40b7-a339-3af67e354105"
                  alt=""
                />
                <h1>Vascular</h1>
              </div>
              <div className="ser_txt " data-aos="fade-up">
                <p>Services</p>
                <h1 className="hm_ser">
                At Asian Vascular Hospitals, excel would belittle our Mastership in providing a Pinnacle of Healthcare in these critical Vascular and Cardiovascular Departments.
                </h1>
              </div>
            </div>
            <div className="ser_images ser_images_2" data-aos="fade-up">
              <img
                src="https://c-care.com/mu/wp-content/uploads/sites/2/2022/05/Cardiology-top-paragraph.jpg"
                alt=""
              />
              <h1>Cardiology</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="asian_vas">
        <div className="d-flex about_main abt_main_2 gap-4">
          <div className="abt_txt abt_txt_2">
            {/* <p>About</p> */}
            <div className="abt_txt_head abt_txt_head_2" data-aos="fade-right">
              <h1>Asian Vascular Hospital is </h1>
              <h1>committed to quality patient care</h1>
            </div>
          </div>
          <div className="abt_image_main d-flex gap-5 align-items-center">
            <div className="abt_image abt_image_2" data-aos="fade-right">
              <div className="abt_image_2_sub">
                <img
                  className="abt_img"
                  src="https://asianvascular.in/wp-content/uploads/2022/05/image-3.png"
                  alt=""
                />
              </div>
              <p className="circle_txt">High quality care</p>
            </div>
            <div className="abt_lrm" data-aos="fade-up">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                mollitia quasi modi corporis aliquid recusandae ipsa, iste
                quisquam, reprehenderit minima adipisci rem dicta aut eum,
                officiis qui enim dolor blanditiis.
              </p>
              {/* <small>READ MORE <i class="fa-solid fa-angle-right"></i></small> */}
            </div>
          </div>
        </div>
      </section>

      <section className="doctors" data-aos="fade-up">
        <div className=" dox_sec text-center">
          <div className="doctors_head mb-5" data-aos="fade-up">
            <p>Оur Doctors</p>
            <h1>Meet Our Specialists</h1>
          </div>
          <div className="doc_main d-flex justify-content-center">
            <div className="doctors_images doctors_images_1" data-aos="zoom-in">
              <img
                src="https://asianvascular.in/wp-content/uploads/2019/09/dr-praveen-2.jpeg"
                alt=""
              />
              <div className="doc_txt">
                <h1 className="fs-3">Dr. G.V. Praveen Kumar</h1>
                <p>Vascular Sciences</p>
              </div>
            </div>

            <div className="doctors_images doctors_images_2" data-aos="zoom-in">
              <img
                src="https://asianvascular.in/wp-content/uploads/2019/09/Nirupama.jpeg"
                alt=""
              />
              <div className="doc_txt doc_txt_2">
                <h1 className="fs-3">Are Nirupama Devi</h1>
                <p>Pulmonology</p>
              </div>
            </div>

            <div className="doctors_images doctors_images_3" data-aos="zoom-in">
              <img
                src="https://asianvascular.in/wp-content/uploads/2019/09/Dr.-Venkateshwarlu.jpeg"
                alt=""
              />
              <div className="doc_txt">
                <h1 className="fs-3">Dr. J. Venkateshwarulu</h1>
                <p>Radio Diagnosis & Vascular Sciences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="concern" data-aos="fade-up">
        <div className="d-flex about_main about_main_3">
          <div className="abt_txt" data-aos="fade-right">
            {/* <p>About</p> */}
            <div className="abt_txt_head abt_txt_head_3">
              <h1>Whatever </h1>
              <h1>Your Concern, Our Mastery!</h1>
            </div>
          </div>
          <div className="abt_image_main d-flex gap-5 align-items-center">
            <div className="abt_image abt_image_3" data-aos="fade-right">
              <img
                className="abt_img"
                src="https://salute.vamtam.com/wp-content/uploads/2021/06/iStock-1189362090.jpg"
                alt=""
              />
              {/* <p className='circle_txt'>High quality care</p> */}
            </div>
            <div className="abt_lrm abt_lrm_3" data-aos="fade-up">
              <p>
              We stand by our word when we proclaim our proficiency in handling over 20,000 surgeries comprising various complications, concerns and a broad spectrum of rejected cases of other prominent hospitals.
              </p>

              <ul>
                <li>
                Varicose Veins
                </li>
                <li>
                Varicose Veins
                </li>
                <li>
                Deep Vein Thrombosis (DVT)
                </li>
                <li>Aneurysms</li>
                <li> Peripheral Neuropathy</li>
                <li>Vascular Malformations</li>
              </ul>

              <a href="/#" className="btn btn_contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <Rating/>
      </div>

      <div className="">
        <Insurance/>
      </div>

      {/* <div className="endo_rating reno_rating">
                <Rating/>
            </div> */}

      <div className="">
        <Homefooter />
      </div>
    </div>
  );
};

export default Home;
