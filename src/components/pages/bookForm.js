"use strict"
import React from 'react';
import {Well, Panel, FormControl, FormGroup,ControlLabel, Button} from 'react-bootstrap';



class BookForm extends React.Component {

  handleSubmit(e) {
    console.log(e);
  }

  render() {
    return(
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter Title"
                ref="title" />
          </FormGroup>

          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
                type="text"
                placeholder="EnterDescription"
                ref="description" />
          </FormGroup>
          
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
                type="text"
                placeholder="Enter Price"
                ref="price" />
            </FormGroup>

          <Button
            onClick={this.handleSubmit.bind(this)}
            bsStyle="primary">Save book</Button>

        </Panel>
      </Well>
    );
  }
}

export default BookForm;