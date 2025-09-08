type Robot = {
  model: string;
};

type Mission =
  | "Moon Landing"
  | "ISS Maintenance"
  | "Training Program"
  | "Mars Simulation";

type Astronaut = {
  isInSpace: boolean;
  experienceYears: number;
  assistantRobot: Robot;
  missions: Mission[];
};

const robot1: Robot = { model: "XR-12" };
const robot2: Robot = { model: "T-800" };

const astronaut1: Astronaut = {
  isInSpace: true,
  experienceYears: 8,
  assistantRobot: robot1,
  missions: ["Moon Landing", "ISS Maintenance"],
};

const astronaut2: Astronaut = {
  isInSpace: false,
  experienceYears: 3,
  assistantRobot: robot2,
  missions: ["Training Program", "Mars Simulation"],
};

console.log("Astronauts in DB:");
console.log(astronaut1);
console.log(astronaut2);
