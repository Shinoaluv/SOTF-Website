import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RouteEffects from "./components/RouteEffects";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main id="main-content" className="page-hero">
              <p className="section-label">Page not found</p>
              <h1>Let’s get you back.</h1>
              <p>The page you’re looking for isn’t here.</p>
              <Link className="primary-button" to="/">
                Back to home
              </Link>
            </main>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
