import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTaxi, faCommentAlt} from '@fortawesome/free-solid-svg-icons'
const Sidebar = (props) => {
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
            <Button style={buttonStyle} onClick={props.handleOrder} className="mt-3"> <FontAwesomeIcon icon={faShoppingCart}/> Order</Button>
            <Button style={buttonStyle} onClick={props.handleServiceList} className="mt-3"><FontAwesomeIcon icon={faTaxi} /> Service List</Button>
            <Button style={buttonStyle} onClick={props.handleReview} className="mt-3"><FontAwesomeIcon icon={ faCommentAlt} /> Review</Button>       
        </div>
    );
};

export default Sidebar;