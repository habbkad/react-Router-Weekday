import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const NavBar = () => {
  console.log();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to={"/"}>
              <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/features"}>
              <Nav.Link href="#features">Features</Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/pricing"}>
              <Nav.Link href="#features">Pricing</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
