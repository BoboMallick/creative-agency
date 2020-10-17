import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer p-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6">
            <h1>
              {" "}
              Let us handle your <br></br>
              project, professionally.
            </h1>
            <br />
            <p>
              will well written codes,we build amazing apps for all <br />
              platforms, mobile and web apps general.
            </p>
          </div>
          <div className="col-md-6">
            <input
              className="form-control mt-3 rounded"
              type="text"
              placeholder="Your email address"
            />
            <input
              className="form-control mt-3 rounded"
              type="text"
              placeholder="Your name/ company's name "
            />
            <textarea
              className="form-control mt-3 rounded"
              placeholder="Your Message *"
              id=""
              rows="13"
            ></textarea>
            <button className="navbar-login mt-3">SUBMIT</button>
          </div>
        </div>
        <p className="text-center mt-5">Copyright {(new Date()).getFullYear()} All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
