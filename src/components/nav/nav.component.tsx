import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./nav.module.scss";

export function NavMenu() {
  return (
    <div className={styles.navContainer}>
      <Navbar className={styles.navHome}>
        <Navbar.Brand href="/">
          <span className={styles.navLink}>
            Home <i className="fas fa-radiation fa-spin"></i>
          </span>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/projects">
            <span className={styles.navLink}>Projects</span>
          </Nav.Link>
          <Nav.Link href="/about">
            <span className={styles.navLink}>About</span>
          </Nav.Link>
          <Nav.Link href="/contact">
            <span className={styles.navLink}>Contact</span>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
