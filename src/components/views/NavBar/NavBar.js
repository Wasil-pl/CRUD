import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded nav-bar">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Blog.app
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categories">
              Categories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavBar;
