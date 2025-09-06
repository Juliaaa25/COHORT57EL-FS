"use strict";
// Примеры
const robot1 = {
    model: "XR-12",
};
const astronaut1 = {
    isInSpace: true,
    experienceYears: 8,
    assistantRobot: robot1,
    missions: ["Moon Landing", "ISS Maintenance"],
};
const astronaut2 = {
    isInSpace: false,
    experienceYears: 3,
    assistantRobot: { model: "T-800" },
    missions: ["Training Program", "Mars Simulation"],
};
console.log("🚀 Astronauts in DB:");
console.log(astronaut1);
console.log(astronaut2);
