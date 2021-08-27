import React, { Component } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Row";
import {
  CCard,
  CRow,
  CCol,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default class ViewFooditem extends Component {
  constructor(props) {
    super(props);
    this.passData = this.passData.bind(this);
    this.deleteRoomDetails = this.deleteRoomDetails.bind(this);

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
  deleteRoomDetails(id) {
    axios
      .delete("http://localhost:8080/api/Rooms/delete/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      Rooms: this.state.Rooms.filter((el) => el.rid !== id),
    });
  }

  passData(SingleRoom) {
    axios.get("http:localhost:8080/api/Rooms");
  }

  render() {
    return (
      // <div>
      //   <h2 className="text-center"> Food Item List</h2>

      //   <br></br>
      //   <div className="row">
      //     <table className="table table-striped table-bordered">
      //       <thead>
      //         <tr>
      //           <th> ID</th>
      //           <th> type</th>
      //           <th> Description</th>
      //           <th> Beds</th>
      //           <th> Bathrooms</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {this.state.Rooms.map((SingleRoom) => (
      //           <tr key={SingleRoom.id}>
      //             <td>
      //               <img
      //                 src={`http://localhost:8080/Images/${SingleRoom.image}`}
      //                 alt=""
      //                 height="150"
      //                 width="150"
      //               />
      //             </td>
      //             <td> {SingleRoom.room_desc} </td>
      //             <td> {SingleRoom.beds}</td>
      //             <td> {SingleRoom.bathrooms}</td>
      //             <td><a href={'/update/'+SingleRoom.rid}><button>Hi</button></a></td>
      //           </tr>
      //         ))}
      //       </tbody>
      //     </table>
      //   </div>
      // </div>

      <div>
        <br /> <br />
        <h2 style={{ fontFamily: "Hina Mincho" }}>Rooms</h2>
        <hr
          style={{ width: "5%", backgroundColor: "#eb5f34", height: "5px" }}
        />
        <br />
        <br />
        <Row xs={20} md={1} className="row">
          {this.state.Rooms.map((SingleRoom) => (
            <Col>
              <CCard
                className="mb-3"
                style={{
                  maxWidth: "10000px",
                  borderRadius: 15,
                }}
              >
                <CRow className="g-0">
                  <CCol md={4}>
                    <CCardImage
                      src={`http://localhost:8080/Images/${SingleRoom.image}`}
                      height="400"
                      width="150"
                      borderRadius="15"
                    />
                    {console.log(
                      `http://localhost:8080/Images/${SingleRoom.image}`
                    )}
                  </CCol>

                  <CCol md={8}>
                    <CCardBody>
                      <CCardTitle>
                        <h1 style={{ color: "#f87a0f", fontFamily: "serif" }}>
                          {SingleRoom.type}
                        </h1>
                      </CCardTitle>
                      <br></br>
                      <CCardText>
                        <h3 style={{ fontFamily: "Nunito Sans" }}>
                          {SingleRoom.room_desc}
                        </h3>
                      </CCardText>
                      <br></br>
                      <CCardText>
                        <h4
                          style={{
                            fontFamily: "serif",
                            fontSize: "20px",
                            marginTop: "80px",
                          }}
                        >
                          Beds : {SingleRoom.beds}
                        </h4>
                      </CCardText>
                      <CCardText>
                        <h4 style={{ fontFamily: "serif", fontSize: "20px" }}>
                          Bathrooms : {SingleRoom.bathrooms}
                        </h4>
                      </CCardText>
                      <br></br>
                      <CCardText>
                        <h4 style={{ fontFamily: "serif", fontSize: "20px" }}>
                          Price : {SingleRoom.price}
                        </h4>
                      </CCardText>
                      <br></br>
                      <a href={"/update/" + SingleRoom.rid}>
                        <CButton
                          style={{
                            backgroundColor: "#f87a0f",
                            width: "150px",
                            height: "40px",
                            border: "none",
                            marginLeft: "650px",
                            marginTop: "-250px",
                          }}
                        >
                          Update
                        </CButton>
                      </a>
                      <br></br>

                      <CButton
                        style={{
                          backgroundColor: "#f87a0f",
                          width: "150px",
                          height: "40px",
                          border: "none",
                          marginLeft: "650px",
                          marginTop: "-150px",
                        }}
                        onClick={() => this.deleteRoomDetails(SingleRoom.rid)}
                      >
                        Delete
                      </CButton>
                    </CCardBody>
                  </CCol>
                </CRow>
              </CCard>
            </Col>
          ))}
        </Row>
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
