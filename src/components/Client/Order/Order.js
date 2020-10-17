import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import ClientReview from '../ClientReview/ClientReview';
import OrderPlace from '../OrderPlace/OrderPlace';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../SideBar/Sidebar';
import logo from '../../../images/logos/logo.png';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [listStatus, setListStatus] = useState(false);
    const [reviewStatus, setReviewStatus] = useState(false);
    const [orderStatus, setOrderStatus] = useState(true);
    const handleOrder = () => {
        setOrderStatus(true);
        setListStatus(false);
        setReviewStatus(false);

    }
    const handleServiceList = () => {
        setListStatus(true);
        setReviewStatus(false);
        setOrderStatus(false);
    }
    const handleReview = () => {
        setReviewStatus(true);
        setListStatus(false);
        setOrderStatus(false);
    }
    return (
        <div className="container pb-5">
            <div className="row pt-5 pb-5">
                <div className="col-md-3 logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="col-md-9 d-flex justify-content-between align-items-center">
                    
                    <h3>Order</h3>
                    
                    <div >
                    <img style={{height: "50px", borderRadius: "50%"}} src={loggedInUser.photoURL} alt=""/>
                    <button className="navbar-login m-3">{loggedInUser.name}</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                <Sidebar handleOrder={handleOrder} handleServiceList={handleServiceList} handleReview={handleReview}></Sidebar>
                </div>
                <div className="col-md-9 background-sky" >
                {
                    orderStatus && <OrderPlace></OrderPlace>
                }

                {
                     listStatus && <ServiceList></ServiceList>
                 }
                 {
                     reviewStatus &&  <ClientReview></ClientReview>
                 }
                </div>
            </div>
            </div>
    );
};

export default Order;