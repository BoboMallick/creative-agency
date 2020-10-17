import React, { useEffect, useState } from 'react';
import nash from "../../../../images/nash.png";
import miriam from "../../../../images/miriam.png";
import bria from "../../../../images/bria.png";
import FeedbackCard from '../FeedbackCard/FeedbackCard';


const Feedback = () => {
    const [allReview, setAllReview] = useState([]);
useEffect(()=> {
  fetch('http://localhost:5000/reviews')
  .then(res => res.json())
  .then(data => {
      setAllReview(data);
  })

},[])
    return (
        <div className="container mt-5">
            <h2 style={{color: "black"}} className="text-center"> Clients  <span className="green">Feedback</span></h2>
            <div className="row mt-5">
                {
                    allReview.map(review => <FeedbackCard review={review}></FeedbackCard>)
                
                }
            </div>
        </div>
    );
};

export default Feedback;