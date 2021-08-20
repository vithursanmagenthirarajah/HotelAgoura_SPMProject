import React, { Component } from "react";
import axios from "axios";
export default class ViewFooditem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Rooms: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/Rooms/get")
      .then((response) => {
        this.setState({ Rooms: response.data });
        console.log(this.state.Rooms);
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
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> ID</th>
                <th> type</th>
                <th> Description</th>
                <th> Beds</th>
                <th> Bathrooms</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Rooms.map((SingleRoom) => (
                <tr key={SingleRoom.id}>
                  <td>
                    <img
                      src={`http://localhost:8080/Images/${SingleRoom.image}`}
                      alt=""
                      height="150"
                      width="150"
                    />
                  </td>
                  <td> {SingleRoom.room_desc} </td>
                  <td> {SingleRoom.beds}</td>
                  <td> {SingleRoom.bathrooms}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
// <button onClick={ () => this.editItem(Rooms.id)} className="btn btn-info">Update </button>
// <button style={{marginLeft: "10px"}} onClick={ () => this.deleteItem(Rooms.id)} className="btn btn-danger">Delete </button>
// <button style={{marginLeft: "10px"}} onClick={ () => this.viewItem(Rooms.id)} className="btn btn-info">View </button>

// <div className = "row">
//                <button className="btn btn-primary" onClick={this.addItem}> Add Item</button>
//             </div>
