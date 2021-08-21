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
            //id: this.props.match.params.id,
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
            <h1>Food Items</h1>
            <br/><br/>
            <Row xs={20} md={3} className="g-4">
            {
                this.state.FoodItem.map(
                    Food => 
           
            <Col> 
            <Card key={Food.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Food.path} />
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
              <Button variant="primary">Buy Now</Button>
                    </Card.Body>
          </Card>
          </Col>    
                  )  }
                  </Row> 
            </div> 
        )
    }
}
