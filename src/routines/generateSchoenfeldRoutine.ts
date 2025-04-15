
export type RoutineDay = {
  day: string;
  focus: string;
  exercises: string[];
};

export function generateSchoenfeldRoutine(days: number): RoutineDay[] {
  const upperPush = ["Barbell Bench Press", "Incline Dumbbell Press", "Overhead Press", "Triceps Dips"];
  const upperPull = ["Pull-ups", "Barbell Rows", "Lat Pulldown", "Biceps Curls"];
  const lowerStrength = ["Back Squat", "Romanian Deadlift", "Leg Press", "Calf Raises"];
  const lowerHamstrings = ["Front Squat", "Walking Lunges", "Leg Curls", "Seated Calf Raises"];
  const fullBody = ["Deadlift", "Overhead Press", "Barbell Row", "Planks"];
  const hypertrophyMix = ["Incline Dumbbell Press", "Pull-ups", "Leg Extensions", "Lateral Raises", "Cable Flys"];

  const result: RoutineDay[] = [];

  if (days >= 1) {
    result.push({ day: "Day 1", focus: "Full Body Push", exercises: upperPush.slice(0, 3) });
  }
  if (days >= 2) {
    result.push({ day: "Day 2", focus: "Lower Body", exercises: lowerStrength });
  }
  if (days >= 3) {
    result.push({ day: "Day 3", focus: "Upper Body (Pull)", exercises: upperPull });
  }
  if (days >= 4) {
    result.push({ day: "Day 4", focus: "Lower Body (Hamstrings focus)", exercises: lowerHamstrings });
  }
  if (days >= 5) {
    result.push({ day: "Day 5", focus: "Full Body Strength", exercises: fullBody });
  }
  if (days >= 6) {
    result.push({ day: "Day 6", focus: "Hypertrophy Mix", exercises: hypertrophyMix });
  }
  if (days === 7) {
    result.push({ day: "Day 7", focus: "Recovery Mobility + Core", exercises: ["Plank", "Side Plank", "Foam Rolling", "Dynamic Stretching"] });
  }

  return result;
}
