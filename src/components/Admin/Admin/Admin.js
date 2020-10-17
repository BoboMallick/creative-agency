import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AllUser from '../AllUser/AllUser';
import logo from '../../../images/logos/logo.png';
import './Admin.css';

const Admin = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [serviceListStatus, setServiceListStatus] = useState(true);
    const [addServiceStatus, setAddServiceStatus] = useState(false);
    const [addAdminStatus, setAddAdminStatus] = useState(false);
    const handleServiceList = () => {
        setServiceListStatus(true);
        setAddServiceStatus(false);
        setAddAdminStatus(false);
    }
    const handleAddService = () => {
        setServiceListStatus(false);
        setAddServiceStatus(true);
        setAddAdminStatus(false);

    }
    const handleAddAdmin = () => {
        setServiceListStatus(false);
        setAddAdminStatus(true);
        setAddServiceStatus(false);

    }
    return (
    <div className="container pb-5">
            <div className="row pt-5 pb-5">
                <div className="col-md-3 logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="col-md-9 d-flex justify-content-between  align-items-center">
                    <h3 >Admin Panel</h3>
                    <div>
                    <img style={{height: "50px", borderRadius: "50%"}} src={loggedInUser.photoURL} alt=""/>
                    <button className="navbar-login m-3">{loggedInUser.name}</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                <AdminSidebar handleServiceList={handleServiceList} handleAddService={handleAddService} handleAddAdmin={handleAddAdmin}></AdminSidebar>
                </div>
                <div className="col-md-9 background-sky" style={{height: '100%'}}>
                {
                    serviceListStatus&& <AllUser></AllUser>
                }

                {
                     addServiceStatus && <AddService></AddService>
                 }
                 {
                    addAdminStatus && <AddAdmin></AddAdmin>
                 }
                </div>
            </div>
            </div>
    );
};

export default Admin;