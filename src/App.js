import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/about";
import Doctors from "./Components/Doctors/doctors";
import Booking from "./Components/Booking/booking";
import Contact from "./Components/Contact/contact";
import Home from "./Components/Home/home";
import Submit from "./Components/Submit/submit";
import LogIn from "./Components/LogIn/login";
import NeurologistInfo from "./Components/Wikipedia/Neurology/neurology.js";
import Cardiology from "./Components/Wikipedia/Cardiology/cardiology.js";
import Orthopaedics from "./Components/Wikipedia/Orthopaedics/Orthopaedics.js";
import Brainstroke from "./Components/Wikipedia/Neurology/brainstroke.js";
import "./App.css";
import Appointment from "./Components/Book An Appoinment/bookappointment";
import Lenis from "lenis";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="booking" element={<Booking />} />
          <Route path="doctor" element={<Doctors />} />
          <Route path="submit" element={<Submit />} />
          <Route path="home" element={<Home />} />
          <Route path="bookappointment" element={<Appointment />} />
          <Route path="login" element={<LogIn />} />
          <Route path="neurology" element={<NeurologistInfo />} />
          <Route path="cardiology" element={<Cardiology />} />
          <Route path="orthopaedics" element={<Orthopaedics />} />
          <Route path="brainstroke" element={<Brainstroke />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
