import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const OrderPlace = () => {
    const [loggedInUser, setLoggedinUser]= useContext(UserContext);
    const position = Math.floor(Math.random()*5);
    const icons= ["https://i.ibb.co/TBHrqj5/service1.png","https://i.ibb.co/Jn2NGHQ/service2.png", "https://i.ibb.co/TqM2STY/service3.png","https://i.ibb.co/JtFVnVR/service4.png", "https://i.ibb.co/ZmZVsdg/service5.png"]
    const [userInfo, setUserInfo] = useState({icon:icons[position],status: "Pending",name:`${loggedInUser.name}`,email:`${loggedInUser.email}`});
    const handleBlur = (e) => {
        const newUser = { ...userInfo };
        newUser[e.target.name] = e.target.value;
        setUserInfo(newUser);
    }
    const handleSubmit = (e) => {
        fetch('http://localhost:5000/add',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
        .then(response =>response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error)
        })
    e.preventDefault();
    }
    return (
        <section className="p-4 pr-5" style={{ width: "60%" }} >    
        <form action="" >
                <div className="form-group">
                    <input onBlur={handleBlur}   type="text" className="form-control" value={loggedInUser.name} name="name"  />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur}   type="email" className="form-control" value={loggedInUser.email} name="email"  />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur}   type="text" className="form-control" name="service" placeholder="Graphics design" />
                </div>
                <div className="form-group">
                    <textarea onBlur={handleBlur}    className="form-control" id="" name="description" cols="30" rows="5" placeholder="Project Detail"></textarea>
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur}  type="text" className="form-control" name="price" placeholder="Price" />
                </div>
                <button onClick={handleSubmit} type="submit" className="navbar-login">Submit</button>
            </form>

        
        
        
        
    </section>
    );
};

export default OrderPlace;