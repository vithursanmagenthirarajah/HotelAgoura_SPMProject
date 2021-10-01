import React, { Component } from "react";

import Button from "react-bootstrap/Button";



class PrintThisComponent extends Component {

  render() {

    return (

      <div>

        <Button

          variant="dark"

          style={{ width: "220px" }}

          onClick={() => window.print()}

        >

          Print Activity Log

        </Button>

      </div>

    );

  }

}



export default PrintThisComponent;