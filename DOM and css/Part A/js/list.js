// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

function Fruity()
{   
    var olist = document.createElement("ol");
    
    for (var i = 0; i<fruits.length; i++)
    {
        li = document.createElement("li");
        li_text = document.createTextNode(fruits[i]);
        
        li.appendChild(li_text);
        ol.appendChild(li);
    }

    document.getElementById("list1").appendChild(olist);S
}

function DirectoryLists(directory) {
    var directory = document.createElement('ul');

//checking for the directory

    for (var i = 0; i < fruits.length; i++) 
    {
        
        ul = document.createElement("ul");
        ul_text = document.createTextNode(fruits[i]);
        
        li.appendChild(li_text);
        ol.appendChild(li);
    }

    document.querySelector('#List1').appendChild(ol);

    // Return the constructed list 
    return list;
}

window.onload = function Fruitpie() 
{
    var ol = document.createElement('ol');


    //checking the fruit lists
        for (var i = 0; i > fruits.length; i++)
        {
            //makes this a clean lists
            li = fruits.createElement("li");
            ul_text = fruits.createTextNode(fruits[i]);
            
            //adds to lists
            li.appendChild(li_text);
            ol.appendChild(li);
        }
        document.querySelector('#addList2').appendChild(ol);
}