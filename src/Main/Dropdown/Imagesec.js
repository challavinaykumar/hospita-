import React from 'react';
import './Imagesec.css'

const Imagesec = (p) => {
    return (
        <div>

            <section id='image_sec'>
                <div className="image_main">
                    <div className="img_left_txt" data-aos="fade-rigth">
                        <p>{p.txt}</p>
                    </div>
                    <div className="img_right" data-aos="fade-up">
                        <img src={p.image} alt="" />
                    </div>
                </div>
            </section>

           

        </div>
    );
};

export default Imagesec;