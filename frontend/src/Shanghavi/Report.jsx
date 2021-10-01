import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class PrintThisComponent extends Component {


  render() {
    return (
      <div>
        <Button variant="secondary" onClick={() => window.print()} style={{marginLeft: "1100px"}} >
          Print 
        </Button>
      </div>
    );
  }
}

export default PrintThisComponent;