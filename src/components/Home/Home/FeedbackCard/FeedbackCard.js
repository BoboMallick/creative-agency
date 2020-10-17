import React from "react";

const FeedbackCard = ({review }) => {
  return (
    <div className="col-md-4">
      <div class="card" style={{ width: "20rem" }}>
        <div class="card-body">
          <div className="d-flex  align-items-center mb-3">
            <div className="mr-3">
              <img
                style={{ width: "55px", height: "55px" }}
                src={review.img}
                alt=""
              />
            </div>
            <div>
              <h5 class="card-title">{review.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{review.status}</h6>
            </div>
          </div>
          <p class="card-text">{review.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
