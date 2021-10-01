// import React, { Component }from "react";

// import { Image } from "react-bootstrap";

// import { Link } from "react-router-dom";

// import hotel from "../Jathusanan/images/hotel.png";
// import EventBus from "../Shanghavi/Login/common/EventBus";
// import AuthService from "../Shanghavi/Login/services/auth.service";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";


// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.logOut = this.logOut.bind(this);

//     this.state = {
//       showModeratorBoard: false,
//       showAdminBoard: false,
//       currentUser: undefined,
//     };
//   }

//   componentDidMount() {
//     const user = AuthService.getCurrentUser();

//     if (user) {
//       this.setState({
//         currentUser: user,
//         showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
//         showAdminBoard: user.roles.includes("ROLE_ADMIN"),
//       });
//     }
    
//     EventBus.on("logout", () => {
//       this.logOut();
//     });
//   }

//   componentWillUnmount() {
//     EventBus.remove("logout");
//   }

//   logOut() {
//     AuthService.logout();
//     this.setState({
//       showModeratorBoard: false,
//       showAdminBoard: false,
//       currentUser: undefined,
//     });
//   }

//   render() {
//     const { currentUser, showModeratorBoard, showAdminBoard } = this.state;


// // const Navbar = (props) => {
//   return (
//     <div>

// <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <Link to={"/"} className="navbar-brand">
//             bezKoder
//           </Link>
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/home"} className="nav-link">
//                 Home
//               </Link>
//             </li>

//             {showModeratorBoard && (
//               <li className="nav-item">
//                 <Link to={"/mod"} className="nav-link">
//                   Moderator Board
//                 </Link>
//               </li>
//             )}

//             {showAdminBoard && (
//               <li className="nav-item">
//                 <Link to={"/admin"} className="nav-link">
//                   Admin Board
//                 </Link>
//               </li>
//             )}

//             {currentUser && (
//               <li className="nav-item">
//                 <Link to={"/user"} className="nav-link">
//                   User
//                 </Link>
//               </li>
//             )}
//           </div>

//           {currentUser ? (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/profile"} className="nav-link">
//                   {currentUser.username}
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a href="/login" className="nav-link" onClick={this.logOut}>
//                   LogOut
//                 </a>
//               </li>
//             </div>
//           ) : (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/login"} className="nav-link">
//                   Login
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to={"/register"} className="nav-link">
//                   Sign Up
//                 </Link>
//               </li>
//             </div>
//           )}
      
//         <br></br>
//         <br></br>
//         <br></br>

//         <Image variant="top" src={hotel} width="200px" height="80px" />

//         <Link className="navbar-brand" to="/">
//           Agoura Hotel
//         </Link>

//         <div className="collapse navbar-collapse">
//           <br></br>

//           <ul className="navbar-nav">
//             <li></li>

//             <li></li>

//             <li className="navbar-item">
//               <Link to="/" className="nav-link">
//                 HOME
//               </Link>
//             </li>

//             <br></br>

//             <li className="navbar-item">
//               <Link to="/Fdash"className="nav-link">DINNING</Link>
//             </li>

//             <br></br>

//             <li className="navbar-item">
//               <Link to="/venues" className="nav-link">EVENT</Link>
//             </li>

//             <br></br>

//             <li className="navbar-item">
//               <Link to="/AddRoom" className="nav-link">
//                 ROOM
//               </Link>
//             </li>
//             <li className="navbar-item">
//               <Link to="/status" className="nav-link">
//                 ROOM STATUS
//               </Link>
//             </li>

//             <br></br>

//             <li className="navbar-item">
//               <Link to="/getemployees" className="nav-link">
//                 EMPLOYEE
//               </Link>
//             </li>

//             <br></br>

//             <li className="navbar-item">
//               <Link to="/viewexpense" className="nav-link">EXPENSE</Link>
//             </li>

//             <li className="navbar-item">
//               <Link to="/search/:searchKey" className="nav-link">search</Link>
//             </li>

//             <br></br>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
//   }
// }

// export default Navbar;
