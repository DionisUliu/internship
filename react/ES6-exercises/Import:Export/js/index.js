import userProfile, { printAge, printName, printGender } from "./data.js";
// userProfile object
const user = new userProfile("Dionis", "Male", 22);
// output of the object
console.log(user);
// output of the functions
printName(user);
printGender(user);
printAge(user);
