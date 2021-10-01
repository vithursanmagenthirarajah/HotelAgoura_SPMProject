// import React, { Component } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import ExpenseService from "./services/ExpenseService";

// import axios from "axios";

// class BuyerHome extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       searchWord: "",
//       expenses: [],
//     };
//   }

//   componentDidMount(){
//     this.goBack();
   
// }


//   onSearch = () => {
//     return axios
//       .get(
//         `http://localhost:8090/api/Expense/search/?searchKey=${this.state.searchWord}`
//       )
//       .then((res) => {
//         this.setState({ expenses: res.data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   goBack = () => {
//     ExpenseService.getExpenses().then((res) => {
//         this.setState({ expenses: res.data});
//         this.setState({ searchWord: ""});
//     });
// }
//   render() {
//     return (
//       <div>
//         <Form inline>
//           <FormControl
//             type="text"
//             placeholder="Search Here"
//             className="mr-sm-2"
//             value={this.state.searchWord}
//             onChange={(e) =>
//               this.setState({
//                 searchWord: e.target.value,
//               })
//             }
//           />
//           {this.state.searchWord != "" ? (
//             <Button variant="outline-info" onClick={this.goBack}>
//               X
//             </Button>
//           ) : null}
//           <Button variant="outline-info" onClick={this.onSearch}>
//             Search
//           </Button>
//         </Form>
//         <table  className = "table table-striped table-bordered " style={{width:"900px",marginLeft: "200px"}}>

// <thead>
//     <tr>
//         <th>Date</th>
//         <th>Month</th>
//         <th>Expense Type</th>
//         <th>Amount</th>
//         <th>Description</th>
//         <th>Actions</th>
//      </tr>
// </thead>

        
//                <tbody>
//                                 {
//                                     this.state.expenses.map((
//                                         expense) => (
//                                         <tr key = {expense.id}>
//                                              <td> {expense.date} </td>  
//                                              <td> {expense.month} </td> 
//                                              <td> {expense.expensetype} </td>   
//                                              <td> {expense.amount}</td>
//                                              <td> {expense.description}</td> 
                                             
//                                         </tr>
//                                     )
//                                     )
//                                 }
//                             </tbody>
//                             </table>
//                             </div>
        
//           )
      
//   }
  
// }

// export default BuyerHome;