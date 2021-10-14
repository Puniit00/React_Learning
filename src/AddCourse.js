import React,{useEffect,useState} from "react";
import base_url from "./API/Bootapi";
import { Form, FormGroup, Label,Input, Button, Container } from "reactstrap";
import axios from "axios";

const AddCourse = ()=>{

    useEffect(()=>{
        document.title = "Add Course"
        }
        , [])

        const [course,addcourse] = useState({})
        //Function to add course
        const handler=(e)=>{
            console.log(course);
            postCourse(course)
            e.preventDefault();
        }

        //Post data to api
        const postCourse = (data)=>{
            axios.post(`${base_url}/courses`,data).then(
                (response)=>{
                    console.log(response)
                },
                (error)=>{
                    console.log(error)
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
                            addcourse({...course,title:e.target.value})
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="desc">Course Description</Label>
                    <Input type="textarea" placeholder="Type here..." name="desc" id="desc"
                        onChange={(e)=>{
                            addcourse({...course,description:e.target.value})
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                <Button type="submit" color = "primary">Add Course</Button>
                <Button type="reset" color = "danger" style={{marginLeft:"5px"}}>Clear</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddCourse