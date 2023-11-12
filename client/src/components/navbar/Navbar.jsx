import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { BsBookHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <BsBookHalf /> &nbsp; To Do
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav>
              <Nav.Link href="/" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link eventKey={2} href="/about" className="mx-2">
                About us
              </Nav.Link>
              <Nav.Link eventKey={2} href="/todo" className="mx-2">
                Todo
              </Nav.Link>
              <Nav.Link href="/signup" className="btn-nav mx-2">
                SignUp
              </Nav.Link>
              <Nav.Link eventKey={2} href="/signin" className="btn-nav mx-2">
                Signin
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="btn-nav mx-2">
                Log Out
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
