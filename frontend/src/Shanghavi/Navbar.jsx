import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import hotel from '../Shanghavi/Images/hotel1.jpg'



        const Navbar = (props) => {
        return (
            <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <br></br><br></br><br></br>
                <Image variant="top" src={hotel} width="200px" height="80px" />
            <Link className="navbar-brand" >Agoura Hotel</Link>
            <div className="collapse navbar-collapse">
                <br></br>
                    <ul className="navbar-nav">
                   
                        <li></li>
                        <li></li>
                        <li className="navbar-item">
                        <Link to="/HOME" className="nav-link">HOME</Link>
                        </li>
                        <br></br>
                        
                        <li className="navbar-item">
                        <Link  className="nav-link">DINNING</Link>
                        </li>
                        <br></br>
                        <li className="navbar-item">
                        <Link  className="nav-link">EVENT</Link>
                        </li>
                        <br></br>
                        <li className="navbar-item">
                        <Link  className="nav-link">ROOM</Link>
                        </li>
                        <br></br>
                        
                        <li className="navbar-item">
                        <Link to="/getemployees" className="nav-link">EMPLOYEE</Link>
                        </li>
                        <br></br>
                       
                        <li className="navbar-item">
                        <Link className="nav-link">EXPENSE</Link>
                        </li>
                        <br></br>
                    
                    </ul>
                </div>

            </nav>
           
                </div>
                
                
        )
  }
    

export default Navbar;