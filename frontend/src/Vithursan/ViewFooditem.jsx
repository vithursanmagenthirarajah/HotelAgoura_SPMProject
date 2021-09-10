import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
export default class ViewFooditem extends Component {
    constructor(props) {
        super(props)
        this.passData = this.passData.bind(this);
        this.deleteFoodItemDetails = this.deleteFoodItemDetails.bind(this);
        this.state = {
            //id: this.props.match.params.id,
            FoodItem: []
        }
    }

    componentDidMount(){
        axios
      .get("http://localhost:8090/api/FoodItem/get")
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

    passData(Food){
        axios.get("http:localhost:8090/api/FoodItem")
      }

    deleteFoodItemDetails(id) {
        axios
          .delete("http://localhost:8090/api/FoodItem/delete/" + id)
          .then((response) => {
            console.log(response.data);
          });
    
        this.setState({
            FoodItem: this.state.FoodItem.filter((el) => el.id !== id),
        });
      }
    render() {
        return (
            <div>
            <br></br>
            <h2 className="text-center" style={{color:"#0e7794"}}> Food Item List</h2>
            <Link to="/add"><Button variant="#053b4b" type="submit" style={{marginLeft:"160px" , width:"200px", height:"40px",backgroundColor:"#053b4b", color:"white"}}> 
                Add Food Item
            </Button> </Link>
            
            <Link to="/card"><Button variant="#053b4b" type="submit" style={{ marginLeft:"460px",  width:"200px", height:"40px",backgroundColor:"#053b4b", color:"white"}}> 
            Customer View
        </Button> </Link>
            <br></br>
            <br></br><br></br>
            <div className = "row">
                   <table className = "table table-striped table-bordered" style={{ backgroundColor:"lightgrey" }}>

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
                                        <td><img src={`http://localhost:8090/images/${Food.path}`} alt="" height="150" width="150"/></td> 
                                        <td> { Food.foodItemName} </td>   
                                        <td> {Food.price}</td>
                                        <td> {Food.description}</td>
                                        <td> {Food.category}</td>
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFoodItemDetails(Food.id)} className="btn btn-danger">Delete</button>
                                        <Link to={"/fupdate/" +Food.id}><button style={{marginLeft: "10px"}}  className="btn btn-info">Update</button></Link>
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