
import axios from 'axios'
//import { Button } from 'bootstrap';
import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

export default class VenueDisplay extends Component {

    

    
    constructor(props){
        super(props);

        this.state={
            Venues:[]
        }

    }

    

    componentDidMount(){
        axios
            .get("http://localhost:8090/api/venue/venues")
            .then((res) => {
                this.setState({Venues:res.data});
            })
            .catch((err) =>{
                console.log(err);
            });
    }

    
    
    render() {
        return (
            <div style = {{align : 'center'}}>
                <h1 style={{fontWeight:'bold', color:"#0e7794", marginTop:'2rem'}}>Venues</h1>
                <br/><br/>
                <Row xs = {10} md={2} lg={4} className ="g-4" style={{alignItems:'center'}}>
                {
                    this.state.Venues.map(
                        Venue => 
                            <Col style={{width:'100%'}} key={Venue.id}>
                                <Link to={'/viewVenue/'+Venue.id} style={{textDecoration:'none', color:'black'}}>
                                <Card hoverable style={{width:'90%', flexDirection:'row', borderRadius:15, boxShadow:'1px 3px 1px #9E9E9E', marginBottom:10}} >
                                    <Card.Img style = {{width : '16rem', height : '16rem', borderRadius:15, padding:2}} variant = "top" src ={`http://localhost:8090/images/${Venue.img}`} alt="venueimg"/>
                                    <Card.Body style={{justifyContent:'flex-end'}}>
                                        <Card.Title style={{fontWeight:'bolder', fontSize:40}}>{Venue.name}</Card.Title>
                                        <Card.Text style={{opacity:0.6, fontSize:20}}>{Venue.type}</Card.Text>
                                        <Card.Text style={{alignSelf:'end', fontWeight:'bolder', fontSize:30}}>Rs. {Venue.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                                </Link>
                                
                            </Col>
                            
                    )
                    
                }
                </Row>
                
            </div>
        )
    }
}


