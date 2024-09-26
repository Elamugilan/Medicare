import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Doctors/doctor.css";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const doctorsData = [
  {
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    image: "/Images/doctors/cardiology.jpeg",
    description: "Experienced in treating heart-related conditions.",
  },
  {
    name: "Dr. Jane Smith",
    specialty: "Dermatologist",
    image: "/Images/doctors/Dermatologist.jpeg",
    description: "Specializes in skin care and treatment.",
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Orthopaedic Surgeon",
    image: "/Images/doctors/Orthopaedic.jpeg",
    description: "Expert in treating bone, joint, and muscle disorders.",
  },
  {
    name: "Dr. Emily Clark",
    specialty: "Neurologist",
    image: "/Images/doctors/Neurologist.jpeg",
    description:
      "Specialist in brain and nervous system disorders with a focus on stroke prevention and treatment.",
    highlight: true,
  },
  {
    name: "Dr. Sarah Johnson",
    specialty: "Pediatrician",
    image: "/Images/doctors/Pediatrician.jpeg",
    description:
      "Dedicated to providing medical care for infants, children, and adolescents.",
  },
  {
    name: "Dr. Robert Wilson",
    specialty: "General Surgeon",
    image: "/Images/doctors/General Surgeon.jpeg",
    description:
      "Performs a wide range of surgeries with a focus on patient safety and recovery.",
  },
  {
    name: "Dr. Laura Lee",
    specialty: "Gastroenterologist",
    image: "/Images/doctors/Gastroenterologist.jpeg",
    description: "Specializes in digestive system disorders and treatments.",
  },
  {
    name: "Dr. James Taylor",
    specialty: "Endocrinologist",
    image: "/Images/doctors/Endocrinologist.jpeg",
    description:
      "Focuses on hormone-related disorders, including diabetes and thyroid conditions.",
  },
  {
    name: "Dr. Olivia White",
    specialty: "Pulmonologist",
    image: "/Images/doctors/Pulmonologist.jpeg",
    description: "Expert in respiratory system diseases and treatments.",
  },
  {
    name: "Dr. William Green",
    specialty: "Oncologist",
    image: "/Images/doctors/Oncologist.jpeg",
    description:
      "Specializes in cancer diagnosis and treatment, providing comprehensive care to patients.",
  },
];

function Doctors() {
  return (
    <section>
      <Header />
      <Container className="doctors-section">
        <h2 className="doctors-title">Meet Our Doctors</h2>
        <Row className="doctors-list">
          {doctorsData.map((doctor, index) => (
            <Col
              key={index}
              md={4}
              sm={6}
              className={`doctor-card-col ${
                doctor.highlight ? "highlighted-doctor" : ""
              }`}
            >
              <Card
                className={`doctor-card ${doctor.highlight ? "highlight" : ""}`}
              >
                <Card.Img
                  variant="top"
                  src={doctor.image}
                  className="doctor-image"
                />
                <Card.Body>
                  <Card.Title className="doctor-name">{doctor.name}</Card.Title>
                  <Card.Text className="doctor-specialty">
                    {doctor.specialty}
                  </Card.Text>
                  <Card.Text className="doctor-description">
                    {doctor.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default Doctors;
