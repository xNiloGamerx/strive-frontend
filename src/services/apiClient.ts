import { Exercise, Template, User } from "@/libs/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const users = [
  {
    id: "1",
    name: "Niklas",
    gender: "Mann",
    weightClass: "50kg",
  },
  {
    id: "2",
    name: "Laurence",
    gender: "Mann",
    weightClass: "50kg",
  },
  {
    id: "3",
    name: "Jan",
    gender: "Mann",
    weightClass: "30kg",
  },
  {
    id: "4",
    name: "Jakob",
    gender: "Mann",
    weightClass: "50kg",
  },
  {
    id: "5",
    name: "Nils",
    gender: "Mann",
    weightClass: "30kg",
  },
];

const exercises = [
  {
    id: 1,
    name: "Around the World",
    category: "Hantel",
  },
  {
    id: 2,
    name: "Back Extension",
    category: "Körpergewicht",
  },
  {
    id: 3,
    name: "Ball Slams",
    category: "Maschine/Andere",
  },
  {
    id: 4,
    name: "Battle Ropes",
    category: "Cardio",
  },
  {
    id: 5,
    name: "Bicep Curl",
    category: "Hantel",
  },
];

const templates: Template[] = [
  {
    id: 1,
    name: "Nachmittags-Workout",
    description: "Workout für den Nachmittag",
    exercises: [exercises[1], exercises[3], exercises[4]],
  },
  {
    id: 2,
    name: "Morgens-Workout",
    description: "Workout für den Morgen",
    exercises: [exercises[2], exercises[4]],
  },
  {
    id: 3,
    name: "Home-Workout",
    description: "Workout für zu Hause",
    exercises: [exercises[1], exercises[3], exercises[4]],
  },
  {
    id: 4,
    name: "Arbeits-Workout",
    description: "Workout für nach der Arbeit",
    exercises: [exercises[0], exercises[3], exercises[4]],
  },
  {
    id: 5,
    name: "Hantel-Workout",
    description: "Workout nur mit Hanteln",
    exercises: [exercises[0], exercises[4]],
  },
  {
    id: 6,
    name: "Full-Workout",
    description: "Workout mit allen Übungen",
    exercises: [
      exercises[0],
      exercises[1],
      exercises[2],
      exercises[3],
      exercises[4],
    ],
  },
  {
    id: 7,
    name: "Bizeps",
    description: "Workout nur für Bizeps",
    exercises: [exercises[2], exercises[3]],
  },
  {
    id: 8,
    name: "Beine",
    description: "Workout nur für Beine",
    exercises: [exercises[0], exercises[4]],
  },
];

const workouts = [
  {
    id: 0,
    user: users[0],
    template: templates[2],
    startTime: "2025-06-17 07:00:00",
    endTime: "2025-06-17 08:00:00",
    exercises: [
      {
        exercise: templates[2].exercises[0],
        sets: [
          {
            id: 0,
            weight: 100,
            reps: 5,
          },
          {
            id: 1,
            weight: 200,
            reps: 10,
          },
        ],
      },
      {
        exercise: templates[2].exercises[1],
        sets: [
          {
            id: 0,
            weight: 50,
            reps: 5,
          },
        ],
      },
      {
        exercise: templates[2].exercises[2],
        sets: [
          {
            id: 0,
            weight: 35,
            reps: 5,
          },
          {
            id: 1,
            weight: 35,
            reps: 5,
          },
          {
            id: 2,
            weight: 50,
            reps: 5,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    user: users[0],
    template: templates[4],
    startTime: "2025-06-18 07:00:00",
    endTime: "2025-06-18 08:00:00",
    exercises: [
      {
        exercise: templates[4].exercises[0],
        sets: [
          {
            id: 0,
            weight: 10,
            reps: 5,
          },
          {
            id: 1,
            weight: 20,
            reps: 10,
          },
        ],
      },
      {
        exercise: templates[4].exercises[1],
        sets: [
          {
            id: 0,
            weight: 35,
            reps: 5,
          },
        ],
      },
    ],
  },
];

export const apiClient = {
  get: async <T>(url: string): Promise<T> => {
    if (url === "/users") {
      return users;
    } else if (url === "/templates") {
      return templates;
    } else if (url === "/exercises") {
      return exercises;
    } else if (url === "/workouts") {
      return workouts;
    } else {
      return users;
    }

    // const res = await fetch(`${BASE_URL}${url}`);
    // if (!res.ok) throw new Error("API Error");
    // return res.json();
  },

  post: async (url: string, body: any) => {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: { "Content-Type": "aaplication/json" },
      body: JSON.stringify(body),
    });
    return res.json();
  },
};
