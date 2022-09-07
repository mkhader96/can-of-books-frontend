import Card from 'react-bootstrap/Card';
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

    

class Profile extends React.Component {
  render() {
    const { user } = this.props.auth0;
    console.log(user);
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.picture} />
        <Card.Body>
          <Card.Title>{user.email}</Card.Title>
          <Card.Text>
            Welcome to the website {user.nickname}
          </Card.Text>
        </Card.Body>
      </Card>
  ) 
}
};

export default withAuth0(Profile);

