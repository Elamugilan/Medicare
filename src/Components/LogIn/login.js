import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "../LogIn/login.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [validEmailError, setValidEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [validPasswordError, setValidPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateLogin = () => {
    const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const emailIsValid = emailPattern.test(email);

    setEmailError(!email);
    setPasswordError(!password);
    setValidEmailError(email && !emailIsValid);

    if (email && emailIsValid && password) {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: "Don't save",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          const formData = { email, password };
          console.log("Form Data:", formData);
          axios
            .post("http://localhost:3001/user/addusersList", formData)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  const handleInput = (event) => {
    const { id, value } = event.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  return (
    <section className="login-background">
      <Navbar expand="lg" className="bg-body-tertiary-login-nav">
        <Container>
          <Navbar.Brand className="nav3-headername1">MediCare</Navbar.Brand>
        </Container>
      </Navbar>
      <Card className="login-card">
        <Card.Body>
          <Card.Title className="login-card-title">
            Log in to MediCare
          </Card.Title>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label></Form.Label>
              <Col sm="12">
                <Form.Control
                  type="text"
                  placeholder="E-mail address or Phone number"
                  value={email}
                  id="email"
                  onChange={handleInput}
                  className={(emailError || validEmailError) && "error-input"}
                />
              </Col>
            </Form.Group>
            {emailError && (
              <label className="error-message">
                E-mail Address Required
                <span className="error-message">*</span>
              </label>
            )}
            <Form.Group as={Row} className="mb-3">
              <Form.Label></Form.Label>
              <Col sm="12">
                <div className="password-container">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    id="password"
                    onChange={handleInput}
                    className={
                      (passwordError || validPasswordError) && "error-input"
                    }
                  />
                  <span
                    className="password-eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </span>
                </div>
              </Col>
            </Form.Group>
            {passwordError && (
              <label className="error-message">
                Password Required
                <span className="error-message">*</span>
              </label>
            )}
          </Form>
        </Card.Body>
        <Button variant="dark" className="login-btn" onClick={validateLogin}>
          Log in
        </Button>
        <Button variant="dark" className="login-btn back-btn">
          <Link to="/home" className="back-link">
            Back
          </Link>
        </Button>
      </Card>
    </section>
  );
}

export default LogIn;
