import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [customer, setCustomer] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/add")
        .then(res => res.json())
        .then(data => {
            setCustomer(data)
        })
    },[])
    return (
            <div className="mt-4" style={{backgroundColor: "white"}}>
            <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Detail</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  customer.map((user) => 
                        
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.service}</td>
                        <td>{user.description}</td>
                        <td>padding</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default AllUser;