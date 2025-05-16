const upperLowerSplitData = {
    upperLowerSplit: {
        loseFat: {
            beginner: {
                3: [
                    {
                        day: "Day 1 - Upper Body",
                        focus: "Push + Pull",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60-90 sec" },
                            { name: "Seated Cable Row", sets: 3, reps: "10-12", rest: "60-90 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Plank", sets: 3, reps: "30 sec", rest: "30-60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower Body",
                        focus: "Legs + Glutes",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 2, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Standing Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper Body (Accessory)",
                        focus: "Arms + Core",
                        exercises: [
                            { name: "Barbell Curl", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Face Pull", sets: 3, reps: "15", rest: "60 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    }
                ],
                4: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Push Focus",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Strength Focus",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Leg Curl", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Pull Focus",
                        exercises: [
                            { name: "Seated Cable Row", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Barbell Curl", sets: 2, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Volume + Core",
                        exercises: [
                            { name: "Leg Press", sets: 3, reps: "12", rest: "90 sec" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    }
                ],
                5: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Chest + Shoulders",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60-90 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Quads + Glutes",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 2, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Standing Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Back + Arms",
                        exercises: [
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Seated Cable Row", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Barbell Curl", sets: 2, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Hamstrings + Core",
                        exercises: [
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Leg Curl", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    },
                    {
                        day: "Day 5 - Upper C",
                        focus: "Accessory Volume",
                        exercises: [
                            { name: "Face Pull", sets: 3, reps: "15", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Lateral Raise", sets: 2, reps: "15", rest: "60 sec" }
                        ]
                    }
                ]
            },
            intermediate: {
                3: [
                    {
                        day: "Day 1 - Upper Body",
                        focus: "Push + Pull Strength",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Barbell Row", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Overhead Press", sets: 3, reps: "8", rest: "60-90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "10", rest: "60-90 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower Body",
                        focus: "Strength + Glutes",
                        exercises: [
                            { name: "Back Squat", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper Body (Accessory)",
                        focus: "Volume + Core",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Face Pull", sets: 3, reps: "15", rest: "60 sec" },
                            { name: "Barbell Curl", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    }
                ],
                4: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Horizontal Push/Pull",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Barbell Row", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Quads + Glutes",
                        exercises: [
                            { name: "Back Squat", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Standing Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Vertical Push/Pull",
                        exercises: [
                            { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Barbell Curl", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Hamstrings + Core",
                        exercises: [
                            { name: "Romanian Deadlift", sets: 4, reps: "10", rest: "90-120 sec" },
                            { name: "Leg Curl", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    }
                ],
                5: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Horizontal Push",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Glutes + Quads",
                        exercises: [
                            { name: "Back Squat", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Standing Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Vertical Pull",
                        exercises: [
                            { name: "Lat Pulldown", sets: 4, reps: "10", rest: "90 sec" },
                            { name: "Barbell Row", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Face Pull", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Hamstrings + Core",
                        exercises: [
                            { name: "Romanian Deadlift", sets: 4, reps: "10", rest: "90 sec" },
                            { name: "Leg Curl", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    },
                    {
                        day: "Day 5 - Upper C",
                        focus: "Arms + Shoulders",
                        exercises: [
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Barbell Curl", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    }
                ]
            }
        },
        maintainMuscle: {
            beginner: {
                3: [
                    {
                        day: "Day 1 - Upper Body",
                        focus: "Push + Pull",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Seated Cable Row", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower Body",
                        focus: "Legs + Glutes",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 2, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Full Body (Accessory)",
                        focus: "Arms + Core",
                        exercises: [
                            { name: "Barbell Curl", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    }
                ],
                4: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Push",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lateral Raise", sets: 2, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Strength",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Leg Curl", sets: 2, reps: "12", rest: "60-90 sec" },
                            { name: "Calf Raise", sets: 2, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Pull",
                        exercises: [
                            { name: "Seated Cable Row", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Barbell Curl", sets: 2, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Volume + Core",
                        exercises: [
                            { name: "Leg Press", sets: 3, reps: "12", rest: "90 sec" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    }
                ],
                5: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Chest + Shoulders",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60-90 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Quads + Glutes",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 2, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Standing Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Back + Arms",
                        exercises: [
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Seated Cable Row", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Barbell Curl", sets: 2, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Hamstrings + Core",
                        exercises: [
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Leg Curl", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    },
                    {
                        day: "Day 5 - Upper C",
                        focus: "Accessory Volume",
                        exercises: [
                            { name: "Face Pull", sets: 3, reps: "15", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Lateral Raise", sets: 2, reps: "15", rest: "60 sec" }
                        ]
                    }
                ]
            },
            intermediate: {
                3: [
                    {
                        day: "Day 1 - Upper Body",
                        focus: "Push + Pull Strength",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Barbell Row", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Overhead Press", sets: 3, reps: "8", rest: "60-90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "10", rest: "60-90 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower Body",
                        focus: "Strength + Glutes",
                        exercises: [
                            { name: "Back Squat", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper Body (Accessory)",
                        focus: "Volume + Core",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Face Pull", sets: 3, reps: "15", rest: "60 sec" },
                            { name: "Barbell Curl", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    }
                ],
                4: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Push Strength",
                        exercises: [
                            { name: "Incline Barbell Press", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Squat Focus",
                        exercises: [
                            { name: "Back Squat", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Leg Curl", sets: 3, reps: "10-12", rest: "60-90 sec" },
                            { name: "Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Pull Strength",
                        exercises: [
                            { name: "Barbell Row", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "10-12", rest: "60-90 sec" },
                            { name: "Barbell Curl", sets: 2, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Deadlift + Core",
                        exercises: [
                            { name: "Romanian Deadlift", sets: 4, reps: "8", rest: "90-120 sec" },
                            { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    }
                ],
                5: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Chest + Shoulders",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 4, reps: "8-10", rest: "90 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Quads + Glutes",
                        exercises: [
                            { name: "Back Squat", sets: 4, reps: "8", rest: "90-120 sec" },
                            { name: "Leg Press", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Back + Arms",
                        exercises: [
                            { name: "Barbell Row", sets: 4, reps: "8", rest: "90-120 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Barbell Curl", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Hamstrings + Core",
                        exercises: [
                            { name: "Romanian Deadlift", sets: 4, reps: "10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    },
                    {
                        day: "Day 5 - Upper C",
                        focus: "Accessory Volume",
                        exercises: [
                            { name: "Face Pull", sets: 3, reps: "15", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Lateral Raise", sets: 2, reps: "15", rest: "60 sec" }
                        ]
                    }
                ]
            }
        },
        buildMuscle: {
            beginner: {
                3: [
                    {
                        day: "Day 1 - Upper Body",
                        focus: "Chest, Shoulders & Back",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60-90 sec" },
                            { name: "Seated Cable Row", sets: 3, reps: "10-12", rest: "60-90 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower Body",
                        focus: "Glutes, Quads & Hamstrings",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 2, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Standing Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper Body (Arms + Volume)",
                        focus: "Arms + Delts",
                        exercises: [
                            { name: "Barbell Curl", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "15", rest: "60 sec" },
                            { name: "Face Pull", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    }
                ],
                4: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Chest & Shoulders",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Quads & Glutes",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Leg Press", sets: 3, reps: "12", rest: "90 sec" },
                            { name: "Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Back & Arms",
                        exercises: [
                            { name: "Seated Cable Row", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Barbell Curl", sets: 2, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 2, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Hamstrings & Core",
                        exercises: [
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Leg Curl", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    }
                ],
                5: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Chest & Shoulders",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Glutes & Quads",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 2, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Standing Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Back & Arms",
                        exercises: [
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Seated Cable Row", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Barbell Curl", sets: 2, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 2, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Hamstrings + Core",
                        exercises: [
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Leg Curl", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    },
                    {
                        day: "Day 5 - Upper C",
                        focus: "Volume + Arms",
                        exercises: [
                            { name: "Face Pull", sets: 3, reps: "15", rest: "60 sec" },
                            { name: "Triceps Dips", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "EZ Bar Curl", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    }
                ]
            },
            intermediate: {
                3: [
                    {
                        day: "Day 1 - Upper Body",
                        focus: "Strength Push + Pull",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Barbell Row", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Overhead Press", sets: 3, reps: "8", rest: "60-90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "10", rest: "60-90 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower Body",
                        focus: "Strength + Volume",
                        exercises: [
                            { name: "Back Squat", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Leg Press", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Standing Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper Accessory",
                        focus: "Volume + Arms",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "Seated Cable Row", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "EZ Bar Curl", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    }
                ],
                4: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Strength + Chest",
                        exercises: [
                            { name: "Incline Barbell Press", sets: 4, reps: "6-8", rest: "90-120 sec" },
                            { name: "Pull-Ups", sets: 4, reps: "8-10", rest: "90-120 sec" },
                            { name: "Overhead Press", sets: 3, reps: "8-10", rest: "60-90 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Glutes + Hamstrings",
                        exercises: [
                            { name: "Romanian Deadlift", sets: 4, reps: "8-10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Seated Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Back + Arms",
                        exercises: [
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Barbell Row", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "EZ Bar Curl", sets: 2, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 2, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Quads + Core",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Leg Extension", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    }
                ],
                5: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Chest & Shoulders",
                        exercises: [
                            { name: "Incline Barbell Press", sets: 4, reps: "8", rest: "90-120 sec" },
                            { name: "Overhead Press", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Lateral Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Glutes & Hamstrings",
                        exercises: [
                            { name: "Romanian Deadlift", sets: 4, reps: "10", rest: "90 sec" },
                            { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "60-90 sec" },
                            { name: "Standing Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Back + Arms",
                        exercises: [
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Barbell Row", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "EZ Bar Curl", sets: 2, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 2, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Quads + Core",
                        exercises: [
                            { name: "Back Squat", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Leg Extension", sets: 3, reps: "12", rest: "60-90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "30-60 sec" }
                        ]
                    },
                    {
                        day: "Day 5 - Upper C",
                        focus: "Arms + Volume",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "60-90 sec" },
                            { name: "EZ Bar Curl", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Triceps Dips", sets: 3, reps: "10", rest: "60-90 sec" }
                        ]
                    }
                ]
            }
        },
        gainStrength: {
            beginner: {
                3: [
                    {
                        day: "Day 1 - Upper Body Strength",
                        focus: "Push + Pull",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 4, reps: "5", rest: "2-3 min" },
                            { name: "Barbell Row", sets: 4, reps: "5", rest: "2-3 min" },
                            { name: "Overhead Press", sets: 3, reps: "6", rest: "90-120 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower Body Strength",
                        focus: "Squat + Pull",
                        exercises: [
                            { name: "Back Squat", sets: 4, reps: "5", rest: "2-3 min" },
                            { name: "Deadlift", sets: 3, reps: "5", rest: "3 min" },
                            { name: "Standing Calf Raise", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Full Body",
                        focus: "Moderate Volume",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "8", rest: "90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" }
                        ]
                    }
                ],
                4: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Push Strength",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 4, reps: "5", rest: "2-3 min" },
                            { name: "Overhead Press", sets: 3, reps: "6", rest: "90 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "10", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Squat Focus",
                        exercises: [
                            { name: "Back Squat", sets: 4, reps: "5", rest: "2-3 min" },
                            { name: "Lunges", sets: 3, reps: "10 each leg", rest: "90 sec" },
                            { name: "Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Pull Strength",
                        exercises: [
                            { name: "Barbell Row", sets: 4, reps: "5", rest: "2-3 min" },
                            { name: "Lat Pulldown", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Barbell Curl", sets: 3, reps: "10", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Posterior Chain",
                        exercises: [
                            { name: "Deadlift", sets: 3, reps: "5", rest: "3 min" },
                            { name: "Romanian Deadlift", sets: 3, reps: "8", rest: "90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "60 sec" }
                        ]
                    }
                ],
                5: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Push Heavy",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 4, reps: "5", rest: "2-3 min" },
                            { name: "Overhead Press", sets: 3, reps: "6", rest: "90 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Squat Focus",
                        exercises: [
                            { name: "Back Squat", sets: 4, reps: "5", rest: "2-3 min" },
                            { name: "Walking Lunges", sets: 3, reps: "10 each leg", rest: "90 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Pull Heavy",
                        exercises: [
                            { name: "Barbell Row", sets: 4, reps: "5", rest: "2-3 min" },
                            { name: "Lat Pulldown", sets: 3, reps: "10", rest: "90 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Posterior Chain",
                        exercises: [
                            { name: "Deadlift", sets: 3, reps: "5", rest: "3 min" },
                            { name: "Romanian Deadlift", sets: 3, reps: "8", rest: "90 sec" }
                        ]
                    },
                    {
                        day: "Day 5 - Upper C",
                        focus: "Volume + Arms",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Barbell Curl", sets: 3, reps: "10", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "10", rest: "60 sec" }
                        ]
                    }
                ]
            },
            intermediate: {
                3: [
                    {
                        day: "Day 1 - Upper Strength",
                        focus: "Push + Pull Heavy",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 5, reps: "4-6", rest: "2-3 min" },
                            { name: "Barbell Row", sets: 5, reps: "4-6", rest: "2-3 min" },
                            { name: "Overhead Press", sets: 3, reps: "6-8", rest: "90 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower Strength",
                        focus: "Squat + Deadlift",
                        exercises: [
                            { name: "Back Squat", sets: 5, reps: "4-6", rest: "2-3 min" },
                            { name: "Deadlift", sets: 4, reps: "4-6", rest: "3 min" },
                            { name: "Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper Volume",
                        focus: "Arms + Assistance",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Lat Pulldown", sets: 3, reps: "12", rest: "90 sec" },
                            { name: "EZ Bar Curl", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    }
                ],
                4: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Push Strength",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 5, reps: "4-6", rest: "2-3 min" },
                            { name: "Overhead Press", sets: 3, reps: "6-8", rest: "90 sec" },
                            { name: "Triceps Dips", sets: 3, reps: "10", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Squat Focus",
                        exercises: [
                            { name: "Back Squat", sets: 5, reps: "4-6", rest: "2-3 min" },
                            { name: "Lunges", sets: 3, reps: "10 each leg", rest: "90 sec" },
                            { name: "Calf Raise", sets: 3, reps: "15", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Pull Strength",
                        exercises: [
                            { name: "Barbell Row", sets: 5, reps: "4-6", rest: "2-3 min" },
                            { name: "Lat Pulldown", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Barbell Curl", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Posterior Chain",
                        exercises: [
                            { name: "Deadlift", sets: 4, reps: "4-6", rest: "3 min" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Crunches", sets: 3, reps: "20", rest: "60 sec" }
                        ]
                    }
                ],
                5: [
                    {
                        day: "Day 1 - Upper A",
                        focus: "Push Heavy",
                        exercises: [
                            { name: "Barbell Bench Press", sets: 5, reps: "4-6", rest: "2-3 min" },
                            { name: "Overhead Press", sets: 3, reps: "6-8", rest: "90 sec" }
                        ]
                    },
                    {
                        day: "Day 2 - Lower A",
                        focus: "Squat Focus",
                        exercises: [
                            { name: "Back Squat", sets: 5, reps: "4-6", rest: "2-3 min" },
                            { name: "Walking Lunges", sets: 3, reps: "10 each leg", rest: "90 sec" }
                        ]
                    },
                    {
                        day: "Day 3 - Upper B",
                        focus: "Pull Heavy",
                        exercises: [
                            { name: "Barbell Row", sets: 5, reps: "4-6", rest: "2-3 min" },
                            { name: "Lat Pulldown", sets: 3, reps: "10", rest: "90 sec" }
                        ]
                    },
                    {
                        day: "Day 4 - Lower B",
                        focus: "Posterior Chain",
                        exercises: [
                            { name: "Deadlift", sets: 4, reps: "4-6", rest: "3 min" },
                            { name: "Romanian Deadlift", sets: 3, reps: "10", rest: "90 sec" }
                        ]
                    },
                    {
                        day: "Day 5 - Upper C",
                        focus: "Volume + Arms",
                        exercises: [
                            { name: "Incline Dumbbell Press", sets: 3, reps: "10", rest: "90 sec" },
                            { name: "Barbell Curl", sets: 3, reps: "12", rest: "60 sec" },
                            { name: "Triceps Pushdown", sets: 3, reps: "12", rest: "60 sec" }
                        ]
                    }
                ]
            }
        }
    }
};

export default upperLowerSplitData;