/****************************************************************************
* BTI225 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* Name: Priya Khatri Student ID: 110149176 Date: Jan 28, 2020
****************************************************************************/

//Task 1

//function takes indefinite numbers of params. If function doesn't 
//doesn't pass args then output message. Return nothing
function playNumbers()
{
    //var playNum = "There are no inputs";
    if (0 >= arguments.length)
    {
        //playNum += arguments[i];
        console.log("There are no inputs\n");
    }
    //return playNum;

    //one or more args isNan function returns message in set format
    var NotaNum = 0; //set param if it's a number
    for (i = 0; i < arguments.length; i++)
    {
        //checks if value is not a number then return message
        if(isNaN(arguments[i] && arguments[i] != null))
        {
            console.log(arguments[i] + " is not a number\n");
            NotaNum = 1;
        }
        //if neither then display largest  of all params
        else if(i == arguments.length - 1 && NotaNum == 0 )
        {
            //need to use Math built-in functions
            //checks for largest number in all values input params
            var largeNums = Math.max.apply(Math, arguments)
            console.log("The largest number of (" + Object.values(arguments) + 
            ") is " + largeNums + "\n");

            //once you get largest number then display the average num of collected values
            var average = 0;

            for(var i = 0; i < arguments.length; i++)
            {
                average += arguments[i];
            }
            var avg = average / arguments.length;

            console.log("The average of (" + Object.values(arguments) + ") is " + avg + "\n");

        }
    }

}

//output examples from PDF
console.log("/**************************** Task 1 ***************************/");
playNumbers();
playNumbers("abc", 3, "hello");
playNumbers(9,3,6);
playNumbers(3,5,1,3,5);
playNumbers("Good day!",3,4,32,"hi", "we");


//Task 2

//set meaning to values
function CTempToF(val)
{
    var CeltoFaren = val * 9 / 5 + 32;
    return CeltoFaren;    
}

function FTempToC(val)
{
    var FarentoCel = (val - 32) * 5 / 9;
    return FarentoCel;    
}

function convertCF(val, cf)
{
    var NotaNum = 0;

    //checks if val is a number
    if(isNaN(val))
    {
        console.log("I need a number");
        NotaNum = 1;
    }

    //if cf is not "C" or "F", your function display message
    if (cf != "C" && cf != "F")
    {
        console.log("I am confused :(");
    }

    //if cf is "C", val is in Cel, function will convert to Faren and display message 
  
    if (cf == "C" && NotaNum == 0)
    {
        console.log(val + cf + " is equivalent to " + CTempToF(val) + "F");
    }

    //if cf is "F", val is in Faren + function will convert it to Cel and display message
    if (cf == "F" && NotaNum == 0)
    {
        console.log(val + cf + " is equivalent to " + FTempToC(val) + "C");
    }

}

//output examples from PDF
console.log("/**************************** Task 2 ***************************/");
convertCF("avc", "F"); 
convertCF("32", "M"); 
convertCF(32, 'F'); 
convertCF(0, "C"); 
convertCF(122, "F");
