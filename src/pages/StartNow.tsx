
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import CalorieCalculator from "./Calculator";
import MacroCalculator from "./MacroCalculator";

export default function StartNow() {
  return (
    <section className="section centered-page">
      <div className="box box-content has-text-centered">
        <h2 className="title is-4">Start Now</h2>
        <p className="mb-4">Use these tools to kickstart your transformation.</p>
        <div className="buttons is-centered mb-5">
          <Link className="button is-link is-light" to="/startnow/calories">Calorie Calculator</Link>
          <Link className="button is-link is-light" to="/startnow/macros">Macro Calculator</Link>
        </div>
        <Routes>
          <Route path="calories" element={<CalorieCalculator />} />
          <Route path="macros" element={<MacroCalculator />} />
        </Routes>
      </div>
    </section>
  );
}
