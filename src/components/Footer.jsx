import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container className="justify-content-center">
        <Navbar.Text>© 2024 Calculator App</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
