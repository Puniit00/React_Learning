import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menu=()=>{
    return(
        <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="addCourse" action>Add Course</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="viewCourse" action>View Courses</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link>
    </ListGroup>
    )
}

export default Menu