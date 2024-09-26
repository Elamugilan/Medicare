import React, { useState } from "react";
import Swal from "sweetalert2";
import "../Neurology/neurology.css";
import Header from "../../../Layout/Header";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const tamilNaduDistricts = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirapalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

const Brainstroke = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    age: "",
    address: "",
    gender: "",
    district: "",
    state: "",
    highBloodPressure: "",
    bloodSugarLevel: "",
    smoking: false,
    familyHistory: false,
    dizziness: false,
    headache: false,
    visionProblems: false,
    speechProblems: false,
    numbness: false,
  });

  const [assessmentResult, setAssessmentResult] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic assessment logic (example only, not a real diagnostic tool)
    let score = 0;

    if (formData.age > 65) score += 1;
    if (formData.highBloodPressure > 140) score += 1;
    if (formData.bloodSugarLevel > 126) score += 1; // Fasting blood sugar level > 126 mg/dL is considered diabetic
    if (formData.smoking) score += 1;
    if (formData.familyHistory) score += 1;

    if (
      formData.dizziness ||
      formData.headache ||
      formData.visionProblems ||
      formData.speechProblems ||
      formData.numbness
    ) {
      score += 2;
    }

    let resultMessage = "";
    if (score >= 4) {
      resultMessage =
        "High risk of stroke. Please consult a healthcare provider.";
    } else if (score >= 2) {
      resultMessage =
        "Moderate risk of stroke. Consider discussing with a healthcare provider.";
    } else {
      resultMessage = "Low risk of stroke. Maintain a healthy lifestyle.";
    }

    setAssessmentResult(resultMessage);

    // Display SweetAlert2 popup
    Swal.fire({
      title: "Assessment Result",
      text: resultMessage,
      icon: score >= 4 ? "error" : score >= 2 ? "warning" : "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <section>
      <div>
        <Header />
      </div>
      <div className="stroke-assessment">
        <h1>Stroke Risk Assessment</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>District:</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            >
              <option value="">Select District</option>
              {tamilNaduDistricts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>State:</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>High Blood Pressure (mm Hg):</label>
            <input
              type="number"
              name="highBloodPressure"
              value={formData.highBloodPressure}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Blood Sugar Level (mg/dL):</label>
            <input
              type="number"
              name="bloodSugarLevel"
              value={formData.bloodSugarLevel}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="smoking"
                checked={formData.smoking}
                onChange={handleChange}
              />
              Smoking
            </label>
            <label>
              <input
                type="checkbox"
                name="familyHistory"
                checked={formData.familyHistory}
                onChange={handleChange}
              />
              Family History of Stroke
            </label>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="dizziness"
                checked={formData.dizziness}
                onChange={handleChange}
              />
              Dizziness
            </label>
            <label>
              <input
                type="checkbox"
                name="headache"
                checked={formData.headache}
                onChange={handleChange}
              />
              Severe Headache
            </label>
            <label>
              <input
                type="checkbox"
                name="visionProblems"
                checked={formData.visionProblems}
                onChange={handleChange}
              />
              Vision Problems
            </label>
            <label>
              <input
                type="checkbox"
                name="speechProblems"
                checked={formData.speechProblems}
                onChange={handleChange}
              />
              Speech Problems
            </label>
            <label>
              <input
                type="checkbox"
                name="numbness"
                checked={formData.numbness}
                onChange={handleChange}
              />
              Numbness or Weakness
            </label>
          </div>

          <button type="submit">Assess Risk</button>
        </form>
      </div>
    </section>
  );
};

export default Brainstroke;
