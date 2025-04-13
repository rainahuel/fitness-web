import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import StartNow from "./pages/StartNow";
import References from "./pages/References";
import Nutrition from "./pages/Nutrition";
import TabsMenu from "./components/TabsMenu"; // ✅ usamos este

export default function App() {
  return (
    <Router>
      <TabsMenu />
      <div style={{ paddingTop: "7rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startnow/*" element={<StartNow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/references" element={<References />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Routes>
      </div>
    </Router>
  );
}
