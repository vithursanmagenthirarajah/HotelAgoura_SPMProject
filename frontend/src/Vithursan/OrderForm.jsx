import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import StripeButton from './stripebutton.component'
import { Col } from 'react-bootstrap';
import axios from 'axios';

export default class OrderForm extends Component {

    constructor(props) {
        super(props);
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNo = this.onChangeNo.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangephoneno = this.onChangephoneno.bind(this);
        this.onChangepayment= this.onChangepayment.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            //id:this.props.match.params.id,
            FoodItem:[],
            name:"",
             no:"",
             street:"",
             city:"",
             phoneno:"",
             payment:""
         };
    }


  //   componentDidMount(){
  //     axios
  //   .get("http://localhost:8090/api/FoodItem/get/"+this.props.match.params.id)
  //   .then((response) => {
  //     this.setState({ FoodItem: response.data });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //     // ItemService.getItemsById(this.state.id).then( res => {
  //     //     this.setState({item: res.data});
  //     // })

      
  // }
  componentDidMount() {
    axios
      .get("http://localhost:8090/api/FoodItem/get/" + this.props.match.params.id)
      .then((res) => {
        this.setState({ FoodItem: res.data });
        this.setState({
            foodItemName: res.data.foodItemName,
            price: res.data.price,
            description: res.data.description,
            category: res.data.category,
            path: res.data.path,
        },() => {
          console.log(this.state.price);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
      }

      onChangeNo(e) {
        this.setState({
            no: e.target.value,
        });
      }


      onChangeStreet(e) {
        this.setState({
            street: e.target.value,
        });
      }

      onChangeCity(e) {
        this.setState({
            city: e.target.value,
        });
      }

      onChangephoneno(e) {
        this.setState({
            phoneno: e.target.value,
        });
      }

      onChangepayment(e) {
        this.setState({
          payment: e.target.value,
        });
      }


      onSubmit(e) {
        e.preventDefault();
    
        const FoodItemDetails = {
          name: this.state.name,
          no: this.state.no,
          street: this.state.street,
          city: this.state.city,
          phoneno: this.state.phoneno,
          payment: this.state.payment,
        };

        axios
        .post("http://localhost:8090/api/Order/add", FoodItemDetails)
        .then((res) => {
          console.log(res.data);
         
        });
       
      this.setState({
        name:"",
        no:"",
        street:"",
        city:"",
        phoneno:"",
        payment:""
      });
  
      alert("Ordered successfully");
     
    }

    
    
    render() {
        return (
            <div>
            <br></br>
            <br></br>
            <h3 className="text-center" style={{color:"#0e7794"}}>Delivery Details</h3>


<div className = "card col-md-6 offset-md-3 offset-md-3">
<div className="container">
            <Form onSubmit={this.onSubmit} >

            <Form.Group  controlId="formGroupEmail">
            <Form.Label >Name</Form.Label>
              <Form.Control 
                  type="text" 
                  required={true} 
                  //pattern="\w+.{5,}.[/\D/g]" 
                  //title="Food name should not contain numbers or symbols and must be largerthan 5 characters." 
                  placeholder="Name"  
                  onChange={this.onChangeName}  
                  value={this.state.name} 
              />
            </Form.Group>

            <Form.Group  controlId="formGroupEmail">
            <Form.Label >Home No</Form.Label>
              <Form.Control 
                  type="text" 
                  required={true} 
                  placeholder="No"  
                  onChange={this.onChangeNo}  
                  value={this.state.no} 
              />
            </Form.Group>

            <Form.Group  controlId="formGroupEmail">
            <Form.Label >Street</Form.Label>
              <Form.Control 
                  type="text" 
                  required={true} 
                  placeholder="Street"  
                  onChange={this.onChangeStreet}  
                  value={this.state.street} 
              />
            </Form.Group>

            <Form.Group  controlId="formGroupEmail">
            <Form.Label >City</Form.Label>
              <Form.Control 
                  type="text" 
                  required={true} 
                  placeholder="City"  
                  onChange={this.onChangeCity}  
                  value={this.state.city} 
              />
            </Form.Group>

            <Form.Group  controlId="formGroupEmail">
            <Form.Label >Phone Number</Form.Label>
              <Form.Control 
                  type="text" 
                  required={true} 
                  placeholder="Phone No"  
                  onChange={this.onChangephoneno}  
                  value={this.state.phoneno} 
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Payment method</Form.Label>
            <Form.Select     required={true}   onChange={this.onChangepayment}  value={this.state.payment}>
            <option >Choose ..</option>
              <option>Card</option>
              <option>Cash on Delivery</option>
            </Form.Select>
          </Form.Group>

          <br></br>
      <Button style={{marginLeft:"160px" , width:"200px", height:"40px",backgroundColor:"#053b4b", color:"white"}}>    <StripeButton  price={this.state.price}  >Buy Now</StripeButton>  </Button>  
       
          <br></br>
           

          <Button  type="submit" style={{marginLeft:"160px" , backgroundColor:"#053b4b",width:"200px", height:"40px", color:"white"}}> 
          Submit 
          </Button> 
            </Form>
            </div>
            </div>
            </div>

        )
    }
}
// {this.state.FoodItem.map( Food => 


 
         