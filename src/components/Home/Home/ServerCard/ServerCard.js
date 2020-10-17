import React from "react";
import { Link } from "react-router-dom";
import './ServerCard.css';


const ServerCard = ({ service }) => {
  return (
    <Link to='/adminOrclient'  className="col-md-4 mt-5 link">
      <div class="card d-flex justify-content-center align-items-center py-5" style={{width:"20rem"}}>
        <img  style={{width:'74px', height:'74px'}} src={`data:image/jpeg;base64,${service.image.img}`} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title">{service.name}</h5>
          <p class="card-text">{service.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServerCard;
