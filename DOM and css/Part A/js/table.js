// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

function createTable() {
    //create table
    var table = document.createElement("table"); 

    //create array of headers
    var headers = ["First Name", "Last Name", "Age", "Email"];
    var tr = document.createElement("tr");
    for (var i = 0; i < headers.length; i++) {
        //add headers to array
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(headers[i]));
        tr.appendChild(th);
        th.style.border = "2px solid";

        table.appendChild(tr);
    }
    for (var i = 0; i < users.length; i++) {
        //add data to array
        var tr = document.createElement("tr"); //create table row

        var td = document.createElement("td");
        td.appendChild(document.createTextNode(users[i].first_name));
        tr.appendChild(td);
        td.style.border = "2px solid";

        var td = document.createElement("td");
        td.appendChild(document.createTextNode(users[i].last_name));
        tr.appendChild(td);
        td.style.border = "2px solid";

        var td = document.createElement("td");
        td.appendChild(document.createTextNode(users[i].age));
        tr.appendChild(td);
        td.style.border = "2px solid";

        var td = document.createElement("td");
        var a = document.createElement("a");
        a.appendChild(document.createTextNode(users[i].email));
        td.appendChild(a);

        //add attribule to a
        a.setAttribute("href", "mailto:" +users[i].email);
        tr.appendChild(td);
        td.style.border = "2px solid";

        table.appendChild(tr); //append table row
        table.style.border = "2px solid";
    }
    //append table to div
    document.getElementById("table1").appendChild(table);

}