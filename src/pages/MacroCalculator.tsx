
import React, { useState } from "react";
import jsPDF from "jspdf";

export default function MacroCalculator() {
  const [weight, setWeight] = useState("");
  const [calories, setCalories] = useState("");
  const [result, setResult] = useState(null);

  const calculateMacros = () => {
    const w = parseFloat(weight);
    const cal = parseInt(calories);

    if (!w || !cal || cal < 1000) {
      alert("Please enter valid values for weight and calories.");
      return;
    }

    const proteinPerKg = 2.2;
    const fatPerKg = 0.8;

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
      calories: cal,
    };

    setResult(data);
  };

  const downloadPDF = () => {
    if (!result) return;
    const doc = new jsPDF();
    doc.text("Built by Rain - Macro Plan (Science-based)", 10, 10);
    doc.text(`Total Calories: ${result.calories}`, 10, 20);
    doc.text(`Protein: ${result.proteinGrams}g (2.2g/kg)`, 10, 30);
    doc.text(`Fat: ${result.fatGrams}g (0.8g/kg)`, 10, 40);
    doc.text(`Carbohydrates: ${result.carbGrams}g`, 10, 50);
    doc.save("macro_plan.pdf");
  };

  return (
    <div className="mt-5">
      <h3 className="title is-5">Macro Calculator (Science-Based)</h3>
      <div className="field">
        <label className="label">Weight (kg)</label>
        <input className="input" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="field">
        <label className="label">Daily Calorie Goal</label>
        <input className="input" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
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
  );
}
