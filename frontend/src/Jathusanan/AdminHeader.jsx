import React from "react";

import { Image } from "react-bootstrap";

import { Link } from "react-router-dom";

import hotel from "../Jathusanan/images/hotel.png";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <br></br>
        <br></br>
        <br></br>

        <Image variant="top" src={hotel} width="200px" height="80px" />

        <Link className="navbar-brand" to="/">
          Agoura Hotel
        </Link>

        <div className="collapse navbar-collapse">
          <br></br>

          <ul className="navbar-nav">
            <li></li>

            <li></li>

            <li className="navbar-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>

            <br></br>

            <li className="navbar-item">
              <Link to="/Fdash"className="nav-link">DINNING</Link>
            </li>

            <br></br>

            <li className="navbar-item">
              <Link to="/venues" className="nav-link">EVENT</Link>
            </li>

            <br></br>

            <li className="navbar-item">
              <Link to="/AddRoom" className="nav-link">
                ROOM
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/status" className="nav-link">
                ROOM STATUS
              </Link>
            </li>

            <br></br>

            <li className="navbar-item">
              <Link to="/getemployees" className="nav-link">
                EMPLOYEE
              </Link>
            </li>

            <br></br>

            <li className="navbar-item">
              <Link className="nav-link">EXPENSE</Link>
            </li>

            <br></br>

            <br></br>

            <li className="navbar-item">
              <Link to="/viewVenues" className="nav-link">VIEW</Link>
            </li>

            <br></br>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;