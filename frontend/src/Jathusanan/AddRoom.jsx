import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Col } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import axios from "axios";
export default class AddFoodItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeBeds = this.onChangeBeds.bind(this);
    this.onChangeBathRoom = this.onChangeBathRoom.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: "",
      room_desc: "",
      beds: "",
      bathrooms: "",
      selectedImage: "",
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
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
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
          </Form.Group>

          <Form.Label>Room Description</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              onChange={this.onChangeDesc}
              value={this.state.room_desc}
            />
          </FloatingLabel>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Beds</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              onChange={this.onChangeBeds}
              value={this.state.beds}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Bathrooms</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              onChange={this.onChangeBathRoom}
              value={this.state.bathrooms}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Room Image</Form.Label>
            <Form.Control type="file" onChange={this.onChangeImage} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
