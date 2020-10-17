import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const ClientReview = () => {
    const [loggedInUser, setLoggedinUser]= useContext(UserContext);
    const [review, setReview] = useState({img: "https://i.ibb.co/7gzGPjn/customer-1.png",name:`${loggedInUser.name}`});
    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        
        setReview(newReview);
    }
    const handleSubmit = (e) => {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault();


    }
    return (
        <section className="p-4 pr-5" style={{ width: "60%"}}>
        <form>
                <div className="form-group">
                    <input onBlur={handleBlur}  type="name" className="form-control" name="name"  value={loggedInUser.name}  />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur}  type="text" className="form-control" name="designation" placeholder="Designation, Comapany name" />
                </div>
                <div className="form-group">
                    <textarea onBlur={handleBlur}   className="form-control" name="description" id="" cols="30" rows="5" placeholder="Project Detail"></textarea>
                </div>
                
                <button onClick={handleSubmit}  type="submit" className="navbar-login">Submit</button>
            </form>
    </section>
    );
};

export default ClientReview;