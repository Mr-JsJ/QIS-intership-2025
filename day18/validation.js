
// ==================================================== VAILDATION IN JAVASCRIPT =============================================================
 
// pattern=/^......$/

// =======================================================================================================================


let name=prompt("ENTER THE NAME: ");
let pattern=/^[A-Z][a-zA-Z]{1,30}$/;
if(pattern.test(name)){
    document.writeln("<b>VALID NAME<b>")
}
else{
    document.writeln("<b style='color:red'>Invalid Name<b>");
}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================


//phone number 

let number=prompt("ENTER THE MOBILE NUMBER: ");
let npattern=/^(?:\+91)?[6789]\d{9}$/
if(npattern.test(number)){
    document.writeln("<b>VALID NUMBER<b>");
}
else{
    document.writeln("<b>NOT A VALID NUMBER<b>");

}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

//email validation

let email=prompt("ENTER THE EMAIL ID :");
let epattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

if(epattern.test(email)){
    document.writeln("VALIED EMAIL");

}else{
    document.writeln("INVALID EMAIL");
}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

//password validation

let password=prompt("ENTER THE PASSWORD:");
let ppattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#!@$%^&*?])[a-zA-Z0-9!@#$%^&*?]{6,}$/;
if(ppattern.test(password)){
    document.writeln("VALID PASSWORD");
}else{
    document.writeln("INVALID PASSWORD");
}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================
