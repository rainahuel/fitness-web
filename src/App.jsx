import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";

function TabsMenu() {
  const location = useLocation();

  return (
<div
  className="tabs is-toggle is-centered is-boxed"
  style={{
    position: "fixed",
    backgroundColor: "rgb(0 82 146)",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingTop: "1rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid rgb(0 0 0)",
  }}
>
      <ul>
        <li className={location.pathname === "/" ? "is-active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/calculator" ? "is-active" : ""}>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className={location.pathname === "/contact" ? "is-active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <TabsMenu />
      <div style={{ paddingTop: "7rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
