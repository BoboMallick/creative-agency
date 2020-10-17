import React from 'react';
import slack from "../../../../images/logos/slack.png";
import google from "../../../../images/logos/google.png";
import uber from "../../../../images/logos/uber.png";
import netflix from "../../../../images/logos/netflix.png";
import airbnb from "../../../../images/logos/airbnb.png";
import './Sponsor.css';

const Sponsor = () => {
    return (
        <div className= "container mt-5 gap">
            <div className="row d-flex justify-content-around sponsor">
                <div className="col-md-2">
                    <img src={slack} alt=""/>
                </div>
                <div className="col-md-2">
                    <img src={google} alt=""/>
                </div>
                <div className="col-md-2">
                    <img src={uber} alt=""/>
                </div>
                <div className="col-md-2">
                    <img src={netflix} alt=""/>
                </div>
                <div className="col-md-2">
                    <img src={airbnb} alt=""/>
                </div>
            </div>
            
        </div>
    );
};

export default Sponsor;