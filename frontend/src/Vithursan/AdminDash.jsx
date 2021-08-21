import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AddI from '../Vithursan/Images/add.jpg'
import Viewi from '../Vithursan/Images/view.jpg'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default class AdminDash extends Component {
    render() {
        return (
            <div>
            <br/><br/><br/>
            <h1>Food Management Dashboard</h1>
            <br/><br/><br/>
            <Row xs={1} md={3} className="g-4">
            <Col>
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={AddI} />
            <Card.Body>
              <Card.Title>Add Food Items</Card.Title>
              <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary">click</Button> </Link>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Viewi} />
          <Card.Body>
            <Card.Title>View Food Items</Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Link to="/view"><Button variant="primary">click</Button></Link>
          </Card.Body>
        </Card>
        </Col>
       
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Viewi} />
          <Card.Body>
            <Card.Title>Customer view </Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Link to="/card"><Button variant="primary">click</Button></Link>
          </Card.Body>
        </Card>
        </Col>
        </Row>
            </div>
        )
    }
}
