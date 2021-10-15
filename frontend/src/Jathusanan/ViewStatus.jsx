import React, { Component } from "react";
import axios from "axios";


export default class ViewFooditem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      RoomStatus: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8090/api/status/get")
      .then((response) => {
        this.setState({ RoomStatus: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

  }

  render() {
    return (
      <div>
        <h4 style={{ fontFamily: "Hina Mincho", marginTop: "20px" }}>
          Update Room Details
        </h4>

        <hr
          style={{ width: "10%", backgroundColor: "#eb5f34", height: "5px" }}
        />

        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Date Booked</th>
                <th> Last Date</th>
                <th> RoomNO</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: "Lora" }}>
              {this.state.RoomStatus.map((rs) => (
                <tr key={rs.rsid}>
                  <td> {rs.cFName} </td>
                  <td> {rs.cLName}</td>
                  <td> {rs.dateBooked}</td>
                  <td> {rs.lastDate}</td>
                  <td> {rs.roomNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
