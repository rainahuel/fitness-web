import helmsData from "./helms-routines-full";
import schoenfeldData from "./schoenfeld-routines-full";
import startingStrengthData from "./starting-strength-routines";
import gvtData from "./gvt-routines-full";
import phulData from "./phul-routines-full";

const methodsConfig = {
  helms: {
    name: "Eric Helms",
    goals: ["loseFat", "maintainMuscle", "gainStrength", "buildMuscle"],
    defaultGoal: "maintainMuscle",
    daysPerWeek: [3, 4, 5, 6],
    defaultDays: "4",
    description:
      "This training plan is based on principles from 'The Muscle and Strength Pyramid – Training' by Eric Helms. It can be adjusted to your experience and preferences.",
    data: helmsData["helms"]
  },
  schoenfeld: {
    name: "Brad Schoenfeld",
    goals: ["loseFat", "maintainMuscle", "gainStrength", "buildMuscle"],
    defaultGoal: "maintainMuscle",
    daysPerWeek: [3, 4, 5, 6],
    defaultDays: "4",
    description:
      "This training plan is inspired by scientific principles from Brad Schoenfeld's 'Science and Development of Muscle Hypertrophy'. You can modify the routine progressively as needed.",
    data: schoenfeldData["schoenfeld"]
  },
  startingStrength: {
    name: "Starting Strength",
    goals: ["gainStrength"],
    defaultGoal: "gainStrength",
    daysPerWeek: [3],
    defaultDays: "3",
    description:
      "This training plan follows the Starting Strength method by Mark Rippetoe, ideal for building foundational strength.",
    data: startingStrengthData["startingStrength"]
  },
  gvt: {
    name: "German Volume Training (GVT)",
    goals: ["buildMuscle"],
    defaultGoal: "buildMuscle",
    daysPerWeek: [4],
    defaultDays: "4",
    description:
      "This plan is based on the German Volume Training (GVT) by Charles Poliquin, ideal for muscle hypertrophy using a high-volume approach.",
    data: gvtData["gvt"]
  },
  phul: {
    name: "PHUL (Power Hypertrophy Upper Lower)",
    goals: ["buildMuscle"],
    defaultGoal: "buildMuscle",
    daysPerWeek: [4],
    defaultDays: "4",
    description:
      "The PHUL training system (Power Hypertrophy Upper Lower) is designed to build strength and muscle by combining heavy compound lifts with hypertrophy-focused volume work across four sessions each week.",
    data: phulData["phul"]
  }
};

export default methodsConfig;
