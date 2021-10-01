import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AddI from '../Vithursan/Images/add.jpg'
import Viewi from '../Vithursan/Images/view.jpg'
import Cardi from '../Vithursan/Images/card.jpg'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import orderI from '../Vithursan/Images/exp.jpg'
export default class AdminDash extends Component {
    render() {
        return (
            <div className="d-grid gap-2">
            <br/><br/><br/>
            <h1 className="text-center" style={{color:"#0e7794"}}>Food Management Dashboard</h1>
            <br/><br/><br/>
            <Row xs={1} md={2} className="g-4">
            <Col>
           
            <Card style={{ width: '20rem' }} className="text-center">
            <Link to ="/add">
            <Card.Img variant="top" src={AddI} />
            </Link>
            <Card.Body>
              <Card.Title>Add Food Items</Card.Title>
              <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button size="lg" block variant="#053b4b"  style={{backgroundColor:"#053b4b", color:"white"}}>click</Button> </Link>
            </Card.Body>
          </Card>
         
          </Col>
          <Col>
          <Card style={{ width: '18rem' }} className="text-center">
          <Link to ="/view">
          <Card.Img variant="top" src={Viewi} />
          </Link>
          <Card.Body>
            <Card.Title>View Food Items</Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Link to="/view"><Button size="lg" block variant="#053b4b"  style={{backgroundColor:"#053b4b", color:"white"}}>click</Button></Link>
          </Card.Body>
        </Card>
        </Col>
       
        <Col>
        <Card style={{ width: '18rem' }} className="text-center">
        <Link to ="/card">
          <Card.Img variant="top" src={Cardi} />
</Link>
          <Card.Body>
            <Card.Title>Customer view </Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Link to="/card"><Button variant="#053b4b" size="lg" block   style={{backgroundColor:"#053b4b", color:"white"}}>click</Button></Link>
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }} className="text-center">
        <Link to ="/vieworder">
          <Card.Img variant="top" src={orderI} />
</Link>
          <Card.Body>
            <Card.Title>Order Details </Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Link to="/vieworder"><Button variant="#053b4b" size="lg" block   style={{backgroundColor:"#053b4b", color:"white"}}>click</Button></Link>
          </Card.Body>
        </Card>
       
        </Col>
        </Row>
            </div>
        )
    }
}
