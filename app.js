// console.log("hello world");

// var fruit = ["apple" , "banana" , "grapes" , "watermelon" , "melon"]
// console.log(fruit);
// console.log(fruit[2]);

// length 1
// index 0

//push
//pop
//unshift
//shift
//splice
//slice
//split
//join
//concat
//sort
//reverse
//indexof
//includes
// nested array

// method / function

// console.log();
// alert()

// var fruit = ["apple", "banana", "grapes", "watermelon", "melon", "mango", "orange", "kiwi", "pineapple", "strawberry", "papaya", "cherry", "blueberry", "guava"];

// console.log(fruit);
// console.log(fruit.includes("kiwi"));

// if(fruit.includes("kiwi")){
    
// }

// console.log(fruit.indexOf("kiwis"));

// if(fruit.indexOf("kiwi") != -1)





// console.log(fruit.sort());

// console.log(fruit.join(" "));

// fruit.push("mango")
// fruit.pop()
// fruit.unshift("strawberry")
// fruit.shift()
// fruit.splice(9 , 2 , "updated")
// fruit.splice(12 , 1)
// fruit.splice(9 , 0 , "updated")

// fruit.splice(startingindex , delete item , add item)
// fruit.splice(2 , 2 , "mango" , "peach" , "kiwi")

// var newArr = fruit.slice(1 , 5)
// console.log(newArr);

// console.log(fruit);

// split string ko array ma convert krta ha

// var username = "Muhammad Abdullah khan"
// console.log(username.split(" "));

// reverse string

// var city = "karachi"
// console.log(city.split("").reverse().join(""));

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];


// var newArr = arr2.concat(arr1)
// console.log(newArr);





// var nestedArr = ["abdullah" , "usman" , ["ammar" , ["affan" , ["uzair"]]]]
// nestedArr[2][1][1].splice(0 , 1, "changed")
// console.log(nestedArr);





// palindrome

// input bananaa "civic" "radar" 
// button pa click kraiga
// neecha print hojayge k ya palindrome haa ya nahi haa.


// var input = document.querySelector("#input");
// var result = document.querySelector("#result");

// function checkPalindrome(){
//     console.log("user input ==>" , input.value);
//     var reverseStr = input.value.split("").reverse().join("")
//     console.log("reverse input ==>" , reverseStr);
//     if(reverseStr === input.value){
//         console.log("palindrome haa");
//         result.innerHTML = input.value + " is palindrome"
        
//     }else{
//         console.log("nah haa");
//         result.innerHTML = input.value + " is not palindrome"
        
//     }
    
    
// }

















// JavaScript Array Assignments
// Q.1. Create an array of 3 student names and add one more using push().



//Ans


var h4 = ["Abdullah", "Slam", "Hamza"];
console.log(h4);
h4.push("Saif Ur Rehman", "M.Ibrahim", "M.Nassem");
document.getElementById("output").innerHTML = h4.join(", ") + " - It is a Web Developer.";
























// Q.2. Remove the last item from an array of fruits using pop().

//Ans
var fruit = ["apple", "banana", "grapes", "watermelon", "melon", "mango", "orange","blueberry", "guava"];
fruit.pop("")
console.log(fruit)






















// Q.3. Add "Monday" to the beginning of a days array using unshift().

// Ans
var days = ["tuesday", "widnesday", "thursday", "friday", "sturday", "sunday"];
days.unshift("Monday")
console.log(days)





















// Q.4. Remove the first item from an array of colors using shift().

//Ans
var colors = ["Red", "Green", "Blue", "Yellow"];
colors.shift();
console.log(colors);


















// Q.5. Use splice() to insert "Math" and "Science" at
//  index 2 of a subjects array.

//Ans
let subjects = ["English", "Urdu"]
subjects.splice(2, 0, "Math", "Science")
console.log(subjects)
















// Q.6. Use splice() to remove 2 elements starting from index 1 of a cities array.

//Ans
let cities = ["Islamabad", "Lahor", "Krachi"]
cities.splice(1, 2, "Quetta", "Pashawar")
console.log(cities)


















// 7. Use slice() to get the first 3 items from a countries array.

let countries =["Israel", "Pakistan", "Palistin", "india"];
let slicedCoun = countries.slice(1, 3)
console.log(slicedCoun)









 












// Q.8. Convert the string "apple,banana,mango" into an array using split().

//Ans
let fruits = "apple,banana,mango";
let arr = fruits.split(" ");  
console.log(arr);

























// Q.9. Join an array of characters ['J','S'] into a single string using join().

//Ans
var JavaScript = ["j", "s"]
var js = JavaScript.join("");
console.log(js)

















// Q.10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using concat().

//ans
var nam1 = ["Abdullah", "Slam", "Hamza"];
var nam2 = ["Saif Ur Rehman", "M.Ibrahim", "M.Nassem"];
var all = nam1.concat(nam2)
console.log(all)























// Q.11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).
//Ans
var number = [10, 5, 2, 8];
number.sort();
console.log(number);



















// Q.12. Sort an array of names alphabetically using sort().

//Ans
var num1 = ["z, w, y, q, c, b, a"];
num1.sort();
console.log(num1);

























// Q.13. Reverse the order of an array of numbers using reverse().

//Ans

var numbers = [1, 2, 3, 4, 5];
var num2 = numbers.reverse();
console.log(num2);


















// 14. Use indexOf() to find the index of "Blue" in a colors array.

//Ans
let colors1 = ["Red", "Green", "Blue", "Yellow"];
let index = colors1.indexOf("Blue");

console.log(index); 





















// Q.15. Add three new items to an empty array using push().
//Ans

let items = [];
items.push("1", "2", "3");

console.log(items); 























// 16. Remove the middle item from an array of 5 numbers using splice().

//Ans

let numbers1 = [11, 22, 33, 44, 55];
numbers1.splice(2, 1);

console.log(numbers1);























// Q.17. Create a string "HTML CSS JavaScript" and convert it to an array using split().

// Ans


let str = "HTML CSS JavaScript";
let array = str.split(" ");

console.log(array); 




















// Q.18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.

//Ans
let abc = ['a', 'b', 'c'];
let result = abc.reverse().join("-");

console.log(result);
























// Q.19. Check if "Karachi" exists in an array using indexOf() and show its index.

//Ans
let cit = ["Lahore", "Karachi", "Peshawar"];
let ind = cities.indexOf("Karachi");

console.log(ind); 
























// Q.20. Concatenate two arrays of even and odd numbers using concat() and then reverse them.


//Ans

let even = [2, 4, 6];
let odd = [1, 3, 5];
let combined = even.concat(odd).reverse();

console.log(combined); 
















