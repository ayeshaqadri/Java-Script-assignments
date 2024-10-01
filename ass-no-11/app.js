// Question-No-1
// var userFirstName = prompt("Kindly ! Enter your first name")
// var userLastName = prompt("Kindly ! Enter your last name")
// var userFullName =(userFirstName + userLastName)
// alert = prompt("hello! " + userFullName)

// Question-No-2
// var userFavoraiteMobiles = prompt("Tell us your favoraite mobile phone")
// var lengths = userFavoraiteMobiles.length
// var result = alert("My favourite phone is " + userFavoraiteMobiles  +" Length of string " + lengths)

// Question-No-3
// var city = "Pakistan"
// var  length = city.indexOf("n")
// var result = alert("String : PAKISTAN " + " Index of 'n' :" +  length)

// Question-No-4
// var cityName = "HELLO WORLD" 
// var length = cityName.indexOf("L")
// var result = alert("String : HELLO WORLD " + " Last Index of 'L' :" +  length)

// Question-No-5
// var city = "Pakistan"
// var  length = city.charAt("3")
// var result = alert("String : PAKISTAN " + " Index of '3' : " +  length)

// Question-No-6
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var userFullName = firstName.concat(" ",lastName)
// alert("HELLO ! " + userFullName + " ...")

// Question-No-7
// var city = "hyderabad"
// var newCity = city.replace("hyder","Islamabad")
// console.log(city)
// document.write  ("City: " + city + "<br /> "+ "After replacement: " + newCity)

// Question-No-8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMess = message.replace(/and/g , "&")
// document.write(newMess)

// Question-No-9
// var valueStr = "472"
// var typeStr = typeof (valueStr)
// document.write("value " + valueStr + "<br />" + "Type:" + typeStr + "<br />")
// var valueStr = 472
// var typeStr = typeof (valueStr)
// document.write("value " + valueStr + "<br />" + "Type:" + typeStr)

// question 10
// var user = prompt("enter somthing in small letters i will convert them into Capital letters");
// var inCapi = user.toUpperCase()
// alert(inCapi);

// question 11
// var num = 35.36
// var numStri = num.toString()
// var rep = numStri.replace("." ,"")
// document.write("Number: "+ num + "<br />" + "Result:" + rep)

// question 12
// var userName = prompt("Enter user name")
// var hasSpecialSymbol = false;
// for (var i = 0; i < userName.length; i++) {
//     var char = userName[i]

//     if (char === "@" || char === "." || char === "," || char === "!") {
//         hasSpecialSymbol=true;
//         break;
//     }

// }
// if (hasSpecialSymbol) {
//     alert("Please enter a valid username without special symbols like @, ., ,, !");
// } else {
//     alert("Username accepted: " + userName);
// }

// // question 13
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search");
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     var avail = A[i].toLocaleLowerCase();
//  if (avail === userInput) {
//     found = true;
//     break;    
//  }    
// }
// if (found) {
//     alert("Yes, '" + A.indexOf(userInput) + "' is found in the list.");
// } else {
//     alert("No, '" + userInput + "' is not found in the list.");
// }

// question 16
// // var university = "University of Karachi";
// // var inArr = university.split(" ") 
// // console.log(inArr);
// // for (var i = 0; i < inArr.length; i++) {
// //     document.write(inArr[i] + "<br>");
// }

// question 17
// var user = prompt("enter the sentence ")
// if (user.length > 0) {
//     var lastchar = user.charAt(user.length - 1)
    
//     alert("The last character is " + lastchar)

// }
// else{alert("please enter a valid sentence")}
// question 18
// var str = "The quick brown fox jumps over the  lazy dog"
// var cnvrt = str.toLowerCase().split(" ").filter(word => word  === "the").length
// console.log(cnvrt);
