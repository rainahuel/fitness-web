import React, { useState } from "react";
import jsPDF from "jspdf";
import CalorieChart from "../components/CalorieChart";
import { sendAnalyticsEvent } from "../analytics";
import Swal from 'sweetalert2';


interface ResultData {
  bmr: number;
  tdee: number;
  calories: number;
  kgPerWeek: number;
}

interface ChartEntry {
  label: string;
  calories: number;
}

export default function CalorieCalculator() {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "male",
    goal: "deficit",
    sleep: "",
    sitting: "",
    walking: "",
    strength: "",
    cardio: "",
  });

  const [result, setResult] = useState<ResultData | null>(null);
  const [chartData, setChartData] = useState<ChartEntry[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculate = () => {
    const { age, weight, height, gender, goal, sleep, sitting, walking, strength, cardio } = formData;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
  
    const sleepHours = parseFloat(sleep) || 0;
    const sittingHours = parseFloat(sitting) || 0;
    const walkingMinutes = parseFloat(walking) || 0;
    const strengthMinutes = parseFloat(strength) || 0;
    const cardioMinutes = parseFloat(cardio) || 0;
  
    if (!w || !h || !a) {
      Swal.fire('Error!', 'Please fill in all required fields.', 'error');
      return;
    }
  
    const walkingHours = walkingMinutes / 60;
    const strengthHours = strengthMinutes / 60;
    const cardioHours = cardioMinutes / 60;
  
    const bmr = gender === "male"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
  
    const sleepCalories = sleepHours * w * 0.95;
    const sittingCalories = sittingHours * w * 1.3;
    const walkingCalories = walkingHours * w * 3.5;
    const strengthCalories = strengthHours * w * 6.5;
    const cardioCalories = cardioHours * w * 9;
  
    const tdee = bmr + sleepCalories + sittingCalories + walkingCalories + strengthCalories + cardioCalories;
  
    let calories = tdee;
    let kcalDiff = 0;
  
    if (goal === "deficit") {
      calories = tdee * 0.85;
      kcalDiff = tdee - calories;
    } else if (goal === "aggressiveDeficit") {
      calories = tdee * 0.80;
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
  
    setChartData([
      { label: "BMR", calories: Math.round(bmr) },
      { label: "Sleep", calories: Math.round(sleepCalories) },
      { label: "Sitting", calories: Math.round(sittingCalories) },
      { label: "Walking", calories: Math.round(walkingCalories) },
      { label: "Strength Training", calories: Math.round(strengthCalories) },
      { label: "Cardio", calories: Math.round(cardioCalories) },
    ]);
  
    sendAnalyticsEvent('calculate_calories', {
      gender,
      goal,
      weight: w,
      height: h,
      age: a,
      sleep_hours: sleepHours,
      sitting_hours: sittingHours,
      walking_minutes: walkingMinutes,
      strength_minutes: strengthMinutes,
      cardio_minutes: cardioMinutes,
    });
  
    Swal.fire('Success!', 'Calories calculated successfully.', 'success');
  };
  
  

  const downloadPDF = () => {
    if (!result) {
      Swal.fire('Error!', 'Please calculate your calories before downloading.', 'error');
      return;
    }
  
    sendAnalyticsEvent('download_calories_pdf', {
      bmr: result.bmr,
      tdee: result.tdee,
      calories: result.calories,
      kg_per_week: result.kgPerWeek,
    });
  
    const doc = new jsPDF();
    doc.text("Caloric Intake Recommendation", 10, 10);
    doc.text(`BMR: ${result.bmr} kcal`, 10, 20);
    doc.text(`TDEE (based on your routine): ${result.tdee} kcal`, 10, 30);
    doc.text(`Recommended Calories: ${result.calories} kcal`, 10, 40);
    if (formData.goal !== "maintenance") {
      doc.text(`Estimated weight change: ${result.kgPerWeek} kg/week`, 10, 50);
    }
    doc.save("calories.pdf");
  
    Swal.fire('Success!', 'Calories PDF downloaded successfully.', 'success');
  };

  const copyResults = () => {
    if (!result) {
      Swal.fire('Error!', 'Please calculate your calories before copying.', 'error');
      return;
    }
  
    const summary = `\nBMR: ${result.bmr} kcal\nTDEE: ${result.tdee} kcal\nRecommended Calories: ${result.calories} kcal/day\n${formData.goal !== "maintenance" ? `Estimated ${formData.goal.includes("deficit") ? "weight loss" : "weight gain"}: ${result.kgPerWeek} kg/week` : ""}`.trim();
    navigator.clipboard.writeText(summary);
    Swal.fire('Success!', 'Results copied to clipboard.', 'success');
  };
  

  const labelStyle = {
    minHeight: '3.5rem',
    whiteSpace: 'normal',
    lineHeight: '1.2',
    display: 'block',
  };

  return (
    <>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="box box-content">
          <h2 className="title is-4 has-text-centered">Calorie Calculator</h2>

          <div className="columns is-multiline is-variable is-4">
            {["age", "weight", "height", "sleep", "sitting", "walking", "strength", "cardio"].map((name, i) => (
              <div className="column is-one-third" key={i}>
                <label className="label" style={labelStyle}>
                  {name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')} {name === 'walking' || name === 'strength' || name === 'cardio' ? '(mins/day)' : name === 'sleep' || name === 'sitting' ? '(hrs/day)' : name === 'height' ? '(cm)' : name === 'weight' ? '(kg)' : ''}
                </label>
                <input className="input" name={name} onChange={handleChange} />
              </div>
            ))}

            <div className="column is-one-third">
              <label className="label" style={labelStyle}>Gender</label>
              <div className="select is-fullwidth">
                <select name="gender" onChange={handleChange}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="column is-one-third">
              <label className="label" style={labelStyle}>Goal</label>
              <div className="select is-fullwidth">
                <select name="goal" onChange={handleChange}>
                  <option value="deficit">Lose Weight</option>
                  <option value="aggressiveDeficit">Lose Weight (Faster)</option>
                  <option value="maintenance">Maintain</option>
                  <option value="surplus">Gain Weight</option>
                </select>
              </div>
            </div>
          </div>

          <div className="has-text-centered mt-4">
            <button className="button is-primary" onClick={calculate}>Calculate</button>
          </div>
        </div>
      </section>

      <div className="has-text-centered mt-4">
        <a className="button is-small is-light is-link" href="/references" target="_blank" rel="noopener noreferrer">
          🔬 View Scientific References
        </a>
      </div>

      {result && (
        <section className="section">
          <div className="notification is-info" style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p><strong>BMR:</strong> {result.bmr} kcal</p>
            <p><strong>TDEE (based on your daily routine):</strong> {result.tdee} kcal</p>
            <p><strong>Recommended Intake:</strong> {result.calories} kcal/day</p>
            {formData.goal !== "maintenance" && (
              <>
                <p><strong>Estimated {formData.goal.includes("deficit") ? "weight loss" : "weight gain"}:</strong> {result.kgPerWeek} kg/week</p>
                {formData.goal === "aggressiveDeficit" && (
                  <p className="has-text-danger mt-2">
                    ⚠️ Aggressive fat loss is not recommended for long periods. Monitor your energy, recovery, and progress weekly.
                  </p>
                )}
                <p className="mt-2">
                  Use this calorie target for the next <strong>2 weeks</strong> and then recalculate based on your progress.
                </p>
              </>
            )}
            <div className="buttons mt-3">
              <button className="button is-link" onClick={downloadPDF}>Download PDF</button>
              <button className="button is-light" onClick={copyResults}>📋 Copy Results</button>
            </div>
          </div>

          <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
            <h3 className="title is-5 has-text-centered">Daily Calorie Breakdown</h3>
            <CalorieChart data={chartData} />
          </div>

          <div className="has-text-centered mt-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <p className="is-size-7 has-text-grey">
              ⚠️ This result is an approximation based on the Mifflin-St Jeor Equation and energy expenditure estimates from published averages. Results may vary depending on genetics, metabolism, and lifestyle.
            </p>
          </div>
        </section>
      )}
    </>
  );
}