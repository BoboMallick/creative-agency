import React, { useState } from 'react';

const AddAdmin = () => {
    const [makeAdmin, setMakeAdmin] = useState({});
    const handleBlur = (e) => {
        const newAdmin = {...makeAdmin}
        newAdmin[e.target.name] = e.target.value;
        setMakeAdmin(newAdmin);
    }
    const handleSubmit = (e) => {
        
        fetch("http://localhost:5000/addAdmin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(makeAdmin)
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
    <section className="p-4 pr-5" style={{ width: "60%" }}>
        <form >
                <h3 className="text-brand">Add Services</h3>
                <div className="form-group">
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Email" />
                </div>
                <button onClick={handleSubmit} type="submit" className="navbar-login">Submit</button>
            </form>
    </section>
    );
};

export default AddAdmin;