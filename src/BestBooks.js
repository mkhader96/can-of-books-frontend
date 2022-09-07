import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import BookFormModal from "./BookFormModal";
import Button from "react-bootstrap/Button";
import UpdateFormModal from "./UpdateFormModal";
import { withAuth0 } from "@auth0/auth0-react";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
      status: "",
      updateModal: false,
      selectedBook: {},
      email : this.props.auth0.user.email
    };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}books?email=${this.state.email}`)
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
      email: this.state.email
    };
    console.log(obj);
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}addBook`, obj)
      .then((response) => {
        this.setState({
          books: response.data,
        });
      })
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

// --------------------------------------------
updateShow = (item) =>{
  this.setState({
    updateModal : true,
    selectedBook : item
  })
  
}


updateClose = () =>{
  this.setState({
    updateModal : false
  })
}

updateBook = (event) =>{
  event.preventDefault();
  let obj = {
    title : event.target.title.value,
    description : event.target.description.value,
    status : event.target.status.value,
    email : this.state.email
  }
  console.log(obj);
  const id = this.state.selectedBook._id;
  axios
  .put(`${process.env.REACT_APP_SERVER_URL}updateBook/${id}`, obj)
  .then(result=>{
    this.setState({
      books : result.data
    })
    
    this.handleClose();
  })
  .catch(err=>{
    console.log(err);
  })
  this.updateClose();
}
  
  
  deleteBook = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}deleteBook/${id}?email=${this.state.email}`)
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
        <UpdateFormModal
          updateModal={this.state.updateModal}
          updateShow={this.updateShow}
          updateClose={this.updateClose}
          updateBook={this.updateBook}
          selectedBook={this.state.selectedBook}
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
                  <p>Added By: {this.state.email}</p>
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    onClick={() => this.deleteBook(book._id)}
                  >
                    Delete Book
                  </Button>
                  <Button variant="primary" size="lg" onClick={()=>this.updateShow(book)}>
                    Update Book
                  </Button>
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

export default withAuth0(BestBooks);
