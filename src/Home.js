import React,{useEffect} from "react";
import { Button, Jumbotron } from "reactstrap";

const Home = ()=>{
    useEffect(()=>{
        document.title = "Home Page"
        }
        , [])

        return(
            <Jumbotron className="text-center" style={{background:"lightgrey", height:"210px"}}>
                <h1 className="display-2">Learning React</h1>
                <p>Learning react basics making a very simple app</p>
                <Button className="my-3" color="primary" outline>Learning</Button>
            </Jumbotron>
        )
}

export default Home;