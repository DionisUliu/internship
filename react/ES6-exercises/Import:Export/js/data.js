export default class userProfile {
  // the constructor
  constructor(name, gender, age) {
    this.name = name;
    this.surname = gender;
    this.age = age;
  }
}
// name printing function
export const printName = (userProfile) => {
  console.log(`The name of user is: ${userProfile.name}`);
};
// gender printing function
export const printGender = (userProfile) => {
  console.log(`The gender of user is: ${userProfile.gender}`);
};
// age printing function
export const printAge = (userProfile) => {
  console.log(`The age of user is: ${userProfile.age} years old`);
};
