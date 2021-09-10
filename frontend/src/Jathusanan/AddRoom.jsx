import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Col, Row } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import image from "./images/Room.jpg";
import simage from "./images/vr.jpg";
import icon from "./images/icon (2).png";

import axios from "axios";
export default class AddFoodItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeBeds = this.onChangeBeds.bind(this);
    this.onChangeBathRoom = this.onChangeBathRoom.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: "",
      room_desc: "",
      beds: "",
      bathrooms: "",
      selectedImage: "",
      price: "",
    };
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  onChangeDesc(e) {
    this.setState({
      room_desc: e.target.value,
    });
  }

  onChangeBeds(e) {
    this.setState({
      beds: e.target.value,
    });
  }

  onChangeBathRoom(e) {
    this.setState({
      bathrooms: e.target.value,
    });
  }
  onChangeImage(e) {
    this.setState({
      selectedImage: e.target.files[0],
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    // const FoodItemDetails = {
    //   type: this.state.type,
    //   room_desc: this.state.room_desc,
    //   beds: this.state.beds,
    //   bathrooms: this.state.bathrooms,
    // };

    // console.log(FoodItemDetails);
    const formdata = new FormData();
    formdata.append("File", this.state.selectedImage);
    formdata.append("type", this.state.type);
    formdata.append("room_desc", this.state.room_desc);
    formdata.append("price", this.state.price);
    formdata.append("beds", this.state.beds);
    formdata.append("bathrooms", this.state.bathrooms);

    for (var value of formdata.values()) {
      console.log(value);
    }
    axios.post("http://localhost:8080/api/Rooms/add", formdata).then((res) => {
      console.log(res.data);
      alert("Room Added Successfully");
    });

    this.setState({
      type: "",
      room_desc: "",
      beds: "",
      bathrooms: "",
      price: "",
    });
  }

  render() {
    // const backgroundstyle = {{
    //   width:100%,
    //   backgroundColor:"black"
    // }}
    return (
      <div className="w-100 p-3" style={{ width: "100%", height: "100%" }}>
        <img
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
          }}
          src={image}
        />
        <br></br>
        <br></br>
        <h3 style={{ fontFamily: "Hina Mincho" }}>
          <img src={icon} />
          Add Room Details
        </h3>
        <hr
          style={{ width: "10%", backgroundColor: "#eb5f34", height: "5px" }}
        />
        <Row>
          <div className="card col-md-6 offset-md-0 offset-md-0">
            <div className="card-body">
              <Form onSubmit={this.onSubmit}>
                <div className="form-group" controlId="formGroupEmail">
                  <label> Room Type </label>
                  <select
                    class="form-control selectpicker"
                    style={{ hover: "orange" }}
                    // className="form-control"
                    defaultValue="Select One ..."
                    onChange={this.onChangeType}
                    value={this.state.type}
                  >
                    <input className="form-control" />
                    <option>Select One ...</option>
                    <option>Suite</option>
                    <option>Standard</option>
                    <option>Deluxe</option>
                  </select>
                </div>
                <br></br>

                <div className="form-group">
                  <label> Room Description</label>

                  <input
                    placeholder="Enter Room Description"
                    name="room description"
                    className="form-control"
                    as="textarea"
                    required
                    style={{ height: "100px" }}
                    onChange={this.onChangeDesc}
                    value={this.state.room_desc}
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label> Beds</label>
                  <select
                    className="form-control"
                    defaultValue="Choose..."
                    onChange={this.onChangeBeds}
                    value={this.state.beds}
                  >
                    <input className="form-control" />
                    <option>Choose..</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <br></br>

                <div className="form-group">
                  <label> Bathrooms</label>
                  <select
                    className="form-control"
                    defaultValue="Choose..."
                    onChange={this.onChangeBathRoom}
                    value={this.state.bathrooms}
                  >
                    <input className="form-control" />
                    <option>Choose..</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <br></br>
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    controlId="formGroupEmail"
                    type="text"
                    placeholder="Price"
                    min="100"
                    onChange={this.onChangePrice}
                    value={this.state.price}
                  />
                </Form.Group>
                <br></br>

                <div className="form-group">
                  <label> Room Image</label>
                  <br></br>

                  <input type="file" onChange={this.onChangeImage} />
                </div>
                <br></br>

                <Button
                  className="btn"
                  style={{
                    marginLeft: "200px",
                    backgroundColor: "#eb5f34",
                    borderColor: "#eb5f34",
                    width: "200px",
                    height: "50px",
                  }}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <img
            style={{
              display: "flex",
              width: "40%",
              height: "570px",
              marginLeft: "60%",
              marginTop: "-52%",
            }}
            src={simage}
          />
        </Row>
      </div>
    );
  }
}

{
  /*        
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Room Type</Form.Label>
            <Form.Select
              defaultValue="Select One ..."
              onChange={this.onChangeType}
              value={this.state.type}
            >
              <option>Suite</option>
              <option>Standard</option>
              <option>Deluxe</option>
            </Form.Select>
          </Form.Group> */
}

{
  /* <Form.Label>Room Description</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              onChange={this.onChangeDesc}
              value={this.state.room_desc}
            />
          </FloatingLabel> */
}

// <Form.Group as={Col} controlId="formGridState">
//   <Form.Label>Beds</Form.Label>
//   <Form.Select
//     defaultValue="Choose..."
//     onChange={this.onChangeBeds}
//     value={this.state.beds}
//   >
//     <option>1</option>
//     <option>2</option>
//     <option>3</option>
//   </Form.Select>
// </Form.Group>

// <Form.Group as={Col} controlId="formGridState">
//   <Form.Label>Bathrooms</Form.Label>
//   <Form.Select
//     defaultValue="Choose..."
//     onChange={this.onChangeBathRoom}
//     value={this.state.bathrooms}
//   >
//     <option>1</option>
//     <option>2</option>
//     <option>3</option>
//   </Form.Select>
// </Form.Group>

// <Form.Group controlId="formFile" className="mb-3">
//   <Form.Label>Room Image</Form.Label>
//   <Form.Control type="file" onChange={this.onChangeImage} />
// </Form.Group>

//     <Button variant="primary" type="submit">
//       Submit
//     </Button>
//   </Form>
// </div>
//     );

// }
// }
