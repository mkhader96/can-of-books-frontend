import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Alert from 'react-bootstrap/Alert';
import "bootstrap/dist/css/bootstrap.min.css";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Alert variant="dark "> Welcome to the best Books Library</Alert>
        <Alert variant="dark "> Please Login to view and add books</Alert>


      </div>
    );
  }
}

export default withAuth0(Welcome);
