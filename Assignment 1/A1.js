/********************************************************************************* 
			*  BTI225 – Assignment 1  
			*  I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
	 		*  No part of this assignment has been copied manually or electronically from any other source   
			*  (including web sites) or distributed to other students.  
			*  Name: Priya Khatri Student ID: 110149176 Date: 1/25/2019 
	 		********************************************************************************/ 


//Task1
console.log("Task1");

var studentName = "Priya Khatri";
var numberOfCourses = "4";
var program = "BSD";
var ptJobYn = true;

console.log("My name is "+ studentName + " and I'm in " + program + " program. I'm taking " + numberOfCourses + " course in this semester.");

if(ptJobYn) ptJobYn="have";
else ptJobYn = "don't have";

console.log("My name is "+ studentName + " and I'm in " + program + " program. I'm taking " + numberOfCourses + " course in this semeste and I " + ptJobYn +" a part-time job now.");

//Task2
console.log("Task2");

var year = 2019;
var age = prompt("Please enter your age:");
var birthYear = year-age;
var studyYear;

console.log("You were born in the year of "+birthYear);

studyYear = prompt("Enter the number of years you expect to study in the college:");

console.log("You will graduate from Seneca college in the year of "+(parseInt(year)+parseInt(studyYear)-1));

//Task3
console.log("Task3");

var Ctemp = -5;
var Ftemp = Ctemp * 9/5 + 32;

console.log(Ctemp+"°C is "+Ftemp +"°F");

Ftemp = 50;
Ctemp = (Ftemp-32)*5/9;

console.log(Ftemp+"°F is "+Ctemp +"°C");

//Task4
console.log("Task4");

for(var i=0;i<=10;i++){
  if(i%2==0) console.log(i+" is even");
  else console.log(i+" is odd");
}

//Task5
console.log("\n\nTask5\n");

function largerNum(num1, num2){
  if(num1>num2) return num1;
  else return num2;
}
var greaterN = function greaterNum(num1, num2){
  if(num1>num2) return num1;
  else return num2;
}

var num1=5;
var num2=7;  
console.log("The larger number of "+num1+" and "+num2+" is "+largerNum(num1,num2));
num1=14;
num2=9;
console.log("The larger number of "+num1+" and "+num2+" is "+largerNum(num1,num2));
num1=1;
num2=3;
console.log("The greater number of "+num1+" and "+num2+" is "+greaterN(num1,num2));
num1=11;
num2=6;
console.log("The greater number of "+num1+" and "+num2+" is "+greaterN(num1,num2));

//Task6
console.log("\n\nTask6\n");
function Evaluator(...scores){
  var avg=0;
  var returnV;
  for(var i=0; i<scores.length; i++){
    avg+=scores[i];
  }
  if(avg/scores.length<50) return false;
  else return true;
}

console.log("Average greater than or equal to 50: "+Evaluator(60,70,80));
console.log("Average greater than or equal to 50: "+Evaluator(30,50,40));
console.log("Average greater than or equal to 50: "+Evaluator(45,50,55));

//Task7
console.log("\n\nTask7\n");
var score;
var grade=function(score){
  if(score>=80) return "A";
  else if(score>=70) return "B";
  else if(score>=60) return "C";
  else if(score>=50) return "D";
  else return "F";
  }
score = 90;
console.log("score: "+score+"/ grade: "+grade(score));
score = 70;
console.log("score: "+score+"/ grade: "+grade(score));
score = 40;
console.log("score: "+score+"/ grade: "+grade(score));

//Task8
console.log("\n\nTask8\n");
function showMultiples(num, numMultiples){
  for(var i=1; i<=numMultiples; i++){
    console.log(num + " x " + i + " = " + (num*i));
  }
}

showMultiples(5,3);
showMultiples(2,5);
showMultiples(10,4);
