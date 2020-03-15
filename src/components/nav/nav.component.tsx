import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export function NavMenu() {
  return (
    <div style={{}}>
      {" "}
      <Navbar style={{ justifyContent: "right", backgroundColor: "#3993EC" }}>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          Home <i className="fas fa-radiation fa-spin"></i>
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link href="/work" style={{ color: "white" }}>
            Projects
          </Nav.Link>
          <Nav.Link href="/about" style={{ color: "white" }}>
            About
          </Nav.Link>
          <Nav.Link href="/contact" style={{ color: "white" }}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
