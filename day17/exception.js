// ==================================================== EXCEPTION IN JAVASCRIPT =============================================================
 
//syntax
//     try{
//          code
//     }
//     catch(){
//          code
//     }
//     finally{
//         message after the execution of code.
//            }


// =======================================================================================================================

//1

try{
    let a=10;
    let x=20;
    let b=a+x;
    document.writeln("Result: "+ b+ "<br>");
}
catch(error){
document.writeln(error,"<br>");
}
finally{
    document.writeln("Execution Completed");

}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

//2

try{
    let num=5;  
    document.writeln(num,toUppercase())  
}
catch(error){
    document.writeln(error,"<br>");
}
finally{
    document.writeln("Finally block executed <br>");
}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

//3

function divide(c,d){
    if(d===0){
        throw "Division By Zero Not Allowed!";
    }
    return c/d;
}
try{
    document.writeln(divide(10,5)+"<br>");
}
catch(error){
document.writeln(error+"<br>");
}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

//4

// passing erro msg as object

try{
    throw new Error("Somthing Went Wrong.");
}
catch(e){
    document.writeln("NAME OF THE OBJECT ::"+e.name+"<br>");
    document.writeln("MESSAGE OF ERROR OBJECT ::"+e.message+"<br>");
}

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================


