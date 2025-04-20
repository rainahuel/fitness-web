import React, { useState } from "react";
import jsPDF from "jspdf";

export default function MacroCalculator() {
  const [weight, setWeight] = useState("");
  const [calories, setCalories] = useState("");
  const [goal, setGoal] = useState("deficit");
  const [result, setResult] = useState(null);

  const calculateMacros = () => {
    const w = parseFloat(weight);
    const cal = parseInt(calories);

    if (!w || !cal || cal < 1000) {
      alert("Please enter valid values for weight and calories.");
      return;
    }

    let proteinPerKg = 2.2;
    let fatPerKg = 0.8;

    if (goal === "maintenance") {
      proteinPerKg = 2.0;
      fatPerKg = 1.0;
    } else if (goal === "surplus") {
      proteinPerKg = 1.8;
      fatPerKg = 1.2;
    }

    const proteinGrams = Math.round(w * proteinPerKg);
    const fatGrams = Math.round(w * fatPerKg);
    const proteinCals = proteinGrams * 4;
    const fatCals = fatGrams * 9;

    const remainingCals = cal - (proteinCals + fatCals);
    const carbGrams = Math.round(remainingCals / 4);

    const data = {
      proteinGrams,
      fatGrams,
      carbGrams,
      calories: cal
    };

    setResult(data);
  };

  const downloadPDF = () => {
    if (!result) return;
    const doc = new jsPDF();
    doc.text("Built by Rain - Macro Plan (Goal-based)", 10, 10);
    doc.text(`Total Calories: ${result.calories}`, 10, 20);
    doc.text(`Protein: ${result.proteinGrams}g`, 10, 30);
    doc.text(`Fat: ${result.fatGrams}g`, 10, 40);
    doc.text(`Carbohydrates: ${result.carbGrams}g`, 10, 50);
    doc.save("macro_plan.pdf");
  };

  return (
    <section className="section centered-page">
      <div
        className="box box-content"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "#ffffff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          backdropFilter: "blur(8px)"
        }}
      >
        <h3 className="title is-3 has-text-centered" style={{ fontWeight: 800 }}>Macro Calculator (Goal-Based)</h3>

        <p className="mb-4" style={{ color: "#e2e8f0" }}>
          Enter your weight, daily calories, and training goal. Your macronutrient targets will adjust based on whether you're cutting, maintaining, or bulking.
        </p>

        <div className="field">
          <label className="label">Weight (kg)</label>
          <input className="input" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>

        <div className="field">
          <label className="label">Daily Calorie Goal</label>
          <input className="input" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
        </div>

        <div className="field">
          <label className="label">Goal</label>
          <div className="select is-fullwidth">
            <select value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="deficit">Lose Fat</option>
              <option value="maintenance">Maintain</option>
              <option value="surplus">Gain Muscle</option>
            </select>
          </div>
        </div>

        <button className="button is-primary mt-3" onClick={calculateMacros}>
          Calculate Macros
        </button>

        <div className="has-text-centered mt-4">
          <a
            className="button is-small is-light is-link"
            href="/references"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔬 View Scientific References
          </a>
        </div>

        {result && (
          <div className="notification is-info mt-4">
            <p><strong>Protein:</strong> {result.proteinGrams}g</p>
            <p><strong>Fat:</strong> {result.fatGrams}g</p>
            <p><strong>Carbs:</strong> {result.carbGrams}g</p>
            <button className="button is-link mt-3" onClick={downloadPDF}>Download PDF</button>
          </div>
        )}
      </div>
    </section>
  );
}
