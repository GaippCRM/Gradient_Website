import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseSearch from './pages/CourseSearch';
import InstitutionSearch from './pages/InstitutionSearch';
import StudyInUK from './pages/StudyInUK';
import StudyInGermany from './pages/StudyInGermany';
import StudyInUSA from './pages/StudyInUSA';
import StudyInAustralia from './pages/StudyInAustralia';
import StudyInIreland from './pages/StudyInIreland';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ReferEarn from './pages/ReferEarn';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import AgentRegister from './pages/AgentRegister';
import InstitutionRegister from './pages/InstitutionRegister';
import StudentSignup from './pages/StudentSignup';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 flex flex-col">
        <Navbar />
        <div className="flex-grow pt-[88px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course-search" element={<CourseSearch />} />
            <Route path="/institution-search" element={<InstitutionSearch />} />
            <Route path="/study-in-uk" element={<StudyInUK />} />
            <Route path="/study-in-germany" element={<StudyInGermany />} />
            <Route path="/study-in-usa" element={<StudyInUSA />} />
            <Route path="/study-in-australia" element={<StudyInAustralia />} />
            <Route path="/study-in-ireland" element={<StudyInIreland />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/refer-earn" element={<ReferEarn />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermsCondition />} />
            <Route path="/agent-register" element={<AgentRegister />} />
            <Route path="/institution-register" element={<InstitutionRegister />} />
            <Route path="/student-signup" element={<StudentSignup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
