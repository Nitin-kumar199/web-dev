import generateName from "sillyname";
import superheroes from "superheroes";
const sillyname = generateName();
const superHero = superheroes.random();

console.log(`My name is ${sillyname}.`);
console.log(`I am ${superHero}.`);
