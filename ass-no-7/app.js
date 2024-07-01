// Question-No-1
// var cityName = prompt("Write your city")
// if(cityName == "karachi"){
//     alert("Welcome to city of lights")
// }
// else{}

// Question-No-2
// var userGender = prompt("write your gender")
// if(userGender == "male"){alert("Good Morning Sir")
// }
// else{alert("Good Morning Ma’am.")
// }

// Question-No-3
// var first = prompt("Enter color of road traffic signal" +"No-1")
// var second = prompt("No-2")
// var third = prompt("No-3")
// var red = ("Must Stop")
// var yellow = ("Ready to move")
// var green = ("Move now")
// if (first == "red")
// {
// document.write("Red:" + red + "<br/>")
// }
// else if (second == "yellow"){ 
//     document.write("Yellow:" + yellow + "<br/>")
// }
// else (third == "green");{ 
//     document.write("Green:" + green + "<br/>")
// }

// Question-No-4
// var remainingFuel = prompt("Enter how many liters fuel is in your car right now")
// if (remainingFuel <= "0.25 liters"){
//     alert("Please refill the fuel in your car")
// }
// else{ "ok"}

// Question-No-5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if ("car" < "cat"){
// alert("car is smaller than cat");
// }

// Question-No-6
// var subMarks1 = +prompt("enter your 1st subject marks")
// var subMarks2 = +prompt("enter your 2nd subject marks")
// var subMarks3 = +prompt("enter your 3rd subject marks")
// var totalMarks = 300
// var userTotalMarks = subMarks1 + subMarks2 + subMarks3
// var percentage = userTotalMarks/totalMarks*100
// if (percentage >= 80){
//     document.write("<h2>Result<h2/>" + "<br/>")
//     document.write("Total marks:" + totalMarks + "<br/>")
//     document.write("Marks obtained:" + userTotalMarks + "<br/>")
//     document.write(percentage +  "<br/>")
//     document.write("Grade:A-one" + "<br/>")
//     document.write("Remarks:Exellent" + "<br/>")

//  }
//  else if (percentage >= 70){
//     document.write("<h2>Result<h2/>" + "<br/>")
//     document.write("Total marks:" + totalMarks + "<br/>")
//     document.write("Marks obtained:" + userTotalMarks + "<br/>")
//     document.write(percentage + "<br/>")
//     document.write("Grade:A" + "<br/>")
//     document.write("Remarks:Good" + "<br/>")
//  }
//  else if (percentage >= 60){
//     document.write("<h2>Result<h2/>" + "<br/>")
//     document.write("Total marks:" + totalMarks + "<br/>")
//     document.write("Marks obtained:" + userTotalMarks + "<br/>")
//     document.write(percentage + "<br/>")
//     document.write("Grade:B" + "<br/>")
//     document.write("Remarks:You need to improve" + "<br/>")
//  }
//  else (percentage <= 60) ;{
//     document.write("<h2>Result<h2/>" + "<br/>")
//     document.write("Total marks:" + totalMarks + "<br/>")
//     document.write("Marks obtained:" + userTotalMarks + "<br/>")
//     document.write(percentage + "<br/>")
//     document.write("Grade:Fail" + "<br/>")
//     document.write("Remarks:Sorry" + "<br/>")
//  }

// Question-No-7
// var secretVariable = 5
// var userWelcome = ("Welcome to my game")
// var userNumber = +prompt("Guess any number from 1 to 10")
// if (userNumber == "secretVariable"){document.write("Congradulation! you guess the number right")}
//  else  {document.write("Sorry you guess the number wrong")}

// Question-No-8
// var userNum = +prompt("Enter your number")
// if (userNum % 3 == 0){
//     alert(" The " + userNum + " is divisible by 3. ")
// }

// Question-No-9
// var userNum = +prompt("Enter any number")
// if(userNum % 2 === 0){
//     alert("The number " + userNum + " is even")
// }
// else{
//     alert("The number " + userNum + " is odd")
// }

// Question-No-10
//  var userTemperature = +prompt("Enter todays temperature")
// if (userTemperature >= 40){
//     document.write("It is too hot outside." + "<br/>")
// }
// else if (userTemperature >= 30){
//     document.write("The Weather today is Normal." + "<br/>")
// }
// else if (userTemperature >= 20){
//     document.write("Today’s Weather is cool." + "<br/>")
// }
// else (userTemperature <= 10);{
//     document.write("OMG! Today’s weather is so Cool." + "<br/>")
// }

// Question-No-11
// var userNum1 = +prompt("Enter 1st number");
// var operation = prompt("Enter the operation you want to do", "+ - * / %");
// var userNum2 = +prompt("Enter 2nd number");

// var result;
// if (operation === "+") {
//     result = userNum1 + userNum2
// }
// else if (operation === "-") {
//     result = userNum1 + userNum2
// }
// else if (operation === "*") {
//     result = userNum1 + userNum2
// }
// else if (operation === "/") {
//     result = userNum1 + userNum2
// }
// else if (operation === "%") {
//     result = userNum1 + userNum2
// }
// if (userNum2 !== 0) {
//     result = userNum1 / userNum2;
// } else {
//     alert("Division by zero is not allowed.");
//     result = "undefined"
// }
//      } else if (operation === "%") {
//     if (userNum2 !== 0) {
//         result = userNum1 % userNum2;
//     } else {
//         alert("Division by zero is not allowed.");
//         result = "undefined";
//     }
// } else {
//     alert("Invalid operation.");
//     result = "undefined";
// }

// if (result !== "undefined") {
//     alert("The result of " + userNum1 + " " + operation + " " + userNum2 + " is: " + result);
// }