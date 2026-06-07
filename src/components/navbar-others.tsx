import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">BrightSmileClinic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/">About</Nav.Link>
            <Nav.Link as={Link} to="/">Services</Nav.Link>
            <Nav.Link as={Link} to="/">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavExample;