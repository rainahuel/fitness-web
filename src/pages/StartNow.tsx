import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import CalorieCalculator from "./Calculator";
import MacroCalculator from "./MacroCalculator";

export default function StartNow() {
  return (
    <section className="section centered-page">
      <div
        className="box box-content has-text-centered"
        style={{
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
          padding: "2.5rem",
          borderRadius: "12px",
          transition: "box-shadow 0.3s ease"
        }}
      >
        <h2
          className="title is-3"
          style={{
            color: "#ffffff",
            textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
            fontWeight: "800",
            marginBottom: "1rem"
          }}
        >
          Start Now
        </h2>
        <p className="mb-4" style={{ color: "#e2e8f0", lineHeight: "1.6" }}>
          Use these tools to kickstart your transformation.
        </p>
        <div
          className="buttons is-centered mb-5"
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
            display: "flex"
          }}
        >
          <Link className="button is-link is-light" to="/startnow/calories">
            Calorie Calculator
          </Link>
          <Link className="button is-link is-light" to="/startnow/macros">
            Macro Calculator
          </Link>
          <Link
            to="/training"
            className="button is-link"
            style={{
              transition: "transform 0.3s ease",
              fontWeight: "bold"
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
          >
            View Prebuilt Workout Plan
          </Link>
        </div>
        <div className="mt-5">
          <Routes>
            <Route path="calories" element={<CalorieCalculator />} />
            <Route path="macros" element={<MacroCalculator />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}
