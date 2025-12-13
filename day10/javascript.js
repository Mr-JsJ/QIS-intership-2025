// ====================================================  NESTED IF ELSE =============================================================


let num = 10;
if (num > 0) {
    document.writeln("THE NUMBER IS POSITIVE<br>");
    if (num % 2 === 0) {
        document.writeln("EVEN");
    } else {
        document.writeln("ODD");
    }
}
else {
    document.writeln("THE NUMBER IS NEGATIVE<br>");
}


document.writeln("<br>===================================================================<br>");


// =======================================================================================================================

// =================================================== PROMPT ================================================================

//reading input from the user using prompt


let username = prompt("ENTER THE USERNAME");
let password = prompt("ENTER THE PASSWORD");
if (username == "admin") {
    if (password == "12345") {
        document.writeln("LOGIN SUCESSFULLY");
    } else {
        document.writeln("WRONG PASSWORD");
    }
} else {
    document.writeln("INVALID USER NAME");
}


document.writeln("<br>===================================================================<br>");


// =======================================================================================================================

let n1 = Number(prompt("ENTER THE FIRST NUMBER"));  // typecasting the text input to number.

let n2 = Number(prompt("ENTER THE SECOND NUMBER"))

let sum = n1 + n2;

document.writeln("SUM=" + sum)


document.writeln("<br>===================================================================<br>");


