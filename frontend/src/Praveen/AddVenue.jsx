import React, { Component } from 'react'
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import { Col } from "react-bootstrap";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";


export default class AddVenue extends Component {

    constructor(props){
        super(props);

        this.onChangeVenueName = this.onChangeVenueName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        //this.onChangeAvailabilty = this.onChangeAvailabilty.bind(this);

        this.handleRadio = this.handleRadio.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : "",
            description : "",
            type : "",
            price : "",
            img : "",
            availability: ""
        }

    }

    handleRadio(e){
        this.setState({
            availability:e.target.value
        });
    }

    onChangeVenueName(e){
        this.setState({
            name : e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description : e.target.value
        });
    }

    onChangeType(e){
        this.setState({
            type : e.target.value
        });
    }

    onChangePrice(e){
        this.setState({
            price : e.target.value
        });
    }

    onChangeImg(e){
        this.setState({
            img : e.target.files[0]
        });
    }

    // onChangeAvailabilty(e){
    //     this.setState({
    //         availability : e.target.value
    //     });
    // }

    onSubmit(e){
        e.preventDefault();

        const formdata = new FormData();

        formdata.append("name", this.state.name);
        formdata.append("description", this.state.description);
        formdata.append("price", this.state.price);
        formdata.append("type", this.state.type);
        formdata.append("File", this.state.img);
        formdata.append("availability", this.state.availability);

        for (var value of formdata.values()) {
            console.log(value);
        }
        axios.post("http://localhost:8090/api/venue/addVenue", formdata).then((res) => {
          console.log(res.data);
          alert("Venue Added Successfully");
          window.location.href ='/venues';
        });

        this.setState({
            name:"",
            description:"",
            type:"",
            price:"",
            img:"",
            availability:""
        })

    }


    render() {
        return (
            <div>
                <br/>
                <h1 style={{color:"#0e7794", marginTop:'2rem', fontWeight:'bold'}}>Add Venue</h1>
                <br/>
                <div className="card col-md-6 offset-md-3 offset-md-3" style={{padding : '1rem', borderRadius:15}}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className = "mb-3" controlId = "formBasicName">
                        <Form.Label>Name of venue</Form.Label>
                        <Form.Control type = "text" pattern="\w+.{5,}.[/\D/g]" 
                            title="Venue name should not contain numbers or symbols and must be largerthan 5 characters."
                            placeholder = "Enter the name" onChange = {this.onChangeVenueName} value = {this.state.name} required/>
                    </Form.Group>
                    <Form.Group className = "mb-3" controlId = "formBasicdescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as = "textarea" 
                            rows = {4} onChange = {this.onChangeDescription} value = {this.state.description}/>
                    </Form.Group>
                    <Form.Group className = "mb-3" controlId = "formBasicType">
                        <Form.Label>Name of Type</Form.Label>
                        <Form.Select onChange = {this.onChangeType} value = {this.state.type}>
                            <option defaultValue >Select..</option>
                            <option>Party</option>
                            <option>Conference</option>
                            <option>Functions</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className = "mb-3" controlId = "formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type = "text" placeholder = "Enter the price" onChange = {this.onChangePrice} value = {this.state.price} required/>
                    </Form.Group>
                    <Form.Group className = "mb-3" controlId = "formBasicFIle">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control type = "file" onChange = {this.onChangeImg} required/>
                    </Form.Group>
                    
                    <Form.Group className = "mb-3" controlId = "formBasicAvailability">
                        <Form.Label>Availability</Form.Label>
                        <br/>
                        <Form.Check inline type = "radio" value = "true" name = "availability" checked ={this.state.availability === 'true'} onChange = {this.handleRadio}/>
                        <Form.Check inline type = "radio" value = "false" name = "availability" checked = {this.state.availability === 'false'} onChange = {this.handleRadio} />
                    </Form.Group>

                    <Button style = {{backgroundColor:"#053b4b", color:"white", borderRadius:15}} variant = "primary" type = "submit">Add Venue</Button>
                    
                </Form>
                </div>
                
            </div>
        )
    }
}
