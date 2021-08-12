import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Col } from 'react-bootstrap';
import axios from 'axios';
export default class AddFoodItem extends Component {
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
            path:""
        };
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
          path: e.target.value,
        });
      }

      onSubmit(e) {
        e.preventDefault();
    
        const FoodItemDetails = {
          foodItemName: this.state.foodItemName,
          price: this.state.price,
          description: this.state.description,
          category: this.state.category,
          path: this.state.path,
        };
    
        console.log(FoodItemDetails);
    
        axios
          .post("http://localhost:8080/api/FoodItem/add", FoodItemDetails)
          .then((res) => {
            console.log(res.data);
          });
    
        this.setState({
            foodItemName:"",
            price:"",
            description:"",
            category:"",
            path:""
        });
    
        alert("Food added successfully");
      }

    render() {
        return (
            <div>

            <Form onSubmit={this.onSubmit}>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Food Item Name</Form.Label>
              <Form.Control type="text" placeholder="Food Item Name"  onChange={this.onChangeFoodItemName}  value={this.state.foodItemName} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="currency" placeholder="Price" onChange={this.onChangePrice}  value={this.state.price}/>
            </Form.Group>   

            <Form.Label>Description</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Description" >
                <Form.Control
                     as="textarea"
                     style={{ height: '100px' }}
                     onChange={this.onChangeDescription}  value={this.state.description}
                 />
            </FloatingLabel>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Category</Form.Label>
            <Form.Select defaultValue="Choose..."  onChange={this.onChangeCategory}  value={this.state.category}>
              <option>Kottu</option>
              <option>Rice & Curry</option>
            </Form.Select>
          </Form.Group>

          

          <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Food Image</Form.Label>
          <Form.Control type="file" onChange={this.onChangePath}  value={this.state.path}/>
        </Form.Group>

        <Button variant="primary" type="submit">
        Submit
        </Button>

        </Form>

            </div>
        )
    }
}
