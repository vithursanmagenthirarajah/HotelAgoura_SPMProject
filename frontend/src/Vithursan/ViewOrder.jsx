import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import PrintThisComponent from './Print';

export default class ViewOrder extends Component {

    constructor(props) {
        super(props)
        this.passData = this.passData.bind(this);
        this.deleteOrderItemDetails = this.deleteOrderItemDetails.bind(this);
        this.state = {
            //id: this.props.match.params.id,
            order: []
        }
    }

    componentDidMount(){
        axios
      .get("http://localhost:8090/api/Order/get")
      .then((response) => {
        this.setState({ order: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
        // ItemService.getItemsById(this.state.id).then( res => {
        //     this.setState({item: res.data});
        // })
    }

    passData(order){
        axios.get("http:localhost:8090/api/order")
      }

      deleteOrderItemDetails(id) {
        axios
          .delete("http://localhost:8090/api/Order/delete/" + id)
          .then((response) => {
            console.log(response.data);
          });
    
        this.setState({
            order: this.state.order.filter((el) => el.id !== id),
        });
      }
    render() {
        return (
            <div>
            <div>
            <br></br>
            <h2 className="text-center" style={{color:"#0e7794"}}>View Order details</h2>
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
                               <th> Name</th>
                               <th> Home No</th>
                               <th> Street</th>
                               <th> City</th>
                               <th> Phone No</th>
                               <th> Payment Method</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.order.map(
                                   order => 
                                   <tr key = {order.id}>
                                        <td>{order.name}</td> 
                                        <td> {order.no} </td>   
                                        <td> {order.street}</td>
                                        <td> {order.city}</td>
                                        <td> {order.phoneno}</td>
                                        <td> {order.payment}</td>
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteOrderItemDetails(order.id)} className="btn btn-danger">Delete</button>
                                        <Link><button style={{marginLeft: "10px"}}  className="btn btn-info">Deliver</button></Link>
                                        </td>
                                   </tr>
                               )
                           }
                       </tbody>

                      
                   </table>
            
            </div>
            <PrintThisComponent/>
            </div>
            </div>
        )
    }
}
