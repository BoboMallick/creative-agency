import React, { useEffect, useState } from 'react';
// import Web from '../../../../images/icons/Web.png';
// import Graphics from '../../../../images/icons/Graphics.png';
// import WebDev from '../../../../images/icons/WebDev.png';
import ServerCard from '../ServerCard/ServerCard';
import './Service.css';


const Services = () => {
    const [allService, setAllService] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setAllService(data);
        })

    },[])
    return (
        <div className="container mt-5">
            <h1 className="text-center"> <span style={{color: "black"}}>Provide awesome </span><span className="green">service</span></h1>
            <div className="row mt-5">
                {
                   allService.map(service => <ServerCard service={service}></ServerCard>)
                }
            </div>
        </div>

    );
};

export default Services;