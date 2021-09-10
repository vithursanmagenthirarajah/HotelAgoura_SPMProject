import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Col } from 'react-bootstrap';
import axios from 'axios';

export default class UpdateFood extends Component {

    constructor(props) {
        super(props);
    
        this.onChangeFoodItemName = this.onChangeFoodItemName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangePath = this.onChangePath.bind(this);
    
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            id:this.props.match.params.id,
            foodItemName:"",
            price:"",
            description:"",
            category:"",
            path:"",
            altimg: "",
        };
      }
      componentDidMount() {
        axios
          .get("http://localhost:8090/api/FoodItem/get/" + this.props.match.params.id)
          .then((res) => {
            this.setState({
                foodItemName: res.data.foodItemName,
                price: res.data.price,
                description: res.data.description,
                category: res.data.category,
                path: res.data.path,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      onChangeFoodItemName(e) {
        this.setState({
            foodItemName: e.target.value,
        });
      }
    
      onChangePrice(e) {
        this.setState({
          price: e.target.value,
        });
      }
    
      onChangeDescription(e) {
        this.setState({
          description: e.target.value,
        });
      }
    
      onChangeCategory(e) {
        this.setState({
          category: e.target.value,
        });
      }

      onChangePath(e) {
        this.setState({
          path: URL.createObjectURL(e.target.files[0]),
          altimg: e.target.files[0],
        });
      }

      onSubmit(e) {
        e.preventDefault();
    
        // const FoodItemDetails = {
        //   foodItemName: this.state.foodItemName,
        //   price: this.state.price,
        //   description: this.state.description,
        //   category: this.state.category,
        //   path: this.state.path,
        // };
    
        //console.log(FoodItemDetails);
        const formdata =new FormData();
        formdata.append("foodItemName", this.state.foodItemName);
        formdata.append("price", this.state.price);
        formdata.append("description", this.state.description);
        formdata.append("category", this.state.category);
        formdata.append("File", this.state.altimg);

        for (var value of formdata.values()) {
          console.log(value);
        }
        
        axios
          .put("http://localhost:8090/api/FoodItem/update/"+this.props.match.params.id, formdata)
          .then((res) => {
            console.log(res.data);
           
          });
    
        // this.setState({
        //     foodItemName:"",
        //     price:"",
        //     description:"",
        //     category:"",
        //     //path:""
        // });
    
        alert("Food Updated successfully");
       
      }

    render() {
        return (
            <div>

            <br></br>
            <h3 className="text-center" style={{color:"#0e7794"}}>Update Food Item Details</h3>


<div className = "card col-md-6 offset-md-3 offset-md-3">
<div className="container">
            <Form onSubmit={this.onSubmit} class="form">

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Food Item Name</Form.Label>
              <Form.Control 
                  type="text" 
                  required={true} 
                  pattern="\w+.{5,}.[/\D/g]" 
                  title="Food name should not contain numbers or symbols and must be largerthan 5 characters." 
                  placeholder="Food Item Name"  
                  onChange={this.onChangeFoodItemName}  
                  value={this.state.foodItemName} 
              />
            </Form.Group>
         
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control 
                  type="currency" 
                  required={true} 
                  placeholder="Price" 
                  onChange={this.onChangePrice}  
                  value={this.state.price}/>
            </Form.Group>   
       
            <Form.Label>Description</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Description" >
                <Form.Control
                     as="textarea"
                     required={true} 
                     pattern="\w+.{10,}.[/\D/g]" 
                     title="Food description should not contain numbers or symbols and must be larger than 10 characters." 
                     style={{ height: '100px' }}
                     onChange={this.onChangeDescription}  
                     value={this.state.description}
                 />
            </FloatingLabel>
         
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Category</Form.Label>
            <Form.Select    required={true}   onChange={this.onChangeCategory}  value={this.state.category}>
            <option>Choose ..</option>
            <option>Kottu</option>
              <option>Rice & Curry</option>
              <option>Briyanies</option>
              <option>Naans & Chappathis</option>
              <option>Noodles</option>
              <option>Bites & curries</option>
              <option>Salads</option>
              <option>Soups</option>
              <option>Sandwiches</option>
              <option>Dosa</option>
              <option>Desserts</option>
              <option>Soft Drinks</option>
              <option>Fried Rice</option>
              <option>Cakes</option>
              <option>Naasi Goreng</option>
              <option>Pulao Rice</option>
            </Form.Select>
          </Form.Group>

       

          <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Food Image</Form.Label>
          <Form.Control 
              type="file" 
              onChange={this.onChangePath} 
              //value={this.state.path}
          />
          <img
        
          height="150"
          width="150"
          src={"http://localhost:8090/Images/" + this.state.path}
          alt="Image Not Found"
          onError={(e) => {
            
            e.target.onerror = null;
            e.target.src = this.state.path;
          }}
        ></img>
        </Form.Group>
        <br></br>
      
        <Button className="btn" varient="black" type="submit" style={{marginLeft:"160px" , width:"200px", height:"40px",backgroundColor:"#053b4b", color:"white"}}>
        Submit
        </Button>

        </Form>
            </div>
            </div>
            </div>
        )
    }
}

