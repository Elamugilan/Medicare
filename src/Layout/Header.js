import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faPhone,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "../Layout/Header.css";
import { NavbarBrand } from "react-bootstrap";

function Header() {
  return (
    <section id="header" className="header">
      <Navbar className="navbar1">
        <Container>
          <Navbar.Brand className="navbar1-header">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="nav1-icon1"
            />
            We're committed to a clean and safe facility.{" "}
            <Link to="/submit" className="blink">
              Submit{" "}
            </Link>{" "}
            your health declaration
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Navbar 2 */}

      <Navbar className="navbar2">
        <Container>
          <Navbar.Brand className="navbar2-content1">
            <FontAwesomeIcon icon={faLocationDot} className="nav2-icon1" />
            Sri Sairam Engineering College
          </Navbar.Brand>
          <Navbar.Brand className="navbar2-content2">
            <FontAwesomeIcon icon={faPhone} className="nav2-icon2" />
            +91 8056616882
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Navbar 3 */}

      <Navbar expand="lg" className="nav3-header">
        <Container>
          <Navbar.Brand className="nav3-headername">
            <img alt="" src="/Logos/Headerlogo.png" className="nav-logo" />
            MediCare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Lists">
              <Link to="/home" className="list-link">
                Home
              </Link>
              <Link to="/about" className="list-link">
                About
              </Link>
              <Link to="/booking" className="list-link">
                Booking
              </Link>
              <Link to="/doctor" className="list-link">
                Doctors
              </Link>
              <Link to="/contact" className="list-link">
                Contact
              </Link>
            </Nav>
            <Link to="/login">
              <Button className="nav3-btn">
                <FontAwesomeIcon icon={faUser} className="nav3-icon" />
                <span>Log In</span>
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
