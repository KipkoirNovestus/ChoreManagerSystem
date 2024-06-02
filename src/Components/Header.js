import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import Homelogo from "./images/Homelogo.svg";
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <img className="d-block w-70" src={Homelogo} alt="Home Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" disabled>
                Home
              </Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <NavDropdown title="Industries" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/businessservices">
                  Business Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/creativedigital">
                  Creative & Digital
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/otherservices">
                  Other Services
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/templates">Templates</Nav.Link>
              <NavDropdown title="Pricing" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/agencies">Agencies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/consultancies">
                  Consultancies
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/professionals">
                  Professionals
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/bookDemo">BookDemo</Nav.Link>
              <Nav.Link href="/views">Views</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
