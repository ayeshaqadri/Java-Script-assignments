// Question-No-1
// var studentName = {}

// Question-No-2
// var studentName = new Array()

// Question-No-3
// var studentNames = ["ayesha","sadia","sara"]

// Question-No-4
// var numbers = [5,5,2,0,2,4]

// Question-No-5
// var booleanValues = [true, false, true, false, true];

// Question-No-6
// var mixedValues = [5,"munawar",true,5.5,null]

// Question-No-7
// var qualificationInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil."]
// document.write("<h1>" + "Available qualifications in pakistan " + "</h1>" + "<br />")
// document.write(qualificationInPakistan[0] + "<br />", qualificationInPakistan[1] + "<br />", qualificationInPakistan[2] + "<br />", qualificationInPakistan[3] + "<br />", qualificationInPakistan[4] + "<br />", qualificationInPakistan[5] + "<br />", qualificationInPakistan[6] + "<br />",)

// Question-No-8
// var studentsName = ["Khizer","Ali","Abdullah"]
// var totalNum = 500
// var studentsNum = [490,300,410]
// document.write("<h1>" + "Students percentage" + "</h1>" + "<br />")
// document.write(studentsName[0] + " total number is " + studentsNum[0] + " and his percentage is " + studentsNum[0]/ totalNum * 100 + "<br />");
// document.write(studentsName[1] + " total number is " + studentsNum[1] + " and his percentage is " + studentsNum[1]/ totalNum * 100 + "<br />");
// document.write(studentsName[2] + " total number is " + studentsNum[2] + " and his percentage is " + studentsNum[2]/ totalNum * 100 + "<br />");

// Question-No-9
// var colors = ["Red", "Green", "Blue", "Yellow", "Orange"];
// document.write("<b>Initial Array:</b> " + colors.join(", ") + "<br>");

// // Step 2a: Ask the user what color to add to the beginning and add it
// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);
// document.write("<b>After adding color to the beginning:</b> " + colors.join(", ") + "<br>");

// // Step 2b: Ask the user what color to add to the end and add it
// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);
// document.write("<b>After adding color to the end:</b> " + colors.join(", ") + "<br>");

// // Step 2c: Add two more colors to the beginning
// colors.unshift("Purple", "Pink");
// document.write("<b>After adding two more colors to the beginning:</b> " + colors.join(", ") + "<br>");

// // Step 2d: Delete the first color in the array
// colors.shift();
// document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br>");

// // Step 2e: Delete the last color in the array
// colors.pop();
// document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br>");

// // Step 2f: Ask the user at which index to add a color and add it
// var indexToAdd = prompt("Enter the index where you want to add a color:");
// var colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br>");

// Question-No-10
// var studentScore =[500,461,252,134]
// document.write("<h1>" + "Students score" + "</h1>" + "<br />")
// document.write("Score of Students : " + studentScore  + "<br/>")
// document.write("Ordered Scores of Students : " + studentScore[3] + "," +studentScore[2]  + "," +studentScore[1]  + "," +studentScore[0] +"<br />");

// Question-No-11
// var cities = ["New York", "Seol", "Istambol", "Paris", "Karachi"];
// var selectedCities = [];
// selectedCities.push(cities[0], cities[1], cities[2]);
// document.write("Selected Cities:", selectedCities);

// Question-No-12
// var arr = ["This ", " is ", " my ", " cat"];
// document.write("Array :<br />"+arr+"<br />")
// document.write("String :<br />" + arr[0] + arr[1] + arr[2] + arr[3])


// Question-No-13
// var devices =["Keyboard","mouse","printer","moniter"]
// document.write("Devices :" + "<br />" + devices + "<br />"  + "<br />" )
// document.write("Out :" + "<br />"  + devices[0] + "<br />" + "Out :" + "<br />"  + devices[1] + "<br />" + "Out :" + "<br />"  + devices[2] + "<br />" + "Out :" + "<br />"  + devices[3] + "<br />")

// Question-No-14
//  var devices =["Keyboard","mouse","printer","moniter"]
// document.write("Devices :" + "<br />" + devices + "<br />"  + "<br />" )
// document.write("Out :" + "<br />"  + devices[3] + "<br />" + "Out :" + "<br />"  + devices[2] + "<br />" + "Out :" + "<br />"  + devices[1] + "<br />" + "Out :" + "<br />"  + devices[0] + "<br />")

// Question-No-15
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write('<select>');
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }
// document.write('</select>');
