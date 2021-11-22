let myArray = ["Apple Jacks", "Wendy's", "Stomach Ache"];


function listArray(){
    for(let i = 0; i<myArray.length; i++){
        console.log(myArray[i]);
    }
    console.log("The array is printed!");
}
listArray();


//Example Declaration
function foodPrice(count, price){
  console.log(count*price);
  return count*price;
}
console.log(foodPrice(5,4)); 

//Example Expression
const multiply = function(length, width){
  return length*width;
}
console.log(multiply(10, 5)); 

//Example Arrow Function
const orderAmount = (count, price) => `You ordered this many: ${count}. For this price: ${price}.`;
console.log(orderAmount(10,2)); 


function greetPerson(personToGreet){
    console.log(personToGreet);
}
greetPerson("Nick");
greetPerson("Kat");
greetPerson("Tiia");

//Prints any array with call to function and array x[]
let anotherArray = ["Cereal", "Bananas", "Yoda"];
function printArray(x){ 
    for(i = 0; i<x.length; i++){
        console.log(x[i]);
    }
}
printArray(anotherArray);


//Default parameter
const myFriends = (person1, person2 = "Jack") => `${person1} and ${person2} are my friends. `;
myFriends("Steve");

//Rest Parameter Examples:
//No Rest Paramenter
function addAnAmountOfNumbers(num1, num2){
    let total = 0;
    total = num1 + num2;
    return total;
}
console.log(addAnAmountOfNumbers(1,2,3,4,5)); //Returns 3

//Has Rest Parameter
function addAllNumbers(...numbers){
    return numbers.reduce((prev,next) => prev + next);
}
console.log(addAllNumbers(1,2,3,4,5,6));
console.log(addAllNumbers(1,2,3,4));





