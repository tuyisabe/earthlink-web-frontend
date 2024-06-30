import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/LandingPage';
import Contact from './pages/Contact';
import AboutUs from "./pages/AboutUs";
// import Travels from "./pages/Travels";
// import Education from "./pages/Education";
// import Business from "./pages/Business";
import Services from './pages/Services';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
