import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';


import hotel from '../Vithursan/Images/room.jpg'
import food from '../Vithursan/Images/food.jpg'
import event from '../Vithursan/Images/event.jpg'
import employee from '../Vithursan/Images/emp.jpg'
import expense from '../Vithursan/Images/exp.jpg'


const Home = (props) => { 
  
    return(
     
    <div>
           
            <br></br>
            <br></br>
            <h2 className="text-center" style={{ color:"#370411"}}>Admin Dashboard</h2>
            <br/><br/><br/>
            <div style={{marginLeft:"60px"}}>
            <Row xs={1} md={3} className="g-4">
            <Col>
            <Link to="/visual">
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={hotel} />
            </Card>
           
              <Card.Title ><Link to="/visual"><Button variant="secondary" style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>View Rooom Details</Button> </Link></Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
           </Link>
          </Col>

          <Col>
          <Link to="/Fdash">
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={food}  width="200px" height="180px"/>
            </Card>
           
              <Card.Title > <Link to="/Fdash"><Button variant="secondary"  style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>View Food Details</Button></Link></Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
           </Link>
          </Col>


          <Col>
          <Link to="/venues">
            <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src={event}  height="180px"/>
            </Card>
           
              <Card.Title ><Link to="/venues"> <Button variant="secondary"  style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>View Event Details</Button> </Link></Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
           </Link>
          </Col>
          <br></br>
          <br></br>
          <br></br>
     
          <Col>
          <Link to="/getemployees">
            <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src={employee}  height="180px"/>
            </Card>
           
              <Card.Title ><Link to="/getemployees"><Button variant="secondary"  style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>View Employee Details</Button></Link> </Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
           </Link>
          </Col>
        <div></div>
          <Col>
          <Link to="/viewexpense">
            <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src={expense}  />
            </Card>
           
              <Card.Title> <Link to="/viewexpense"><Button variant="secondary"  style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>View Expense Details</Button> </Link></Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
           </Link>
          </Col>
          </Row>
          
          </div>
          </div>
          
    )
   
    }

export default Home;