const person = {
    name: "Aditya",
    age: 24,
    city: "Pune"
}

//without destructuring
console.log(person.name); // Aditya
console.log(person.age); // 24
console.log(person.city); // Pune

console.log("-------------");

//with destructuring
const { name, age, city } = person;

console.log(name); // Aditya
console.log(age); // 24
console.log(city); // Pune