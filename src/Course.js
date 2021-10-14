import axios from "axios";
import React from "react";
import { useEffect } from "react";
import {
    Card,CardBody,CardSubtitle,CardText,Button,Container
} from "reactstrap"
import base_url from "./API/Bootapi";
import updateCourse from "./UpdateCourse";
import { useHistory } from "react-router-dom";

const Course=({course,update})=>{
    const history = useHistory();
    useEffect(()=>{
    document.title = "course"
    }
    , [])

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            update(id)
        )
    }

    const routeChange = () =>{ 
        let path = `/updateCourse`; 
        history.push({
            pathname:path,
            state:course.id
        });
      }
    

    return(<Card>
        <CardBody className="text-center">
            <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger mr-3" onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button>
                <Button color="primary" style={{marginLeft:"5px"}} onClick={routeChange}
                >Update</Button>
            </Container>
        </CardBody>
    </Card>)
    
}

export default Course