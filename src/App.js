
import './App.css';
import {Container, Row,Col} from "reactstrap"
import React from 'react';
import Headers from './Header';
import Allcourse from './Allcourse';
import AddCourse from './AddCourse';
import Menu from './Menu';
import Home from './Home';
import {BrowserRouter,Route} from "react-router-dom"
import updateCourse from './UpdateCourse';
 

function App() {
  return (
   <div>
     <BrowserRouter>
       <Container>
     <Headers/>
       <Row>
         <Col md={4}><Menu/></Col>
         <Col md={8}>
           <Route path="/" component={Home} exact/>
           <Route path="/addCourse" component={AddCourse} exact/>
           <Route path="/viewCourse" component={Allcourse} exact/>
           <Route path="/updateCourse" component={updateCourse} exact/>
         </Col>
      </Row>  
      </Container> 
     </BrowserRouter> 
   </div>
  );
}

export default App;
