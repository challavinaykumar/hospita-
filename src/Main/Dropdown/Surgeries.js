import React from 'react';
import '../Dropdown/Surgeries.css'

const Surgeries = (p) => {
    return (
        <div>
            <div className="surgeries_main d-flex align-items-center justify-content-center flex-wrap gap-3">
                {/* <div className="">
                    <h1>{p.sur_head}</h1>
                </div> */}
                <div className="surgeries_heading">
                    <h5>{p.sur_head}</h5>
                </div>
            </div>
        </div>
    );
};

export default Surgeries;