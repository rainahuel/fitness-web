import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import helmsData from "../data/workout/helms-routines-full";
import schoenfeldData from "../data/workout/schoenfeld-routines-full";

(jsPDF as any).autoTable = autoTable;

export default function WorkoutGenerator() {
  const [method, setMethod] = useState("helms");
  const [goal, setGoal] = useState("maintainMuscle");
  const [level, setLevel] = useState("beginner");
  const [daysPerWeek, setDaysPerWeek] = useState("4");
  const [routine, setRoutine] = useState<any[]>([]);

  const methodSources: Record<string, any> = {
    helms: helmsData["helms"],
    schoenfeld: schoenfeldData["schoenfeld"]
  };

  const methodDescriptions: Record<string, string> = {
    helms: "This training plan is based on principles from 'The Muscle and Strength Pyramid – Training' by Eric Helms. It can be adjusted to your experience and preferences.",
    schoenfeld: "This training plan is inspired by scientific principles from Brad Schoenfeld's 'Science and Development of Muscle Hypertrophy'. You can modify the routine progressively as needed."
  };

  const generateRoutine = () => {
    const source = methodSources[method];
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
  
    const methodName = method.charAt(0).toUpperCase() + method.slice(1);
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
    doc.text(methodDescriptions[method], 10, 45, { maxWidth: 190 });
  
    let y = 60;
  
    routine.forEach((day, index) => {
      doc.setFontSize(12);
      doc.setTextColor(0);
      doc.text(`${day.day} – ${day.focus}`, 10, y);
      y += 6;
  
      doc.setFontSize(10);
      doc.setTextColor(50);
      day.exercises.forEach((ex: any) => {
        doc.text(`• ${ex.name}`, 12, y);
        doc.text(`Sets: ${ex.sets}`, 100, y);
        doc.text(`Reps: ${ex.reps}`, 130, y);
        doc.text(`Rest: ${ex.rest}`, 160, y);
        y += 5;
        if (y > 280) {
          doc.addPage();
          y = 10;
        }
      });
  
      y += 8;
    });
  
    doc.save(fileName);
  };
  
  

  return (
    <section className="section centered-page">
      <div className="box box-content">
        <h2 className="title is-4 has-text-centered">Generate Your Training Plan</h2>

        {/* Training Method */}
        <div className="field">
          <label className="label">Training Method</label>
          <div className="select is-fullwidth">
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
              <option value="helms">Eric Helms</option>
              <option value="schoenfeld">Brad Schoenfeld</option>
            </select>
          </div>
        </div>

        {/* Training Goal */}
        <div className="field">
          <label className="label">Training Goal</label>
          <div className="select is-fullwidth">
            <select value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="loseFat">Lose Fat</option>
              <option value="maintainMuscle">Maintain Muscle</option>
              <option value="gainStrength">Gain Strength</option>
              <option value="buildMuscle">Build Muscle</option>
            </select>
          </div>
        </div>

        {/* Experience Level */}
        <div className="field">
          <label className="label">Experience Level</label>
          <div className="select is-fullwidth">
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
            </select>
          </div>
        </div>

        {/* Training Days */}
        <div className="field">
          <label className="label">Days per Week</label>
          <div className="select is-fullwidth">
            <select value={daysPerWeek} onChange={(e) => setDaysPerWeek(e.target.value)}>
              {[3, 4, 5, 6].map((num) => (
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

        {routine.length > 0 && (
          <div className="mt-5">
            <h3 className="title is-5 has-text-centered">Your Routine</h3>
            {routine.map((day, index) => (
              <div className="notification is-info" key={index}>
                <strong>{day.day} – {day.focus}</strong>
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
              </div>
            ))}

            {/* Description based on method */}
            <div className="notification is-light mt-3 has-text-centered">
              <p>{methodDescriptions[method]}</p>
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
