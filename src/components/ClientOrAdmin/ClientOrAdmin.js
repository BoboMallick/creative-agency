import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Admin from '../Admin/Admin/Admin';
import Order from '../Client/Order/Order';

const ClientOrAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdd, setIsAdd] = useState(false);
    // const [isAdmin, setIsAdmin] = useState(false);
    const checkAdmin=(data) => {
        const isAdmin = data.find(admin=>admin.email===loggedInUser.email)
        sessionStorage.setItem('isAdmin',JSON.stringify(isAdmin));
        isAdmin?setIsAdd(true):setIsAdd(false);
    }
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin')
            .then(res => res.json())
            .then(data =>checkAdmin(data));
    }, [])
    

    // useEffect(() => {
    //     fetch('http://localhost:5000/isAdmin', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data));
    // }, [])
    return (
        <div>
            {
                isAdd? <Admin></Admin>:<Order></Order>
                
            }
            
        </div>
    );
};

export default ClientOrAdmin;