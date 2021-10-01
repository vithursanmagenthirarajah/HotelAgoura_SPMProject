import axios from 'axios';
import React, { Component } from 'react'
import { Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class VenueBooking extends Component {

    constructor(props){
        super(props);
        this.state={
            Venue:{}
        }
    }

    componentDidMount(){
        axios
            .get("http://localhost:8090/api/venue/venues/"+ this.props.match.params.id)
            .then((res)=>{
                this.setState({Venue:res.data})
            })
            .catch((err)=>{
                console.log(err)
            });
    }


    render() {
        return (
            <div style={{display:'flex', flexDirection:'row', margin:20, border:'1px solid black', padding:5, borderRadius:15}}>
                <div style={{width:700 , height:700}}>
                    <Image src={`http://localhost:8090/images/${this.state.Venue.img}`} style={{height:'100%', width:'100%', borderRadius:10}}/>
                </div>
                <div style={{display:'flex', flexDirection:'column', marginLeft:20, height:700, width:700}}>
                    <h1 style={{fontSize:60, fontWeight:'bolder', marginBottom:10, flex:1}}>{this.state.Venue.name}</h1>
                    <h4 style={{opacity:0.6, flex:1}}>{this.state.Venue.type}</h4>
                    <br/>
                    <h2 style={{opacity:0.6, fontSize:30, flex:4, wordWrap:'break-word'}}>{this.state.Venue.description}</h2>
                    <h1 style={{fontWeight:'bolder', alignSelf:'flex-end', flex:1, marginRight:15}}>Rs.{this.state.Venue.price}</h1>
                    <Link to={'/finalizeHall/'+this.state.Venue.id}><Button style={{width:150, height:60, fontSize:25, fontWeight:'bold',borderRadius:30, margin:10, alignSelf:'flex-end'}}>BOOK</Button></Link>
                    
                </div>
            </div>
        )
    }
}
