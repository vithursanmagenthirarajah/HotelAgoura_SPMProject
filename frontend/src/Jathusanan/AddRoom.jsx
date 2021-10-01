import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import image from "./images/Room.jpg";
import simage from "./images/vr.jpg";
import icon from "./images/icon (2).png";

import axios from "axios";
export default class AddFoodItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeBfast = this.onChangeBfast.bind(this);
    this.onChangePets = this.onChangePets.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeCapacity = this.onChangeCapacity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      selectedImage: "",
      type: "",
      room_desc: "",
      capacity: "",
      size: "",
      breakfast: "",
      pets: "",
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

  onChangeBfast(e) {
    this.setState({
      breakfast: e.target.value,
    });
  }

  onChangePets(e) {
    this.setState({
      pets: e.target.value,
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
  onChangeCapacity(e) {
    this.setState({
      capacity: e.target.value,
    });
  }
  onChangeSize(e) {
    this.setState({
      size: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    // console.log(FoodItemDetails);
    const formdata = new FormData();
    formdata.append("File", this.state.selectedImage);
    formdata.append("type", this.state.type);
    formdata.append("room_desc", this.state.room_desc);
    formdata.append("price", this.state.price);
    formdata.append("size", this.state.size);
    formdata.append("capacity", this.state.capacity);
    formdata.append("breakfast", this.state.breakfast);
    formdata.append("pets", this.state.pets);

    for (var value of formdata.values()) {
      console.log(value);
    }
    axios.post("http://localhost:8090/api/Rooms/add", formdata).then((res) => {
      console.log(res.data);
      alert("Room Added Successfully");
    });

    this.setState({
      type: "",
      room_desc: "",
      capacity: "",
      size: "",
      breakfast: "",
      pets: "",
      price: "",
    });
  }

  render() {
    return (
      <div className="w-100 p-3" style={{ width: "100%", height: "100%" }}>
        <img
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            alt: "image",
          }}
          src={image}
        />
        <br></br>
        <br></br>
        <h3 style={{ fontFamily: "Hina Mincho" }}>
          <img src={icon} alt="image" />
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
                    <option>Single Economy</option>
                    <option>Single Basic</option>
                    <option>Single Standard</option>
                    <option>Single Deluxe</option>
                    <option>Double Economy</option>
                    <option>Double Basic</option>
                    <option>Double Standard</option>
                    <option>Double Deluxe</option>
                    <option>Family Basic</option>
                    <option>Family Standard</option>
                    <option>Family Deluxe</option>
                    <option>Presidential</option>
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
                  <label> Breakfast</label>
                  <select
                    className="form-control"
                    defaultValue="Choose..."
                    onChange={this.onChangeBfast}
                    value={this.state.breakfast}
                  >
                    <input className="form-control" />
                    <option>Choose..</option>
                    <option>Available</option>
                    <option>Not Available</option>
                  </select>
                </div>
                <br></br>

                <div className="form-group">
                  <label> Pets</label>
                  <select
                    className="form-control"
                    defaultValue="Choose..."
                    onChange={this.onChangePets}
                    value={this.state.bathrooms}
                  >
                    <input className="form-control" />
                    <option>Choose..</option>
                    <option>Allowed</option>
                    <option>Not Allowed</option>
                  </select>
                </div>
                <br></br>
                <div className="form-group">
                  <label> Capacity (people)</label>
                  <select
                    className="form-control"
                    defaultValue="Choose..."
                    onChange={this.onChangeCapacity}
                    value={this.state.capacity}
                  >
                    <input className="form-control" />
                    <option>Choose..</option>
                    <option>2</option>
                    <option>4</option>
                    <option>6</option>
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

                <Form.Group className="mb-3">
                  <Form.Label>Size (in SQft.)</Form.Label>
                  <Form.Control
                    controlId="formGroupEmail"
                    type="text"
                    placeholder="Size in SQ.ft"
                    onChange={this.onChangeSize}
                    value={this.state.size}
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
              alt: "image",
            }}
            src={simage}
          />
        </Row>
      </div>
    );
  }
}
