import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";






  

 


//             <div>
//            
//             <div>
//            
            
//             </div>
//             <Row xs={20} md={3} className="g-4">
//             {
//                 
           
//             <Col  key={Food.id} >
//             <Card style={{ width: '18rem',height:'27rem' }} className="text-center">
//                 <Card.Img variant="top" src={`http://localhost:8090/images/${Food.path}`} width="50px" height="200px"/>
//                     <Card.Body>
//                         <Card.Title>{Food.foodItemName}</Card.Title>
//                         <Card.Text>
//                             {Food.category}
//                         </Card.Text>
//                         <Card.Text>
//                             {Food.description}
//                         </Card.Text>
//                         <Card.Text>
//                             {Food.price}
//                         </Card.Text>
//                         <Link to={"/order/" + Food.id}><Button variant="#053b4b" style={{backgroundColor:"#053b4b", color:"white"}}>Buy Now</Button></Link> {""} {""} {""} {""} 
//               <Button variant="#053b4b" style={{backgroundColor:"#053b4b", color:"white"}}>Add to Cart</Button>
//                     </Card.Body>
//           </Card>
//           </Col>    
//                   ) ) :  (this.state.sortByNameParts.map(
//                     Food => 
//                         <Col key={Food.id}>
//                             <Card style = {{ width: '18rem', height:'25rem', padding : "1rem", margin:"1rem", borderRadius: 15, backgroundColor: "orange"}}>
//                             <Card.Body>
//                             <Card.Title>{Food.foodItemName}</Card.Title>
//                             <Card.Text>
//                                 {Food.category}
//                             </Card.Text>
//                             <Card.Text>
//                                 {Food.description}
//                             </Card.Text>
//                             <Card.Text>
//                                 {Food.price}
//                             </Card.Text>
                        
//                         <Button variant="#053b4b" style={{backgroundColor:"#053b4b", color:"white"}}>Buy Now</Button>  {""} {""} {""} {""} 
//                   <Button variant="#053b4b" style={{backgroundColor:"#053b4b", color:"white"}}>Add to Cart</Button>
//                         </Card.Body>
//                             </Card>
//                         </Col>
//                 ))}
//                   </Row> 
//             </div> 
//         )
//     }
// }




import FormControl from "react-bootstrap/FormControl";



class BuyerHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: "",
      SearchResults: [],
      FoodItem:[]
    };
  }


  
    componentDidMount(){
        axios
      .get("http://localhost:8090/api/FoodItem/get")
      .then((response) => {
        this.setState({ FoodItem: response.data });
      })
      .catch((error) => {
        console.log(error);
      });    
    }

    componentDidMount(){
        this.goBack();
    }

    goBack = () => {
        axios
        .get("http://localhost:8090/api/FoodItem/get").then((res) => {
            this.setState({ FoodItem: res.data});
            this.setState({ searchWord: ""});
        });
    }

  onSearch = () => {
    return axios
      .get(
        `http://localhost:8090/api/FoodItem/search/?searchKey=${this.state.searchWord}`
      )
      .then((res) => {
        this.setState({ SearchResults: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
      <br/> <br/>
                  <h1 className="text-center" style={{color:"#0e7794"}}>Food Items</h1>
                  <br/><br/>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Here"
            className="mr-sm-2"
            value={this.state.searchWord}
            onChange={(e) =>
              this.setState({
                searchWord: e.target.value,
              })
            }
          />

          {this.state.searchWord != "" ? (
            <Button variant="outline-info" onClick={this.goBack}>
              X
            </Button>
          ) : null}

         
       
          <Button variant="outline-info" onClick={this.onSearch}>
            Search
          </Button>
        </Form>

        <div className="card">
        <Row xs={20} md={3} className="g-4">
          {this.state.SearchResults.map((Food) => (
            <Col  key={Food.id} >
            <Card style={{ width: '18rem',height:'27rem' }} className="text-center">
                <Card.Img variant="top" src={`http://localhost:8090/images/${Food.path}`} width="50px" height="200px"/>
                    <Card.Body>
                        <Card.Title>{Food.foodItemName}</Card.Title>
                        <Card.Text>
                            {Food.category}
                        </Card.Text>
                        <Card.Text>
                            {Food.description}
                        </Card.Text>
                        <Card.Text>
                            {Food.price}
                        </Card.Text>
                        <Link to={"/order/" + Food.id}><Button variant="#053b4b" style={{backgroundColor:"#053b4b", color:"white"}}>Buy Now</Button></Link> {""} {""} {""} {""} 
              <Button variant="#053b4b" style={{backgroundColor:"#053b4b", color:"white"}}>Add to Cart</Button>
                    </Card.Body>
          </Card>
          </Col>    
          
          ))}
          </Row>
        </div>

        <div className="card">
        <Row xs={20} md={3} className="g-4">
          {this.state.FoodItem.map((Food) => (
            <Col  key={Food.id} >
            <Card style={{ width: '18rem',height:'27rem' }} className="text-center">
                <Card.Img variant="top" src={`http://localhost:8090/images/${Food.path}`} width="50px" height="200px"/>
                    <Card.Body>
                        <Card.Title>{Food.foodItemName}</Card.Title>
                        <Card.Text>
                            {Food.category}
                        </Card.Text>
                        <Card.Text>
                            {Food.description}
                        </Card.Text>
                        <Card.Text>
                            {Food.price}
                        </Card.Text>
                        <Link to={"/order/" + Food.id}><Button variant="#053b4b" style={{backgroundColor:"#053b4b", color:"white"}}>Buy Now</Button></Link> {""} {""} {""} {""} 
              <Button variant="#053b4b" style={{backgroundColor:"#053b4b", color:"white"}}>Add to Cart</Button>
                    </Card.Body>
          </Card>
          </Col>    
          
          ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default BuyerHome;

