import React from "react";
import {Routes, Route} from "react-router-dom";
import MemberPage from "./pages/Members/Members";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Exercises from "./pages/Exercises/Exercises";
import HomePage from "./pages/HomePage/HomePage";
import CaloriePage from "./pages/Calorie/CaloriePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";

export default function App()
{
  return (
    <div className = "app">
      <Header />

      <div className = "main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MemberPage />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/calorie" element = { <CaloriePage/>} />
          <Route path="/aboutus" element = { <AboutUs/> } />
          <Route path="/contact" element = { <Contact/> } />
          <Route path="/terms" element = { <Terms/> } />
          <Route path="/privacy" element = { <Privacy/> } />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}