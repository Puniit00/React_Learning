import axios from "axios";
import React,{useState,useEffect} from "react";
import Course from "./Course";
import base_url from "./API/Bootapi";

const Allcourse = ()=>{

    const fetchCourses= ()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response),
                setcourse(response.data);
            },
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(()=>{
        document.title = "View Course";
        fetchCourses();
        }
        , [])

        const updateCourse=(id)=>{
            setcourse(courses.filter((c)=>c.id!=id))
        }

 const [courses, setcourse] = useState([])
 return(
     <div className="text-center">
         <h1>All Courses</h1>
         <p>List of courses available</p>
         {
             courses.length>0? courses.map((item)=><Course course={item} update={updateCourse}/>):"No Course"
         } 
     </div>
 );
}

export default Allcourse;