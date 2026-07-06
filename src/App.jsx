// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages imports
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Gallery from './pages/Gallery';
import Result from './pages/Result';
import ResultDetail from './pages/ResultDetail';
import Blog from './pages/Blog';
import TC from './pages/TC';
import Teacher from './pages/Teacher';
import Hostel from './pages/Hostel';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import Contact from './pages/Contact';

// ScrollToTop behavior on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/result" element={<Result />} />
          <Route path="/result-detail" element={<ResultDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tc" element={<TC />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Fallback redirect */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
