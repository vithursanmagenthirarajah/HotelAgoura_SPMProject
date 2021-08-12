import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
export default class ViewFooditem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //id: this.props.match.params.id,
            FoodItem: []
        }
    }

    componentDidMount(){
        axios
      .get("http://localhost:8080/api/FoodItem/get")
      .then((response) => {
        this.setState({ FoodItem: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
        // ItemService.getItemsById(this.state.id).then( res => {
        //     this.setState({item: res.data});
        // })
    }

    render() {
        return (
            <div>
            <h2 className="text-center"> Food Item List</h2>
            
            <br></br>
            <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                               <th> Image</th>
                               <th> Food Item Name</th>
                               <th> Price</th>
                               <th> Description</th>
                               <th> Category</th>
                               <th> Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.FoodItem.map(
                                   Food => 
                                   <tr key = {Food.id}>
                                        <td><img src={ Food.path} alt="" height="150" width="150"/></td> 
                                        <td> { Food.foodItemName} </td>   
                                        <td> {Food.price}</td>
                                        <td> {Food.description}</td>
                                        <td> {Food.category}</td>
                                        <td>
                                          
                                        </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

            </div>
            </div>
        )
    }
}
// <button onClick={ () => this.editItem(FoodItem.id)} className="btn btn-info">Update </button>
// <button style={{marginLeft: "10px"}} onClick={ () => this.deleteItem(FoodItem.id)} className="btn btn-danger">Delete </button>
// <button style={{marginLeft: "10px"}} onClick={ () => this.viewItem(FoodItem.id)} className="btn btn-info">View </button>



// <div className = "row">
//                <button className="btn btn-primary" onClick={this.addItem}> Add Item</button>
//             </div>