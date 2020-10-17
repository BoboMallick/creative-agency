import React from 'react';
import { useHistory } from 'react-router-dom';
import image from "../../../../images/logos/Frame.png";
import './Intro.css';
const Intro = () => {
    const history = useHistory();
    const handleOrder=() => {
        history.push('/adminOrclient');
    }
    return (
        <div className="container mt-3">
            <div className=" row d-flex align-items-center">
            <div className="col-md-4">
            <h2 className="intro-h2">Let's Grow Your <br></br>
            Brand To The <br></br>
            Next Level</h2> 
            <br/>
            <p style={{fontWeight:'400'}}>Lorem ipsum dolor sit amet,consectetur <br></br>
            adipiscing elit Purus commodo ipsum duis<br></br>
            laoreet maecanas,feugiat</p>
            <button onClick={handleOrder} className="navbar-login">Hire us</button>
            </div>
           <div className="col-md-8">
               <img className="img-fluid" src={image}alt="images"/>
           </div>
            </div>
        </div>
    );
};
                  
export default Intro;

