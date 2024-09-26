import Header from "../../Layout/Header";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "../../Layout/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../Booking/booking.css";

function Booking() {
  return (
    <section>
      <Header />
      <Navbar className="appointment-navbar">
        <Container>
          <Navbar.Brand className="appointment-nav1">
            <Link to="/home">
              {" "}
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="appointment-icon"
              />
            </Link>
            Book Online
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <div>
        <Card
          border="dark"
          style={{ width: "18rem" }}
          className="appointment-card1"
        >
          <Card.Img variant="top" src="/Images/appointment/pic1.webp" />
          <Card.Body className="appointment-card">
            <Card.Title style={{ textAlign: "center" }}>Sonography</Card.Title>
            <Card.Title style={{ textAlign: "center" }}>1hr</Card.Title>
            <Card.Title style={{ textAlign: "center" }}>$450</Card.Title>
            <Button
              style={{
                display: "block",
                margin: " 50px auto",
                borderRadius: "3px",
                backgroundColor: "black",
                color: "white",
              }}
              className="appointment1-btn"
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{ width: "18rem" }}
          className="appointment-card1"
        >
          <Card.Img variant="top" src="/Images/appointment/pic2.webp" />
          <Card.Body className="appointment-card">
            <Card.Title style={{ textAlign: "center", fontSize: "25px" }}>
              Consult with a Cardiologist
            </Card.Title>
            <Card.Title style={{ textAlign: "center" }}>1hr</Card.Title>
            <Card.Title style={{ textAlign: "center" }}>$450</Card.Title>

            <Button
              style={{
                display: "block",
                margin: " 50px auto",
                borderRadius: "3px",
                backgroundColor: "black",
                color: "white",
              }}
              className="appointment1-btn"
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{ width: "18rem" }}
          className="appointment-card1"
        >
          <Card.Img variant="top" src="/Images/appointment/pic3.webp" />
          <Card.Body className="appointment-card">
            <Card.Title style={{ textAlign: "center", fontSize: "25px" }}>
              Consult with a Doctor
            </Card.Title>
            <Card.Title style={{ textAlign: "center" }}>1hr</Card.Title>
            <Card.Title style={{ textAlign: "center" }}>$450</Card.Title>
            <Button
              style={{
                display: "block",
                margin: " 50px auto",
                borderRadius: "3px",
                backgroundColor: "black",
                color: "white",
              }}
              className="appointment1-btn"
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card
          border="dark"
          style={{ width: "18rem" }}
          className="appointment-card2"
        >
          <Card.Img variant="top" src="/Images/appointment/pic4.jpg" />
          <Card.Body className="appointment-card">
            <Card.Title style={{ textAlign: "center", fontSize: "25px" }}>
              X-ray Examination
            </Card.Title>
            <Card.Title style={{ textAlign: "center" }}>1hr</Card.Title>
            <Card.Title style={{ textAlign: "center" }}>$450</Card.Title>
            <Button
              style={{
                display: "block",
                margin: " 50px auto",
                borderRadius: "3px",
                backgroundColor: "black",
                color: "white",
              }}
              className="appointment2-btn"
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{ width: "18rem" }}
          className="appointment-card2"
        >
          <Card.Img variant="top" src="/Images/appointment/pic5.webp" />
          <Card.Body className="appointment-card">
            <Card.Title style={{ textAlign: "center", fontSize: "25px" }}>
              MRI Examination
            </Card.Title>
            <Card.Title style={{ textAlign: "center" }}>1hr</Card.Title>
            <Card.Title style={{ textAlign: "center" }}>$450</Card.Title>
            <Button
              style={{
                display: "block",
                margin: " 50px auto",
                borderRadius: "3px",
                backgroundColor: "black",
                color: "white",
              }}
              className="appointment2-btn"
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
        <Card
          border="dark"
          style={{ width: "18rem" }}
          className="appointment-card2"
        >
          <Card.Img variant="top" src="/Images/appointment/pic6.webp" />
          <Card.Body className="appointment-card">
            <Card.Title style={{ textAlign: "center", fontSize: "25px" }}>
              Consult with Neurologist
            </Card.Title>
            <Card.Title style={{ textAlign: "center" }}>1hr</Card.Title>
            <Card.Title style={{ textAlign: "center" }}>$450</Card.Title>
            <Button
              style={{
                display: "block",
                margin: "50px auto",
                borderRadius: "3px",
                backgroundColor: "black",
                color: "white",
              }}
              className="appointment2-btn"
            >
              Book Now
            </Button>
          </Card.Body>
        </Card>
        <section className="booking-footer">
          <Footer />
        </section>
      </div>
    </section>
  );
}

export default Booking;
