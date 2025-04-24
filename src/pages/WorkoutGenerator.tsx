import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import methodsConfig from "../data/workout/methods-config";

(jsPDF as any).autoTable = autoTable;

export default function WorkoutGenerator() {
  const methodKeys = Object.keys(methodsConfig);
  const [method, setMethod] = useState(methodKeys[0]);
  const [goal, setGoal] = useState(methodsConfig[method].defaultGoal);
  const [level, setLevel] = useState("beginner");
  const [daysPerWeek, setDaysPerWeek] = useState(methodsConfig[method].defaultDays);
  const [routine, setRoutine] = useState<any[]>([]);

  useEffect(() => {
    setGoal(methodsConfig[method].defaultGoal);
    setDaysPerWeek(methodsConfig[method].defaultDays);
  }, [method]);

  const generateRoutine = () => {
    const source = methodsConfig[method].data;
    const routineSet = source?.[goal]?.[level]?.[daysPerWeek];

    if (routineSet) {
      setRoutine(routineSet);
    } else {
      setRoutine([]);
      alert("No routine found for selected options.");
    }
  };

  const downloadPDF = () => {
    if (!routine.length) return;
  
    const doc = new jsPDF();
    const methodName = methodsConfig[method].name;
    const goalName = goal.replace(/([A-Z])/g, " $1");
    const fileName = `training-plan-${method}-${goal}-${daysPerWeek}days.pdf`;
  
    doc.setFontSize(14);
    doc.text("Personalized Training Plan", 10, 10);
  
    doc.setFontSize(11);
    doc.text(`Method: ${methodName}`, 10, 18);
    doc.text(`Goal: ${goalName}`, 10, 24);
    doc.text(`Level: ${level.charAt(0).toUpperCase() + level.slice(1)}`, 10, 30);
    doc.text(`Training Days/Week: ${daysPerWeek}`, 10, 36);
  
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(methodsConfig[method].description, 10, 45, { maxWidth: 190 });
  
    let y = 60;
  
    routine.forEach((day) => {
      doc.setFontSize(12);
      doc.setTextColor(0);
      doc.text(`${day.day} – ${day.focus}`, 10, y);
      y += 6;
  
      if (methodsConfig[method].type === "interval") {
        day.blocks.forEach((block: any) => {
          doc.setFontSize(11);
          doc.text(block.name, 12, y);
          y += 5;
  
          block.exercises.forEach((ex: any) => {
            doc.setFontSize(10);
            doc.text(`• ${ex.name}`, 14, y);
            doc.text(`Work: ${ex.work}`, 70, y);
            doc.text(`Rest: ${ex.rest}`, 110, y);
            doc.text(`Rounds: ${ex.rounds}`, 150, y);
            y += 5;
            if (y > 280) {
              doc.addPage();
              y = 10;
            }
          });
          y += 5;
        });
      } else {
        day.exercises.forEach((ex: any) => {
          doc.setFontSize(10);
          doc.text(`• ${ex.name}`, 14, y);
          doc.text(`Sets: ${ex.sets}`, 70, y);
          doc.text(`Reps: ${ex.reps}`, 110, y);
          doc.text(`Rest: ${ex.rest}`, 150, y);
          y += 5;
          if (y > 280) {
            doc.addPage();
            y = 10;
          }
        });
        y += 8;
      }
    });
  
    doc.save(fileName);
  };
  

  return (
    <section className="section centered-page">
      <div className="box box-content has-text-left" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", backdropFilter: "blur(8px)", borderRadius: "12px", color: "#ffffff" }}>
        <h2 className="title is-3 has-text-centered" style={{ color: "#ffffff", fontWeight: 800, textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>Generate Your Training Plan</h2>

        {/* Training Method */}
        <div className="field">
          <label className="label" style={{ color: "#e2e8f0" }}>Training Method</label>
          <div className="select is-fullwidth">
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
              {methodKeys.map((key) => (
                <option key={key} value={key}>
                  {methodsConfig[key].name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Training Goal */}
        <div className="field">
          <label className="label" style={{ color: "#e2e8f0" }}>Training Goal</label>
          <div className="select is-fullwidth">
            <select value={goal} onChange={(e) => setGoal(e.target.value)}>
              {methodsConfig[method].goals.map((goalOption) => (
                <option key={goalOption} value={goalOption}>
                  {goalOption.replace(/([A-Z])/g, " $1")}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Experience Level */}
        <div className="field">
          <label className="label" style={{ color: "#e2e8f0" }}>Experience Level</label>
          <div className="select is-fullwidth">
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
            </select>
          </div>
        </div>

        {/* Days per Week */}
        <div className="field">
          <label className="label" style={{ color: "#e2e8f0" }}>Days per Week</label>
          <div className="select is-fullwidth">
            <select value={daysPerWeek} onChange={(e) => setDaysPerWeek(e.target.value)}>
              {methodsConfig[method].daysPerWeek.map((num) => (
                <option key={num} value={num}>{num} Days</option>
              ))}
            </select>
          </div>
        </div>

        <div className="has-text-centered mt-4">
          <button className="button is-primary" onClick={generateRoutine}>
            Generate Routine
          </button>
        </div>

        {/* Display Routine */}
        {routine.length > 0 && (
          <div className="mt-5">
            <h3 className="title is-5 has-text-centered" style={{ color: "#ffffff" }}>Your Routine</h3>

            {routine.map((day, index) => (
              <div className="notification is-info" key={index} style={{ backgroundColor: "#0ea5e9", color: "white" }}>
                <strong>{day.day} – {day.focus}</strong>

                {/* Interval-based routines */}
                {methodsConfig[method].type === "interval" ? (
                  <div className="mt-2">
                    {day.blocks.map((block, bIndex) => (
                      <div key={bIndex}>
                        <p><strong>{block.name}</strong></p>
                        <table className="table is-fullwidth mt-1">
                          <thead>
                            <tr>
                              <th>Exercise</th>
                              <th>Work</th>
                              <th>Rest</th>
                              <th>Rounds</th>
                            </tr>
                          </thead>
                          <tbody>
                            {block.exercises.map((ex, i) => (
                              <tr key={i}>
                                <td>{ex.name}</td>
                                <td>{ex.work}</td>
                                <td>{ex.rest}</td>
                                <td>{ex.rounds}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Traditional routines
                  <table className="table is-fullwidth mt-2">
                    <thead>
                      <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Rest</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.exercises.map((ex: any, i: number) => (
                        <tr key={i}>
                          <td>{ex.name}</td>
                          <td>{ex.sets}</td>
                          <td>{ex.reps}</td>
                          <td>{ex.rest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}


            <div className="notification is-light mt-3 has-text-centered" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#e2e8f0" }}>
              <p>{methodsConfig[method].description}</p>
            </div>

            <div className="has-text-centered mt-4">
              <button className="button is-link" onClick={downloadPDF}>
                Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}