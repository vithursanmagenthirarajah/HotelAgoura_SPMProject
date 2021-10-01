import React, { Component } from 'react'
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class FinalizeReservation extends Component {

    constructor(props){
        super(props);

        

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTelNo = this.onChangeTelNo.bind(this);
        this.onChangeVenue = this.onChangeVenue.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            customerName:'',
            amount:'',
            date:new Date(),
            telNo:'',
            venueName:''
        }


    }

    componentDidMount(){
        axios
            .get("http://localhost:8090/api/venue/venues/"+this.props.match.params.id)
            .then((res)=>{
                console.log(res);
                this.setState({
                    amount:res.data.price,
                    venueName:res.data.name
                })
            })
            .catch((err)=> console.log(err))
    }

    onChangeName(e){
        this.setState({
            customerName:e.target.value
        })
    }

    onChangeAmount(e){
        this.setState({
            amount:e.target.value
        })
    }

    onChangeDate(e){
        this.setState({
            date:e.target.value
        })
    }

    onChangeTelNo(e){
        this.setState({
            telNo:e.target.value
        })
    }

    onChangeVenue(e){
        this.setState({
            venueName:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const reservation = {
            "customer":this.state.customerName,
            "amount":this.state.amount,
            "date":this.state.date,
            "tel_no":this.state.telNo,
            "venue_name":this.state.venueName,
        }

        // formData.append("customer", this.state.customerName);
        // formData.append("amount", this.state.amount);
        // formData.append("date", this.state.date);
        // formData.append("tel_no", this.state.telNo);
        // formData.append("venue_name", this.state.venueName);

        // for (var value of reservation.values()){
        //     console.log(value);
        // }
        console.log(reservation);
        axios.post("http://localhost:8090/api/reservation/addReservation",reservation).then((res)=>{
            console.log(res);
            alert('Reservation added successfully');
            window.location.href='/viewVenues'
        })

        this.setState={
            customerName:'',
            amount:'',
            date:new Date(),
            telNo:'',
            venueName:''
        }

    }




    render() {
        return (
            <div>
                <br/>
                <h1 style={{color:"#0e7794", marginTop:'2rem', fontWeight:'bold'}}>Reservation Details</h1>
                <br/>
                <div className="card col-md-6 offset-md-3 offset-md-3" style={{padding : '1rem', borderRadius:15}}>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className = "mb-3" controlId = "formBasicName">
                        <Form.Label>Name of the Customer</Form.Label>
                        <Form.Control type = "text" pattern="\w+.{5,}.[/\D/g]" 
                            title="customer name should not contain numbers or symbols and must be larger than 3 characters."
                            placeholder = "Enter your name" onChange = {this.onChangeName} value = {this.state.customerName} required/>
                    </Form.Group>
                    <Form.Group className = "mb-3" controlId = "formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type = "text" placeholder = "Enter the price" onChange = {this.onChangeAmount} value = {this.state.amount} required/>
                    </Form.Group>
                    <Form.Group className = "mb-3" controlId = "formBasicVenue">
                        <Form.Label>Venue</Form.Label>
                        <Form.Control type = "text" placeholder = "Enter the Venue Name" onChange = {this.onChangeVenue} value = {this.state.venueName} required/>
                    </Form.Group>
                    <Form.Group className = "mb-3" controlId = "formBasicPrice">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type = "text" pattern="^\d{10}$" placeholder = "Enter your contact number" onChange = {this.onChangeTelNo} value = {this.state.telNo} required/>
                    </Form.Group>
                    <Form.Group className = "mb-3" controlId = "formBasicPhoneN0">
                        <Form.Label>Contact Number</Form.Label>
                        <DatePicker onChange={(date)=>this.setState({date:date})} dateFormat="yyyy-MM-dd" selected={this.state.date}/>
                    </Form.Group>


                    <Button style = {{backgroundColor:"#053b4b", color:"white", borderRadius:15}} variant = "primary" type = "submit">Make Reservation</Button>
                    
                </Form>
                </div>
                
            </div>
        )
    }
}
