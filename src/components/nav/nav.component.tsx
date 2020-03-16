import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./nav.module.scss";

export function NavMenu() {
  return (
    <div className={styles.navContainer}>
      {" "}
      <Navbar style={{ justifyContent: "right", backgroundColor: "#3993EC" }}>
        <Navbar.Brand href="/" style={{ color: "white", fontWeight: "bold" }}>
          Home <i className="fas fa-radiation fa-spin"></i>
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link href="/work" style={{ color: "white", fontWeight: "bold" }}>
            Projects
          </Nav.Link>
          <Nav.Link
            href="/about"
            style={{ color: "white", fontWeight: "bold" }}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="/contact"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
