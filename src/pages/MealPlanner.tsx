import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import foods from "../data/nutrition/nutrition-foods";

interface FoodItem {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface Meal {
  protein: FoodItem;
  carb: FoodItem;
  fat: FoodItem;
  veggie: FoodItem;
  fruit: FoodItem | null;
  label: string | null;
  proteinGrams: number;
  carbGrams: number;
  fatGrams: number;
  totalCalories: number;
}

(jsPDF as any).autoTable = autoTable;

export default function MealPlanner() {
  const [calories, setCalories] = useState<number>(2000);
  const [goal, setGoal] = useState<string>("maintainMuscle");
  const [mealsPerDay, setMealsPerDay] = useState<number>(5);
  const [generatedMeals, setGeneratedMeals] = useState<Meal[]>([]);

  const goalMacros = {
    loseFat: { protein: 40, carbs: 30, fat: 30 },
    maintainMuscle: { protein: 30, carbs: 40, fat: 30 },
    buildMuscle: { protein: 30, carbs: 50, fat: 20 },
  };

  const generateMeals = () => {
    const { protein, carbs, fat } = goalMacros[goal as keyof typeof goalMacros];

    const totalProtein = ((calories * protein) / 100) / 4;
    const totalCarbs = ((calories * carbs) / 100) / 4;
    const totalFat = ((calories * fat) / 100) / 9;

    const proteinPerMeal = totalProtein / mealsPerDay;
    const carbPerMeal = totalCarbs / mealsPerDay;
    const fatPerMeal = totalFat / mealsPerDay;

    const meals: Meal[] = [];
    const fruitIndex = Math.floor(Math.random() * mealsPerDay);
    const fruitTiming = Math.random() < 0.5 ? "Pre-Workout" : "Post-Workout";

    for (let i = 0; i < mealsPerDay; i++) {
      const protein = foods.proteins[Math.floor(Math.random() * foods.proteins.length)];
      const carb = foods.carbohydrates[Math.floor(Math.random() * foods.carbohydrates.length)];
      const fat = foods.fats[Math.floor(Math.random() * foods.fats.length)];
      const veggie = foods.vegetables[Math.floor(Math.random() * foods.vegetables.length)];
      const fruit = i === fruitIndex ? foods.fruits[Math.floor(Math.random() * foods.fruits.length)] : null;

      const proteinGrams = parseFloat(proteinPerMeal.toFixed(1));
      const carbGrams = parseFloat(carbPerMeal.toFixed(1));
      const fatGrams = parseFloat(fatPerMeal.toFixed(1));
      const totalCalories = parseFloat(((proteinGrams * 4) + (carbGrams * 4) + (fatGrams * 9)).toFixed(1));

      meals.push({
        protein,
        carb,
        fat,
        veggie,
        fruit,
        label: fruit ? `(${fruitTiming})` : null,
        proteinGrams,
        carbGrams,
        fatGrams,
        totalCalories
      });
    }

    setGeneratedMeals(meals);
  };

  const downloadPDF = () => {
    if (!generatedMeals.length) return;
  
    const doc = new jsPDF();
    const { protein, carbs, fat } = goalMacros[goal as keyof typeof goalMacros];
  
    doc.setFontSize(12);
    doc.text(`Meal Plan – ${goal.replace(/([A-Z])/g, " $1")} – ${calories} kcal/day`, 10, 10);
  
    doc.setFontSize(10);
    doc.text(
      "This is a standard meal plan based on your selected goal.\n" +
      "You can adjust it as needed. Macronutrient ratios are based on general guidelines.",
      10,
      18
    );
  
    doc.text(
      `Macro Distribution: Protein ${protein}%, Carbs ${carbs}%, Fats ${fat}%`,
      10,
      28
    );
  
    let y = 38;
  
    generatedMeals.forEach((meal, i) => {
      doc.setFont(undefined, "bold");
      doc.text(`Meal ${i + 1} ${meal.label || ""}`, 10, y);
      y += 6;
  
      doc.setFont(undefined, "normal");
  
      const rows = [
        [`Protein: ${meal.protein.name}`, `${meal.proteinGrams}g`],
        [`Carb: ${meal.carb.name}`, `${meal.carbGrams}g`],
        [`Fat: ${meal.fat.name}`, `${meal.fatGrams}g`],
        [`Vegetable: ${meal.veggie.name}`, `as desired`],
      ];
  
      if (meal.fruit) {
        rows.push([`Fruit: ${meal.fruit.name}`, `~1 handful`]);
      }
  
      rows.push([`Total Calories`, `${meal.totalCalories} kcal`]);
  
      rows.forEach(([label, value]) => {
        doc.text(`${label} - ${value}`, 12, y);
        y += 6;
      });
  
      y += 6;
  
      if (y > 260) {
        doc.addPage();
        y = 10;
      }
    });
  
    // References
    if (y > 240) {
      doc.addPage();
      y = 10;
    }
  
    doc.setFont(undefined, "bold");
    doc.text("Scientific References", 10, y);
    doc.setFont(undefined, "normal");
    y += 6;
  
    const references = [
      "– Helms ER, et al. (2014). JISSN – Evidence-based recommendations for fat loss.",
      "– Trexler ET, et al. (2019). JISSN – Body composition in sport.",
      "– Morton RW, et al. (2018). PubMed – Protein intake for muscle growth."
    ];
  
    references.forEach(ref => {
      doc.text(ref, 10, y);
      y += 5;
    });
  
    const fileName = `meal-plan-${goal}-${calories}kcal.pdf`;
    doc.save(fileName);
  };

  
  return (
    <section className="section centered-page">
      <div className="box box-content">
        <h2 className="title is-4 has-text-centered">Generate a Sample Meal Plan</h2>

        <div className="field">
          <label className="label">Calories per Day</label>
          <input
            className="input"
            type="number"
            value={calories}
            onChange={(e) => setCalories(Number(e.target.value))}
          />
        </div>

        <div className="field">
          <label className="label">Goal</label>
          <div className="select is-fullwidth">
            <select value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="loseFat">Lose Fat</option>
              <option value="maintainMuscle">Maintain Muscle</option>
              <option value="buildMuscle">Build Muscle</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label">Meals per Day</label>
          <input
            className="input"
            type="number"
            min={3}
            max={6}
            value={mealsPerDay}
            onChange={(e) => setMealsPerDay(Number(e.target.value))}
          />
        </div>

        <div className="has-text-centered mt-4">
          <button className="button is-primary" onClick={generateMeals}>
            Generate Meal Plan
          </button>
        </div>

        {generatedMeals.length > 0 && (
          <div className="mt-5">
            <h3 className="title is-5 has-text-centered">Suggested Meals</h3>
            {generatedMeals.map((meal, i) => (
              <div key={i} className="notification is-info mt-2">
                <strong>Meal {i + 1} {meal.label ? <span>{meal.label}</span> : ""}</strong>
                <ul>
                  <li><strong>Protein:</strong> {meal.protein.name} ({meal.proteinGrams}g)</li>
                  <li><strong>Carb:</strong> {meal.carb.name} ({meal.carbGrams}g)</li>
                  <li><strong>Fat:</strong> {meal.fat.name} ({meal.fatGrams}g)</li>
                  <li><strong>Vegetable:</strong> {meal.veggie.name} (as desired)</li>
                  {meal.fruit && <li><strong>Fruit:</strong> {meal.fruit.name} (~1 handful)</li>}
                </ul>
                <p className="mt-2"><strong>Total per Meal:</strong> {meal.totalCalories} kcal</p>
              </div>
            ))}

            <div className="has-text-centered mt-4">
              <button className="button is-link" onClick={downloadPDF}>
                Download as PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
