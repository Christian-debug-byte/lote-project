import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importing pages
import Home from "./pages/home";
import About from "./pages/about";
import PlaceOrder from "./pages/placeOrder";
import Contact from "./pages/Contact"; // imported Contact

// Main App Component
function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {/* Simple Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/about" style={{ marginRight: "15px" }}>
            About
          </Link>
          <Link to="/place-order" style={{ marginRight: "15px" }}>
            Place Order
          </Link>
          <Link to="/contact">Contact</Link> {/* Added Contact link */}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Added Contact route */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
