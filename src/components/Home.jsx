import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron,Container,Row,Col,Image,Button} from 'react-bootstrap';
import "./Home.css"; 


 class Home extends Component {
  render() {
    return (
      <Container>
          <Jumbotron>
              <h2>
                  welcome to developer conference 2020
                  <p> frontend developer conference on 13th to 15th june</p>
                  <Link to ="/about">
                      <Button class="btn btn-outline-primary">About</Button>
                  </Link>
              </h2>
          </Jumbotron>
          <Row className="show-container text-center">
              <Col xs={12} sm={4} className="person-Wrapper">
                  <Image src="assets/programmer.png" roundedCircle  className="profile-pic"/>
                  <h3>Angular</h3>
                  <p>Angular day is on 13th, where directives, dependency injection and NG-redux will be dissicussed. Zak adwoli will be the speaker</p>
              </Col>
              <Col xs={12} sm={4} className="person-Wrapper">
                  <Image src="assets/dev.png" roundedCircle  className="profile-pic"/>
                  <h3>  Vue</h3>
                  <p> 14th,Arnold will go through Vue,explaining components in vue, state management, performance and how to improve code quality</p>
              </Col><Col xs={12} sm={4} className="person-Wrapper">
                  <Image src="assets/dev3.png" roundedCircle  className="profile-pic"/>
                  <h3>React</h3>
                  <p>React  day is on 15th,components,contextAPI, props and react router will be disscussed . Ronald  will be the speaker</p>
              </Col>
          </Row>
      </Container>
        
      
    );
  }
}
export default Home;