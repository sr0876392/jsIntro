const hello = function(name){ // assigning variable to a function (it is an anonymous funct(doesn't have a name))
    const message = `Hello, ${name}!`;
    return message;
};

console.log(hello("Dory"));

// fat arrow functions 
const aloha = (name) => {
    console.log(name);
}
aloha ("Nemo"); // assigns value for const

//****************************Different from that was all before */

const something = name1 => `Howzit, ${name1}!`;
console.log(something("Nani")); //Howzit Nany

console.log(Math.min(4.5, 5)); // min from given (4.5)
console.log(Math.pow(6,2));  // 6^2
console.log(Math.ceil(Math.random() * 3));