import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">UserList</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add User</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default Header;