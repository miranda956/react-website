import React, { Component } from 'react'
import {Container,Col,Image} from 'react-bootstrap';
import './About.css';
export default class About extends Component {
    render() {
        return (
            <div>
                <Image src ="assets/conf.png" className ="header-image"/>
                <Container>
                    <Col xs={12} sm={8} smoffset={2}>
                        <Image src="assets/backenddev.png" className="about-profile-pic" rounded/>
                        <h2>javascript</h2>
                       
                 <p>Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>
                 <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                    </Col>

                </Container>
        
                
                
            </div>
        )
    }
}
