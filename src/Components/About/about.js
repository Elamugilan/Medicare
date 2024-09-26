import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Header from "../../Layout/Header";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../../Layout/Footer";

import "../About/about.css";
function About() {
  return (
    <section>
      <Header />
      <Navbar className="bg-body-tertiary-about">
        <Container>
          <Navbar.Brand className="about-text">About Us</Navbar.Brand>
        </Container>
      </Navbar>
      <div>
        <Container>
          <Row>
            <Col className="about-col align-items-center">
              <Card.Img
                variant="center"
                src="/Images/about/card1.webp"
                style={{}}
                className="about-image"
              />
            </Col>
            <Col className="about-col-2">
              <h3 style={{ fontWeight: "bolder" }}>
                About Us About the Medical Clinic
              </h3>
              <p style={{ fontSize: "18px" }}>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you. ​ This is a great space to write long text about your
                company and your services. You can use this space to go into a
                little more detail about your company. Talk about your team and
                what services you provide.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        {" "}
        <Navbar className="bg-body-tertiary-about2">
          <Container>
            <Navbar.Brand className="about2-text">
              Providing you with the best doctors for the best care
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Card style={{ width: "18rem" }} className="about-card-1">
          <Card.Img variant="top" src="/Images/about/pic1.webp" />
          <Card.Body>
            <Card.Title>Dr. Andrew Khan</Card.Title>
            <Card.Text>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="about-card-1">
          <Card.Img variant="top" src="/Images/about/pic2.jpg" />
          <Card.Body>
            <Card.Title>Dr. Amelia Write</Card.Title>
            <Card.Text>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="about-card-1">
          <Card.Img variant="top" src="/Images/about/pic3.jpg" />
          <Card.Body>
            <Card.Title>Dr. Anthony Robins</Card.Title>
            <Card.Text>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </Card.Text>
          </Card.Body>
        </Card>
        <section className="about-footer">
          <Footer />
        </section>
      </div>
    </section>
  );
}
export default About;
