import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">BrightSmileClinic</Navbar.Brand>
          {/* <Link to="/"> */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          {/* </Link> */}
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;