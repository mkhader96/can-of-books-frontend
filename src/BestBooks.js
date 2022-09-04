import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
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

  render() {
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel fade>
            {this.state.books.map((book, idx) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://live.staticflickr.com/4062/4474421855_4b20643258_b.jpg"                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <h5>Status: {book.status}</h5>
                  <p>
                    {book.description}
                  </p>
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
