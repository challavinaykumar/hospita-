import React from 'react';
import './Insurance.css'
import insurance from '../Images/insurance.png'
import family_health from '../Images/Insurance/1.Family Health Paln Ltd(FHPL).png' 
import mediassist from '../Images/Insurance/2.Mediassit India Pvt ltd.png' 
import care_general from '../Images/Insurance/3.Care General Insurance Co.Ltd.png' 
import bajaj from '../Images/Insurance/5.Bajaj Allianz.png' 
import reliance_life from '../Images/Insurance/6.Reliance Life Insurance Co.Ltd.png' 
import paramount from '../Images/Insurance/7.Paramount HealthcareServices.png' 
import heritage from '../Images/Insurance/8.Heritage Health Services Pvt Ltd.png' 
import vidal_health from '../Images/Insurance/9.Vidal Health Care Pvt Ltd.png' 
import good_health from '../Images/Insurance/10.Good Health Plan Ltd.png' 
import md_india from '../Images/Insurance/11.MD India TPA PVT LTD.png' 
import raksha_health from '../Images/Insurance/12.Raksha Health Insurance Tpa.png' 
import magma_hdi from '../Images/Insurance/13.Magma HDI General Insurance Co.Ltd.png' 
import safeway from '../Images/Insurance/14.Safeway TPA.png' 
import health_insurance from '../Images/Insurance/15.Health Insurance TPA Of INDIA Ltd.png' 
import medesava from '../Images/Insurance/16.Medseva TPA.png' 
import health_india_ from '../Images/Insurance/17.Health India TPA.png' 
import volo_insurance from '../Images/Insurance/18.Volo Insurance TPA.png' 
import the_new_india from '../Images/Insurance/19.The New India Insurance.png' 
import oriental_insurance from '../Images/Insurance/20.Oriental Insurance.png' 
import national_insurance from '../Images/Insurance/21.National Insurance.png' 
import united_india from '../Images/Insurance/22.UNITED INDIA INSURANCE.png' 
import sbi_general from '../Images/Insurance/23.SBI General Insurance.png' 
import cghs from '../Images/Insurance/26.CGHS.png' 
import singareni from '../Images/Insurance/25.Singareni Collieries.jpg' 

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
                {/* <div className="ins_imgs" >
                    <img src="https://salute.vamtam.com/wp-content/uploads/2021/06/logos-1.jpg" alt="" />
                    <img src="https://salute.vamtam.com/wp-content/uploads/2021/06/logos-2.jpg" alt="" />
                    <img src="https://salute.vamtam.com/wp-content/uploads/2021/06/logos-3.jpg" alt="" />
                    <img src="https://salute.vamtam.com/wp-content/uploads/2021/06/logos-4.jpg" alt="" />
                    <img src="https://salute.vamtam.com/wp-content/uploads/2021/06/logos-5.jpg" alt="" />
                </div> */}
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" className='ins_car'>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <img src="..." class="d-block w-100" alt="..."/> */}
      <div className="ins_imgs" >
                    <img src={family_health} alt="" />
                    <img src={paramount} alt="" />
                    <img src={heritage} alt="" />
                    <img src={md_india} alt="" />
                    <img src={united_india} alt="" />
                    <img src={raksha_health} alt="" />
                    
                </div>
    </div>
    <div class="carousel-item">
    <div className="ins_imgs" >
                    <img src={care_general} alt="" />
                    <img src={bajaj} alt="" />
                    <img src={reliance_life} alt="" />
                    <img src={vidal_health} alt="" />
                    <img src={good_health} alt="" />
                    <img src={sbi_general} alt="" />
                </div>
    </div>
    <div class="carousel-item">
    <div className="ins_imgs" >
                    <img src={mediassist} alt="" />
                    <img src={magma_hdi} alt="" />
                    <img src={safeway} alt="" />
                    <img src={health_insurance} alt="" />
                    <img src={medesava} alt="" />
                    <img src={national_insurance} alt="" />
                </div>
    </div>
    <div class="carousel-item">
    <div className="ins_imgs" >
                    <img src={the_new_india} alt="" />
                    <img src={health_india_} alt="" />
                    <img src={volo_insurance} alt="" />
                    <img src={singareni} alt="" />
                    <img src={cghs} alt="" />
                    <img src={oriental_insurance} alt="" />

                </div>
    </div>
    
  </div>
</div>
            </section>
        </div>
    );
};

export default Insurance;