import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default class FoodCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // id: this.props.match.params.id,
            FoodItem: []
        }
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
        // ItemService.getItemsById(this.state.id).then( res => {
        //     this.setState({item: res.data});
        // })
    }
    render() {
        return (

            <div>
            <br/> <br/>
            <h1 className="text-center" style={{color:"#0e7794"}}>Food Items</h1>
            <br/><br/>
            <Row xs={20} md={3} className="g-4">
            {
                this.state.FoodItem.map( Food => 
           
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
              <Button variant="#053b4b" style={{backgroundColor:"#053b4b", color:"white"}}>Buy Now</Button> {""} {""} {""} {""} 
              <Button variant="#053b4b" style={{backgroundColor:"#053b4b", color:"white"}}>Add to Cart</Button>
                    </Card.Body>
          </Card>
          </Col>    
                  )  }
                  </Row> 
            </div> 
        )
    }
}
