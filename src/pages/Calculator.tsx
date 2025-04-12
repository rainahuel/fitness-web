import React, { useState } from "react";
import jsPDF from "jspdf";

export default function CalorieCalculator() {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "male",
    activity: "1.55",
    goal: "deficit",
  });

  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    calories: number;
    kgPerWeek: number;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculate = () => {
    const { age, weight, height, gender, activity, goal } = formData;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    const act = parseFloat(activity);

    if (!w || !h || !a) {
      alert("Please fill in all fields.");
      return;
    }

    const bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = bmr * act;

    let calories = tdee;
    let kcalDiff = 0;

    if (goal === "deficit") {
      calories = tdee * 0.85;
      kcalDiff = tdee - calories;
    } else if (goal === "surplus") {
      calories = tdee * 1.1;
      kcalDiff = calories - tdee;
    }

    const kgPerWeek = kcalDiff > 0 ? +(kcalDiff * 7 / 7700).toFixed(2) : 0;

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      calories: Math.round(calories),
      kgPerWeek,
    });
  };

  const downloadPDF = () => {
    if (!result) return;
    const doc = new jsPDF();
    doc.text("Caloric Intake Recommendation", 10, 10);
    doc.text(`BMR: ${result.bmr} kcal`, 10, 20);
    doc.text(`TDEE: ${result.tdee} kcal`, 10, 30);
    doc.text(`Recommended Calories: ${result.calories} kcal`, 10, 40);
    if (formData.goal !== "maintenance") {
      doc.text(`Estimated weight change: ${result.kgPerWeek} kg/week`, 10, 50);
    }
    doc.save("calories.pdf");
  };

  return (
    <>
   <section className="section" style={{ paddingTop: "2rem" }}>
        <div
          className="box"
          style={{
            maxWidth: "600px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <h2 className="title is-4 has-text-centered">Calorie Calculator</h2>

          {/* Responsive layout */}
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <label className="label">Age</label>
              <input className="input" name="age" onChange={handleChange} />
            </div>

            <div className="column is-one-third">
              <label className="label">Weight (kg)</label>
              <input className="input" name="weight" onChange={handleChange} />
            </div>

            <div className="column is-one-third">
              <label className="label">Height (cm)</label>
              <input className="input" name="height" onChange={handleChange} />
            </div>

            <div className="column is-half">
              <label className="label">Gender</label>
              <div className="select is-fullwidth">
                <select name="gender" onChange={handleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="column is-half">
              <label className="label">Activity Level</label>
              <div className="select is-fullwidth">
                <select name="activity" onChange={handleChange}>
                  <option value="1.2">Sedentary</option>
                  <option value="1.375">Light</option>
                  <option value="1.55">Moderate</option>
                  <option value="1.725">Active</option>
                  <option value="1.9">Very Active</option>
                </select>
              </div>
            </div>

            <div className="column is-full">
              <label className="label">Goal</label>
              <div className="select is-fullwidth">
                <select name="goal" onChange={handleChange}>
                  <option value="deficit">Lose Weight</option>
                  <option value="maintenance">Maintain</option>
                  <option value="surplus">Gain Weight</option>
                </select>
              </div>
            </div>
          </div>

          <div className="has-text-centered mt-4">
            <button className="button is-primary" onClick={calculate}>
              Calculate
            </button>
          </div>
        </div>
      </section>
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
        <section className="section">
          <div
            className="notification is-info"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <p><strong>BMR:</strong> {result.bmr} kcal</p>
            <p><strong>TDEE:</strong> {result.tdee} kcal</p>
            <p><strong>Recommended Intake:</strong> {result.calories} kcal/day</p>
            {formData.goal !== "maintenance" && (
              <>
                <p><strong>Estimated {formData.goal === "deficit" ? "weight loss" : "weight gain"}:</strong> {result.kgPerWeek} kg/week</p>
                <p className="mt-2">
                  Use this calorie target for the next <strong>2 weeks</strong> and then recalculate based on your progress.
                </p>
              </>
            )}
            <button className="button is-link mt-3" onClick={downloadPDF}>
              Download PDF
            </button>
          </div>
        </section>
      )}
    </>
  );
}
