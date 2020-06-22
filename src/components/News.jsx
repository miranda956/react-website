import React, { Component } from 'react';
import './News.css';
import {Container,Col,Row,Image} from 'react-bootstrap';
export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/12.png" className="header-image"/>
                <Container>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>Over the past couple of years, we’ve mentioned Deno a few times. It’s a 'new' JavaScript and TypeScript runtime initially created by Ryan Dahl, the creator of Node, so it’s interesting to see how he thinks things should be done nowadays. Version 1.0 is due soon and we'll feature it in more detail then.</p>
                            <p> A start-to-finish walkthrough aimed at beginners or anyone who usually just copy/pastes settings until things work. This will help you really understand what’s going on.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/dev2.png"/>
                            <p>keep touch with Dev life for all updates on javascript and also know when will server conference will be  held</p>
                        </Col>
                    </Row>
                </Container>
                
                
            </div>
        )
    }
}
