/* JavaScript Basics */

/**
 * A collection of useful tools
 */

// this is aboout variables...

var myName = "Maya";

let yourName = "Thomas";

const myBox = document.getElementById ("box");

/* Functions */

function fName() {
    //do stuff...
}

fName(); //this executes/calls the function

/* Commom */
alert("Hello World!");
        console.log("Hi there :)");
        confirm("REALLY load this page?");
        prompt("How many apples?");
        document.write("Hi there");
        document.writeln("Line 1");
        document.writeln("Line 2");
        

/* Events */

myBox.addEventListener("click", function() {
    //alert("Booh")
});

// working with a pre-defined function (easier!)
myBox.addEventListener("click", fName);

/* Conditionals - if statements */
if(myName == "Maya") { //if it is
    alert("Hi Maya!")
} else {
    alert("Hello Stranger!");
}

// if(myName != "Maya"); //if it isnt


/* other comparison operators:
>= greater than or equal
<= smaller than or equal
> greater than
< smaller than

=== is the same and ALSO the same format/type

examples:
if(6 > 5) {alert("yes") }
if(6 >= 6) {alert("yes") } // this one will alert
if(6 > 6) {alert("yes") } // wont alert...;