import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Col } from "react-bootstrap";
class UpdateRoom extends Component {
  constructor(props) {
    super(props);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeBeds = this.onChangeBeds.bind(this);
    this.onChangeBathRoom = this.onChangeBathRoom.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    // this.onChangeAltImage = this.onChangeAltImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: "",
      room_desc: "",
      beds: "",
      bathrooms: "",
      image: "",
      altimg: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/Rooms/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          type: res.data.type,
          room_desc: res.data.room_desc,
          beds: res.data.beds,
          bathrooms: res.data.bathrooms,
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
      image: URL.createObjectURL(e.target.files[0]),
      altimg: e.target.files[0],
    });
  }
  // onChangeAltImage() {
  //   this.setState({
  //     altimg: URL.createObjectURL(this.state.image),
  //   });
  // }

  onSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();

    formdata.append("File", this.state.altimg);
    formdata.append("type", this.state.type);
    formdata.append("room_desc", this.state.room_desc);
    formdata.append("beds", this.state.beds);
    formdata.append("bathrooms", this.state.bathrooms);

    for (var value of formdata.values()) {
      console.log(value);
    }
    axios
      .put(
        "http://localhost:8080/api/Rooms/update/" + this.props.match.params.id,
        formdata
      )
      .then((res) => {
        console.log(res.data);
        alert("Room Added Successfully");
      });

    // this.setState({
    //   type: "",
    //   room_desc: "",
    //   beds: "",
    //   bathrooms: "",
    // });
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
          <Form.Group controlId="formFile" className="mb-3">
            <img
              alt="Image Not Found"
              height="150"
              width="150"
              src={"http://localhost:8080/Images/" + this.state.image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = this.state.image;
              }}
            ></img>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateRoom;
