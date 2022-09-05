import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import BookFormModal from "./BookFormModal";
import Button from "react-bootstrap/Button";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      status:"",
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/books`)
      .then((response) => {
        this.setState({
          books: response.data,
        });
      })
      .catch((error) => console.error(error));
  }
  handleOnChange = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  addBook = (event) => {
    event.preventDefault();

    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: this.state.status,
    };
    console.log(obj);
    axios
      .post(`http://localhost:3001/addBook`, obj)
      .then((response) => {
        this.setState({
          books: response.data,
        });
      }
      )
      .catch((error) => console.error(error));

  };
  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };


  deleteBook = (id) => {
    axios
      .delete(`http://localhost:3001/deleteBook/${id}`)
      .then((result) => {
        this.setState({
          books: result.data,
        });

      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button variant="primary" size="lg" onClick={this.handleShow}>
          Add a Book!
        </Button>
        <BookFormModal
          handleShow={this.state.showModal}
          handleClose={this.handleClose}
          addBook={this.addBook}
          handleOnChange={this.handleOnChange}
        />
        {this.state.books.length ? (
          <Carousel fade>
            {this.state.books.map((book, idx) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://live.staticflickr.com/4062/4474421855_4b20643258_b.jpg"
                  alt="First slide"
                  height={800}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <h5>Status: {book.status}</h5>
                  <p>{book.description}</p>
                  <Button 
                          variant="outline-secondary"
                          size="lg"
                          onClick={() => this.deleteBook(book._id)}
                        >Delete Book</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found </h3>
        )}
      </>
    );
  }
}

export default BestBooks;
