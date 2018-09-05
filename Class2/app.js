function sayHello () {
    console.log("Hello");
}
sayHello();

//Return a value
function sayHola() {
    return "Hola silly" //returns a string Hola silly
}
let message = sayHola(); // assigns variable to whatever sayHola function is returning
console.log(message); // outputs variable message, therefore returning whatever sayHola returned

//continued
function sayHola() {
    let hi = "Hola silly" //returns a string Hola silly (declaring var with let makes it LOCAL!)
    return hi;
}
let message1 = sayHola(); // assigns variable to whatever sayHola function is returning
console.log(message1);

//More

function howzit() {
    let hi = "howzit";
    return hi;
    console.log("I will not print")
}
console.log(howzit());

//more

function sayAloha(name) {
   const message2 = `Aloha, ${name}!`; // way to concat
    return message2;
}
let name = "Lilo";
console.log(name);
console.log(sayAloha(name));
console.log(sayAloha("Stitch"));