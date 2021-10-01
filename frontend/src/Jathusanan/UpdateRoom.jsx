import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Col } from "react-bootstrap";
import uroom from "./images/updateRoom.jpg";
import uroom2 from "./images/ur2.jpg";

class UpdateRoom extends Component {
  constructor(props) {
    super(props);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeBfast = this.onChangeBfast.bind(this);
    this.onChangePets = this.onChangePets.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeCapacity = this.onChangeCapacity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: "",
      room_desc: "",
      image: "",
      altimg: "",
      capacity: "",
      size: "",
      breakfast: "",
      pets: "",
      price: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8090/api/Rooms/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          type: res.data.type,
          room_desc: res.data.room_desc,
          pets: res.data.pets,
          breakfast: res.data.breakfast,
          price: res.data.price,
          size: res.data.size,
          capacity: res.data.capacity,
          image: res.data.image,
        });
      })
      .catch((err) => console.log(err));
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

  onChangePets(e) {
    this.setState({
      pets: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }
  onChangeImage(e) {
    this.setState({
      image: URL.createObjectURL(e.target.files[0]),
      altimg: e.target.files[0],
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();

    formdata.append("File", this.state.altimg);
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
    axios
      .put(
        "http://localhost:8090/api/Rooms/update/" + this.props.match.params.id,
        formdata
      )
      .then((res) => {
        console.log(res.data);
        alert("Room Updated Successfully");
      });
  }

  render() {
    return (
      <div>
        <img
          style={{
            display: "flex",
            width: "100%",
            height: "400px",
          }}
          src={uroom}
        />
        <br></br>
        <br></br>
        <h4 style={{ fontFamily: "Hina Mincho" }}>Update Room Details</h4>

        <hr
          style={{ width: "10%", backgroundColor: "#eb5f34", height: "5px" }}
        />
        <div className="container">
          <div className="row">
            <div
              className="card col-md-6 offset-md-0 offset-md-0"
              style={{ borderRadius: "200" }}
            >
              <div className="card-body">
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
                  <br></br>

                  <Form.Label>Room Description</Form.Label>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Description"
                  >
                    <Form.Control
                      as="textarea"
                      style={{ height: "100px" }}
                      onChange={this.onChangeDesc}
                      value={this.state.room_desc}
                    />
                  </FloatingLabel>
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
                      value={this.state.pets}
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

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Room Image</Form.Label>
                    <Form.Control type="file" onChange={this.onChangeImage} />
                  </Form.Group>
                  <br></br>
                  <Form.Group controlId="formFile" className="mb-3">
                    <img
                      alt="Image Not Found"
                      height="200"
                      width="250"
                      src={"http://localhost:8090/Images/" + this.state.image}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = this.state.image;
                      }}
                    />
                  </Form.Group>
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
          </div>
        </div>
        <img
          style={{
            display: "flex",
            width: "40%",
            height: "570px",
            marginLeft: "60%",
            marginTop: "-69%",
            alt: "image",
          }}
          src={uroom2}
        />
      </div>
    );
  }
}

export default UpdateRoom;
