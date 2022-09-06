import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class UpdateFormModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.updateModal} onHide={this.props.updateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.updateBook}>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter a book name"
                defaultValue={this.props.selectedBook.title}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter description"
                defaultValue={this.props.selectedBook.description}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                id="status"
                defaultValue={this.props.selectedBook.status}
              >
                <option>Choose a Status</option>
                <option value="The Perfect Book">The Perfect Book</option>
                <option value="Top 5">Top 5</option>
                <option value="Highly Recommended">Highly Recommended</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Book Now!
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.updateClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UpdateFormModal;
