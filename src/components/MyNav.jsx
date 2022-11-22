import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MyNav = ({ logo }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">{logo}</Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#fantasy">Fantasy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Scifi</NavDropdown.Item>
      </NavDropdown>
      <Nav className="ml-auto">
        <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Browse">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNav;
