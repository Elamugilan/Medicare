import Header from "../../Layout/Header";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Footer from "../../Layout/Footer";
import "../Home/home.css";

function Home() {
  return (
    <section>
      <Header />
      <div className="banner-container">
        <Carousel fade className="banner-section">
          <Carousel.Item>
            <img src="/Images/Background1.webp" alt="Background 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/Images/Background2.webp" alt="Background 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/Images/Background3.webp" alt="Background 3" />
          </Carousel.Item>
        </Carousel>

        <div className="home-card-container">
          <Card className="home-card">
            <Card.Body>
              <Card.Title className="home-card-title">Cardiology</Card.Title>
              <Card.Text className="home-card-text ">
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </Card.Text>
              <Button variant="dark" className="card1-btn">
                <Link to="/cardiology" className="card1-btn-a">
                  Read More
                </Link>
              </Button>
            </Card.Body>
          </Card>

          <Card className="home-card">
            <Card.Body>
              <Card.Title className="home-card-title">Neurology</Card.Title>
              <Card.Text className="home-card-text ">
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </Card.Text>
              <Button variant="dark" className="card1-btn">
                <Link to="/neurology" className="card1-btn-a">
                  Read More
                </Link>
              </Button>
            </Card.Body>
          </Card>

          <Card className="home-card">
            <Card.Body>
              <Card.Title className="home-card-title">Orthopaedics</Card.Title>
              <Card.Text className="home-card-text ">
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </Card.Text>
              <Button variant="dark" className="card1-btn">
                <Link to="/orthopaedics" className="card1-btn-a">
                  Read More
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Navbar className="nav-4">
        <Container>
          <Navbar.Brand
            style={{ color: "black", fontSize: "50px", marginLeft: "10px" }}
            className="app-text"
          >
            <FontAwesomeIcon icon={faChevronRight} className="app-icon" />
            Select your appointment online
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link
              to="/book
              "
            >
              <Button variant="dark" className="app-book-btn">
                Book Your Appointment
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className="nav-5">
        <Container>
          <Navbar.Brand className="nav5-txt">
            Taking Care of Your Health
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
      <Card style={{ width: "18rem" }} className="card-1">
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Health Plans We Accept
          </Card.Title>{" "}
          <Card.Text style={{ textAlign: "center" }}>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </Card.Text>
          <Button className="card1-btn">Go somewhere</Button>
        </Card.Body>
      </Card>{" "}
      <Card style={{ width: "18rem" }} className="card-1">
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Number 1 Medical Clinic in the Area
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </Card.Text>
          <Button className="card1-btn">Go somewhere</Button>
        </Card.Body>
      </Card>{" "}
      <Card style={{ width: "18rem" }} className="card-1">
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Specialist<br></br>Doctors
          </Card.Title>{" "}
          <Card.Text style={{ textAlign: "center" }}>
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know you.
          </Card.Text>
          <Button className="card1-btn">Go somewhere</Button>
        </Card.Body>
      </Card>{" "}
      <section>
        <Card className="sign-up">
          <Card.Body>
            <Card.Title style={{ textAlign: "center", fontSize: "40px" }}>
              Sign up for our newsletter
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </Card.Text>
            <Form.Control
              size="md"
              type="text"
              placeholder="Enter Your E-mail Here"
              className="Sign-up-email"
              style={{
                width: "50%",
                textAlign: "center",
                display: "block",
                margin: "auto",
                borderColor: "black",
                borderWidth: "3px",
              }}
            ></Form.Control>
            <Button
              variant="dark"
              style={{
                display: "block",
                margin: "auto",
                position: "relative",
                top: "10px",
                width: "50%",
              }}
            >
              Subscribe Now
            </Button>
          </Card.Body>
        </Card>
      </section>
      <Footer />
    </section>
  );
}
export default Home;
