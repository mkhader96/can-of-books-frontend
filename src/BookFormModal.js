import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class BookFormModal extends React.Component {
    
    
  render() {
    return (
      <div>
        <Modal show={this.props.handleShow} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add A Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.props.addBook}>
                <Form.Group className="mb-3">
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter a book name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Enter description"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select onChange={this.props.handleOnChange}>
                    <option>Choose a Status</option>
                    <option value="The Perfect Book">The Perfect Book</option>
                    <option value="Top 5">Top 5</option>
                    <option value="Highly Recommended">
                      Highly Recommended
                    </option>
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add a Book Now!
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
       
      </div>
    );
  }
}

export default BookFormModal;
