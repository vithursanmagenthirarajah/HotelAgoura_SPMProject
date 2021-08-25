import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import hotel from '../Shanghavi/Images/room.jpg'
import food from '../Shanghavi/Images/foo.jpg'
import event from '../Shanghavi/Images/event.jpg'
import employee from '../Shanghavi/Images/ee.jpg'
import expense from '../Shanghavi/Images/expense.jpg'


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
            <Link to="/getemployees">
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={hotel} />
            </Card>
           
              <Card.Title link to="/add"><Link to="/getemployees"><Button variant="secondary" style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>View Rooom Details</Button> </Link></Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
           </Link>
          </Col>

          <Col>
          <Link to="/getemployees">
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={food}  width="200px" height="180px"/>
            </Card>
           
              <Card.Title > <Link to="/getemployees"><Button variant="secondary"  style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>View Food Details</Button></Link></Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
           </Link>
          </Col>


          <Col>
          <Link to="/getemployees">
            <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src={event}  height="180px"/>
            </Card>
           
              <Card.Title ><Link to="/getemployees"> <Button variant="secondary"  style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>View Event Details</Button> </Link></Card.Title>
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
          <Link to="/getemployees">
            <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src={expense}  />
            </Card>
           
              <Card.Title> <Link to="/getemployees"><Button variant="secondary"  style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>View Expense Details</Button> </Link></Card.Title>
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
