import React from 'react';
import './Rating.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Rating = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // Adjust for large screens
                settings: {
                    slidesToShow: 2, // Show 3 cards at a time
                    slidesToScroll: 2, // Scroll 2 cards per transition
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Adjust for medium screens (tablets)
                settings: {
                    slidesToShow: 1, // Show 2 cards at a time
                    slidesToScroll: 1, // Scroll 1 card per transition
                    infinite: true,
                    dots: true
                }
            },
        ]
        
        

    };

    const cards = [
        { id: 1, title: 'Card 1',date:"2024-01-30",name:"Ramana Arutla",img:'https://lh3.googleusercontent.com/a-/ALV-UjXFvP-2WwWhzO3gjz65BUcANlrLXXp_AXeB0fxM5AyGsX8=s120-c-rp-mo-br100',txt:'We felt very happy, we feel like our home. Dr. Praveen sir handled & explained properly.' },
        { id: 2, title: 'Card 2' ,date:"2024-01-30",name:"Sharan Ankath",img:'https://lh3.googleusercontent.com/a-/ALV-UjUTFnbu0EtRK8kYQfjTpgdAvELYGqp79AtqExxjOwRvJ88=s120-c-rp-mo-br100', txt:'IF U HAVE A VARICOSE PROBLEM PLZ COME AND CONSULT DR.GV PRAVEEN KUMAR SIR HE WILL'},
        { id: 3, title: 'Card 3' ,date:"2024-01-27",name:"vangalapudi vasa", img:'https://lh3.googleusercontent.com/a/ACg8ocIYx-BDmyDYgZZ-07-CTSnEK0_fVupGU0JJVGC98XWS=s120-c-rp-mo-br100', txt:"Doctors and staff r good"},
        { id: 4, title: 'Card 4', date:"2024-01-27",name:'Mike',img:"https://lh3.googleusercontent.com/a/ACg8ocItClSx2f8Wr-xb6f-TYryehPzlGFN5VsOyhRRMZdQT=s120-c-rp-mo-br100",txt:"Well Administration Nice Treatmentment and Good Communication from the Staff I Recommend Asian Vascular Hospital Is The Best Hospitals For Vascular Problems" },
        { id: 5, title: 'Card 5', date:"2024-01-27",name:'Revathi Nethikunta',img:"https://lh3.googleusercontent.com/a/ACg8ocKqAqfPPAiQCEFZ3ba271rvLMuEoxdw5k03Q-2Nbfeu=s120-c-rp-mo-br100",txt:"Asian Vascular Wonderfull and super Hospital" },
        { id: 6, title: 'Card 6', date:"2024-01-27",name:'Vijay KUMAR',img:"https://lh3.googleusercontent.com/a-/ALV-UjVOb0F94tdT7NuoQ2v4GBrvzH8-PGnJRTo_6JtoTqfZbmQN=s120-c-rp-mo-br100",txt:"I suggest this hospital for varicose veins problems….excellent treatment" },
        { id: 7, title: 'Card 7', date:"2024-01-24",name:'Manivarma nandan',img:"https://lh3.googleusercontent.com/a-/ALV-UjVf7Ft0_XqegYf-hYqnf4ihaAYfqAeZH3F-ZQsr1ht8cQ=s120-c-rp-mo-br100",txt:"Healthy atmosphere with good maintainance and nice treatment" },
        { id: 8, title: 'Card 8', date:"2024-01-24",name:'Raja Shekar',img:"https://lh3.googleusercontent.com/a-/ALV-UjWTmFOYJFeMTfYELS0_GxvMRk8WfeH3mN2xTUp-9yRqY6w=s120-c-rp-mo-br100",txt:"Service is good" }
    ];
    return (
        <div>
            <section id='Reviews'  data-aos="fade-right">
                <div className="">
                    <center className="rv_head">
                        <h1>Our Patients are our Brand Ambassadors</h1>
                    </center>
                    <div className="">
                    <div className="review_main d-flex">
                        
                        <div className="rev_left">
                            <h3>Excellent</h3>
                            <div className="rev_left_stars">
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i class="fa-regular fa-star-half-stroke"></i>
                            </div>
                            <div className="rv_txt">
                                <p>Based on <span>226 reviews</span></p>
                                <img src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" alt=""/>
                            </div>
                        </div>

                        <div style={{ margin: '50px' }} className='slider_main'  data-aos="fade-up">
            <Slider {...settings} className='slider'>
                {cards.map(card => (
                    <div key={card.id} style={{ padding: '10px' }} className='slider_card' >

                        <div className="slider_img">
                            <div className="">
                                <img src={card.img} alt="" />
                            </div>
                            <div className="slider_date">
                                <h5>{card.name}</h5>
                                <small>{card.date}</small>
                            </div>
                            <div className="slider_img_2">
                                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                            </div>
                        </div>
                        <div className="slider_brands">
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                        </div>
                        <p className='slider_cnt'>{card.txt}</p>
                    </div>
                ))}
            </Slider>
        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rating;