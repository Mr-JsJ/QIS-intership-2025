
//====================================== IF / IF-ELSE=====================================================================

document.writeln("NUMBER IS POSITIVE OR NEGATIVE");

let num1 = 5;
if (num1 > 0) {
    document.writeln("positive NUMBER");
}
else if (num1 < 0) {
    document.writeln("negative NUMBER");
}
else {
    document.writeln("NUMBER is zero");
}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("ODD OR EVEN")

let num2 = 5
if (num2 % 2 === 0) {
    document.writeln("ITS AN EVEN NUMBER");
}
else {
    document.writeln("ITS AN ODD NUMBER");

}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("GREATEST OF THREE");

let a = 10, b = 20, c = 18;
if (a > b && a > c) {
    document.writeln("A is LARGEST");
}
else if (b > c) {
    document.writeln("B is LARGEST");
}
else {
    document.writeln("C is LARGEST");
}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("NUMBER DIVIDSIBLE BY 7")

let num3 = 14
if (num3 % 7 === 0) {
    document.writeln("THE NUMBER IS DIVISIBLE BY 7 ");
}
else {
    document.writeln("THE NUMBER IS NOT DIVISIBLE BY 7");

}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("NUMBER DIVIDSIBLE BY 4 and 6");


let num4 = 14
if (num4 % 4 === 0 && num4 % 6 === 0) {
    document.writeln("THE NUMBER IS DIVISIBLE BY 4 AND 6 ");
}
else {
    document.writeln("THE NUMBER IS NOT DIVISIBLE BY 4 AND 6");

}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("AGE");


let age = 14;
if (age >= 30) {
    document.writeln("ADULT");
}
else if (age >= 12) {
    document.writeln("TEENAGE");
}
else {
    document.writeln("CHILD");
}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("GRADING");


let mark = 90;

if (mark >= 90) {
    document.writeln("A GRADE");
}
else if (mark >= 75) {
    document.writeln("B GRADE");
}
else if (mark >= 50) {
    document.writeln("C GRADE");
}
else {
    document.writeln("FAILED");
}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("VOWELS");

let ch = "e";
if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(ch)) {
    document.writeln("character is Vowel");
}
else {
    document.writeln("character is a Consonant");
}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("AGE");

let age2 = 16;
if (age2 >= 18) {
    document.writeln("YOU ARE ELIGABLE FOR DRIVING LICENSE");
}
else {
    document.writeln("YOU ARE  NOT ELIGABLE FOR DRIVING LICENSE");

}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("TEMPERATURE");

let temp = 14;

if (temp < 20) {
    document.writeln("COLD");
}
else if (temp < 35) {
    document.writeln("WARM");
}
else {
    document.writeln("HOT");
}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("LEAP YEAR");


let year = 2025;
if (year % 4 === 0) {
    document.writeln("ITS A LEAP YEAR");
}
else {
    document.writeln("ITS NOT A LEAP YEAR");

}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("GREATEST OF TWO");


let a1 = 10, b1 = 20;
if (a1 > b1) {
    document.writeln("A is LARGEST");
}
else {
    document.writeln("B is LARGEST");
}
document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("NUMBER DIVIDSIBLE BY 3 AND 5");


let num5 = 14
if (num5 % 3 === 0 && num5 % 5 === 0) {
    document.writeln("THE NUMBER IS DIVISIBLE BY 3 AND 5 ");
}
else if (num5 % 3 === 0) {
    document.writeln("THE NUMBER IS DIVISIBLE BY 3");

}
else if (num5 % 5 === 0) {
    document.writeln("THE NUMBER IS DIVISIBLE BY 5");

}
else {
    document.writeln("THE NUMBER IS NOT DIVISIBLE BY 3 AND 5 ");

}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

let num8 = 20;

if (num8 > 1 && num8 < 100) {

    document.writeln("NUMBER IS BETWEEN 1 & 100");
}
else {
    document.writeln("IT IS NO BETWEEN 1 & 100");
}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

let num9 = 18;
if (num9 % 4 === 0 && !(num9 % 8 == 0)) {

    document.writeln("NUMBER IS MULTIPLE OF 4 BUT NOT 8");
}
else if (num9 % 4 === 0 && num9 % 8 === 0) {
    document.writeln("NUMBER IS MULTIPLE OF 4 AND 8");
}
else {
    document.writeln("NUMBER IS NOT A MULTIPLE OF 4 AND 8");
}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================


let num10 = 20;
let num11 = 21;



if (num10 >= num11) {

    document.writeln(num10);
}
else {
    document.writeln(num11);

}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("check if the char is upper or lower");

// check if the char is upper or lower
let char1 = "c";

if (char1 >= "a" && char1 <= "z") {
    document.writeln("LOWERCASE");

}
else {
    document.writeln("UPPERCASE");

}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

let age1 = 14;
if (age1 >= 60) {
    document.writeln("SENIOR CITIZEN.");
}
else if (age >= 18) {
    document.writeln("YOU CAN VOTE.");
}
else {
    document.writeln("YOU CAN'T VOTE.");
}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

let num12;
if (num % 10 == 5) {
    document.writeln("THE NUMBER ENDS WITH 5");

}
else {
    document.writeln("THE NUMBER NOT ENDS WITH 5");

}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

let num13 = 123;
if (num13 % 9 === 0 || num13 % 11 === 0) {
    document.writeln("THE NUMBER IS DIVISIBLE BY 9 OR 11");
}
else {
    document.writeln("THE NUMBER IS NOT DIVISIBLE BY 9 OR 11");

}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

let ang1 = 60, ang2 = 60, ang3 = 60;
if (ang1 > 0 && ang2 > 0 && ang3 > 0) {

    if ((ang1 + ang2 + ang3) === 180) {
        document.writeln("IT IS A TRIANGLE");
    }
}
else {
    document.writeln("IT IS NOT A TRIANGLE");

}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

let salary = 100;
if (salary < 10000) {
    document.writeln(salary + (salary * 10) / 100);
} else if (salary < 20000) {
    document.writeln(salary + (salary * 5) / 100);

}
else {
    document.writeln(salary + (salary * 2) / 100);

}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

let char2 = 300;

if (typeof (char2) == "number") {

    document.writeln("IT IS A NUMBER");

}

else if (char2 >= "a" && char2 <= "z" || char2 >= "A" && char2 <= "Z") {
    document.writeln("IT IS A ALPHABET");

}
else {
    document.writeln("IT IS A SPECIAL CHARTER");

}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================


let unit = 150;

document.writeln("BILL=");

if (unit > 200) {

    document.writeln(100 * 2 + 100 * 4 + ((unit - 100) * 6));
}

else if (unit > 100) {

    document.writeln(100 * 2 + ((unit - 100) * 4));

}
else {
    document.writeln(unit * 2);
}




document.writeln("<br>===================================================================<br>");

// =======================================================================================================================





//====================================== SWITCH CASE =====================================================================

document.writeln("MATHS OPERATIONS");

let num6 = 2, num7 = 7, op = "*";
switch (op) {
    case "+": document.writeln(num6 + num7); break;
    case "-": document.writeln(num6 - num7); break;
    case "*": document.writeln(num6 * num7); break;
    case "/": document.writeln(num6 / num7); break;
    default: document.writeln("INLVAID"); break;
}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("DAYS");

let day = 2;
switch (day) {
    case 1: document.writeln("SUNDAY"); break;
    case 2: document.writeln("MONDAY"); break;
    case 3: document.writeln("THUESDAY"); break;
    case 4: document.writeln("WEDNESDAY"); break;
    case 5: document.writeln("THURSDAY"); break;
    case 6: document.writeln("FRIDAY"); break;
    case 7: document.writeln("SATURDAY"); break;
    default: document.writeln("INLVAID"); break;
}
document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("TRAFFIC");


let color = "yellow";
switch ("color") {
    case "red": document.writeln("STOP"); break;
    case "yellow": document.writeln("READY"); break;
    case "green": document.writeln("GO"); break;
    default: document.writeln("INLVAID"); break;
}


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("GRADES");


let grade = "B";
switch (day) {
    case "A": document.writeln("EXECLLENT"); break;
    case "B": document.writeln("GOOD"); break;
    case "C": document.writeln("AVERAGE"); break;
    case "D": document.writeln("PASS"); break;
    case "F": document.writeln("FAILED"); break;
    default: document.writeln("INLVAID GRADE"); break;
}



document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("MONTHS");


let month = 2;
switch (month) {
    case 1: document.writeln("JAN"); break;
    case 2: document.writeln("FEB"); break;
    case 3: document.writeln("MAR"); break;
    case 4: document.writeln("APR"); break;
    case 5: document.writeln("MAY"); break;
    case 6: document.writeln("JUN"); break;
    case 7: document.writeln("JUL"); break;
    case 8: document.writeln("AUG"); break;
    case 9: document.writeln("SEp"); break;
    case 10: document.writeln("OCT"); break;
    case 11: document.writeln("NOV"); break;
    case 12: document.writeln("DEC"); break;
    default: document.writeln("INVALID"); break;
}