import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem bg="light" variant="light"><Link to="/" >Home</Link></NavItem>
        <NavItem ><Link to="/About" >About</Link></NavItem>
        {isAuthenticated && <NavItem ><Link to="/Profile"  >Profile</Link></NavItem>}

        {!isAuthenticated  && <NavItem ><LoginButton /> </NavItem>}
        {isAuthenticated  &&<NavItem ><LogoutButton /> </NavItem>}



        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default withAuth0(Header);
