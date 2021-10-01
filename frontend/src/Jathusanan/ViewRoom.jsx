import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRoomDetails = this.deleteRoomDetails.bind(this);

    this.state = {
      Rooms: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8090/api/Rooms/get")
      .then((response) => {
        this.setState({ Rooms: response.data });
        console.log(this.state.Rooms);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteRoomDetails(id) {
    axios
      .delete("http://localhost:8090/api/Rooms/delete/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      Rooms: this.state.Rooms.filter((el) => el.rid !== id),
    });
  }

  render() {
    return (
      <div>
        <section className="container">
          <div className="row my-5">
            {this.state.Rooms.map((room) => {
              return (
                <>
                  <div className="col-md-4 col-12 mx-auto p-2">
                    <div className="card shadow-lg border-0 room">
                      <img
                        src={`http://localhost:8090/images/${room.image}`}
                        alt="single room"
                        className="img-fluid"
                      />
                      <div className="price-top">
                        <h6>Rs {room.price}</h6>
                        <p>per night</p>
                      </div>

                      <Link
                        to={"/update/" + room.rid}
                        className="btn-warning room-link text-center"
                      >
                        Update
                      </Link>

                      <p className="room-info">{room.type}</p>

                      <Button
                        className="btn-danger"
                        onClick={() => {
                          this.deleteRoomDetails(room.rid);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default RoomList;
