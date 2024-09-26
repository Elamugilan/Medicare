import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "../Submit/submit.css";

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

function CustomInput({ value, onClick }) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={value}
        onClick={onClick}
        readOnly
      />
      <div className="input-group-append">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faCalendarDays} />
        </span>
      </div>
    </div>
  );
}

function Submit() {
  const [firstname, setFirstName] = useState("");
  const [firstnameError, setFirstNameError] = useState(false);
  const [lastname, setLastName] = useState("");
  const [lastnameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [validEmailError, setValidEmailError] = useState(false);
  const [selectedDate, setDate] = useState(null);

  const validateLogin = () => {
    let name = firstname;
    let LastName = lastname; // Use the existing lastname variable
    let emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const emailIsValid = emailPattern.test(email);

    setFirstNameError(!name);
    setLastNameError(!LastName);
    setEmailError(!email);
    setValidEmailError(email && !emailIsValid);

    if (name && LastName && email && emailIsValid) {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });

      let formData = {
        name: firstname,
        LastName: lastname,
        email: email,
      };

      axios
        .post("http://localhost:3001/user/addusersList", formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleInput = (event) => {
    const { id, value } = event.target;
    if (id === "firstname") {
      setFirstName(value);
    }
    if (id === "lastname") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
  };

  return (
    <section className="submit-back">
      <Card className="submit-card">
        <Card.Body>
          <Card.Title>Health Declaration</Card.Title>
          <Card.Text>
            Please fill out the following health declaration form in order to
            participate in our activity.
            <br />
            Submissions are valid up to 24 hours prior to the activity.
          </Card.Text>
          <Form>
            <Form.Label className="form-label">
              FirstName<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the FirstName"
              value={firstname}
              id="firstname"
              onChange={handleInput}
              className={firstnameError ? "error-input" : ""}
            />
            {firstnameError && (
              <label className="error-message">
                Firstname is Required<span style={{ color: "red" }}>*</span>
              </label>
            )}
            <br />
            <Form.Label className="form-label">
              LastName<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the LastName"
              value={lastname}
              id="lastname"
              onChange={handleInput}
              className={lastnameError ? "error-input" : ""}
            />
            {lastnameError && (
              <label className="error-message">
                LastName is Required<span style={{ color: "red" }}>*</span>
              </label>
            )}
            <br />
            <Form.Group className="mb-3">
              <Form.Label className="form-label">
                Email address<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                id="email"
                onChange={handleInput}
                className={(emailError || validEmailError) && "error-input"}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <br />
              {emailError && (
                <label className="error-message">
                  E-mail Address Required<span style={{ color: "red" }}>*</span>
                </label>
              )}
              {validEmailError && (
                <label className="error-message">
                  Enter the Valid E-mail Address
                  <span style={{ color: "red" }}>*</span>
                </label>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="My body temperature is lower than 98.6°F/37.5°C"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-label">Please Elaborate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Elaborate Here (We'll never share your information with anyone else.)"
              />
            </Form.Group>
            <h6 className="date-label">Select a Date</h6>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setDate(date)}
              customInput={<CustomInput />}
              className="date-picker"
            />
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="I confirm that the information given in this form is true"
              />
            </Form.Group>
          </Form>
          <div className="button-group">
            <Link to="/home">
              <Button variant="dark" className="submit-btn">
                Back
              </Button>
            </Link>
            <Button
              variant="dark"
              className="submit-btn"
              onClick={validateLogin}
            >
              Submit
            </Button>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Submit;
