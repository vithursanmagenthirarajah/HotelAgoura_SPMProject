import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import hotel from '../Shanghavi/Images/room.jpg'
import food from '../Shanghavi/Images/foo.jpg'
import event from '../Shanghavi/Images/event.jpg'
import employee from '../Shanghavi/Images/em.jpg'
import expense from '../Shanghavi/Images/expense.jpg'

const Home = (props) => { 
  
    return(
     
    <div>
           
            <br></br>
            <br></br>
            <h2 className="text-center">Admin Dashboard</h2>
            <br/><br/><br/>
            <Row xs={1} md={3} className="g-4">
            <Col>
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={hotel} />
            </Card>
           
              <Card.Title link to="/add"><Button variant="black" style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>Go to Room Page</Button> </Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
          </Col>

          <Col>
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={food}  width="200px" height="180px"/>
            </Card>
           
              <Card.Title link to="/add"><Button variant="black" style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>Go to Dining Page</Button> </Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
          </Col>


          <Col>
            <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src={event}  height="180px"/>
            </Card>
           
              <Card.Title link to="/add"><Button variant="black" style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>Go to Event Page</Button> </Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
          </Col>
          <br></br>
          <br></br>
          <br></br>
     
          <Col>
            <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src={employee}  height="180px"/>
            </Card>
           
              <Card.Title link to="/add"><Button variant="black" style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>Go to Employee Page</Button> </Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
          </Col>
        <div></div>
          <Col>
            <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src={expense}  />
            </Card>
           
              <Card.Title link to="/add"><Button variant="black" style={{width:"320px",height:"50px",align:"centre",backgroundColor:"#878c8d",color:"white",fontSize:"18px"}}>Go to Expense Page</Button> </Card.Title>
              {/* <Card.Text>
               
              </Card.Text>
              <Link to="/add"><Button variant="primary"style={{width:"230px",height:"40px",backgroundColor:"#c73761",color:"white",fontSize:"18px"}}>Go to Rooms Page</Button> </Link>
           */}
          </Col>
          </Row>
          
        
          </div>
          
    )
   
    }

export default Home;
