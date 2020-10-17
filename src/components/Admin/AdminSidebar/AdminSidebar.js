import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi, faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons';


const AdminSidebar = (props) => {
    const buttonStyle = {
        backgroundColor: "white",
         color: "black", 
         border: "none", 
         height: "50px",
         width: "170px",
         textAlign: "left"
    }
    return (
        <div className=" py-5 px-4" >
            <Button style={buttonStyle} onClick={props.handleServiceList} className="mt-3" ><FontAwesomeIcon icon={faTaxi}/> Service List</Button>
            <Button style={buttonStyle} onClick={props.handleAddService} className="mt-3" ><FontAwesomeIcon icon={faPlus}/> Add Service</Button>
            <Button style={buttonStyle} onClick={props.handleAddAdmin} className="mt-3" ><FontAwesomeIcon icon={faUserPlus}/> Make Admin</Button>    
        </div>
    );
};

export default AdminSidebar;