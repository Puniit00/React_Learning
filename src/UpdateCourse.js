import React,{useEffect,useState} from "react";
import base_url from "./API/Bootapi";
import { Form, FormGroup, Label,Input, Button, Container } from "reactstrap";
import axios from "axios";
import Course from "./Course";

const updateCourse = (props)=>{

    useEffect(()=>{
        document.title = "Update Course"
        }
        , [])

        const [course,updatecourse] = useState({})
        //Function to add course
        const handler=(e)=>{
            console.log(course);
            patchCourse(course)
            e.preventDefault();
        }

        //Patch data to api
        const patchCourse = (data)=>{
            axios.patch(`${base_url}/courses/${props.location.state}`,data).then(
                ()=>{
                    console.log(props)
                },
                (error)=>{
                    console.log(error)
                    console.log(props)
                    
                }
            )
        }

    return(
        <div>
            <h1 className="text-center">Fill course details </h1>
            <Form onSubmit={handler}>
                <FormGroup>
                    <Label for="Title">Course Title</Label>
                    <Input type="text" placeholder="Type here..." name="Title" id="Title"
                         onChange={(e)=>{
                            updatecourse({...course,title:e.target.value})
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="desc">Course Description</Label>
                    <Input type="textarea" placeholder="Type here..." name="desc" id="desc"
                        onChange={(e)=>{
                            updatecourse({...course,description:e.target.value})
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                <Button type="submit" color = "primary">Update Course</Button>
                <Button type="reset" color = "danger" style={{marginLeft:"5px"}}>Clear</Button>
                </Container>
            </Form>
        </div>
    )
}

export default updateCourse