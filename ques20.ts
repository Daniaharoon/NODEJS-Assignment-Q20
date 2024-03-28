import { Console } from "console";

//// //  20 .Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let languages:string[] = ["Typescript", "Python", "Javascript", "C++"];
console.log("List of languages:");
languages.map((item) =>{
    console.log(`${item}`);
});


