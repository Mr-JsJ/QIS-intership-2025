     
    document.writeln(" <h1>BIGGEST VALUE </h1>");
     
     let a=10,b=20,c=18;
            if(a>b && a>c)
        {
            document.writeln("A is LARGEST");
        }
        else if (b>c)
        {
            document.writeln("B is LARGEST");
        }
        else
        {
            document.writeln("C is LARGEST");
        }


document.writeln("<br>===================================================================<br>");


// =======================================================================================================================


document.writeln("<h1>MARK GRADING</h1>")

let mark=80;

        if(mark>100 || mark<0)
        {
            document.writeln("INVALIED INPUT")
        }
        else
        {
            if(mark>=90)
        {
            document.writeln("A GRADE");
        }
        else if (mark>=75)
        {
            document.writeln("B GRADE");
        }
        else if (mark>=50)
        {
            document.writeln("C GRADE");
        }
        else
        {
            document.writeln("FAILED");

        }
        }



document.writeln("<br>===================================================================<br>");


// =======================================================================================================================


document.writeln(" <h1>VOTE ELIGABLETY</h1>")
     let age=16;
            if(age>=18)
            {
                document.writeln("YOU ARE ELIGABLE TO VOTE");
            } 
            else{
                document.writeln("YOU ARE  NOT ELIGABLE TO VOTE");

            }


document.writeln("<br>===================================================================<br>");


// =======================================================================================================================

document.writeln("<h1>VOWELS</h1>")

         let ch="e";
         if(["a","e","i","o","u","A","E","I","O","U"].includes(ch))
         {
            document.writeln("character is Vowel");
         }
         else
         {
            document.writeln("character is NOT a Vowel");

         }



document.writeln("<br>===================================================================<br>");


// =======================================================================================================================

document.writeln(" <h1>SWITCH/CASE</h1>");

 let day=2;
        switch(day){
            case 1:document.writeln("SUNDAY");break;
            case 2:document.writeln("MONDAY");break;
            case 3:document.writeln("THUESDAY");break;
            case 4:document.writeln("WEDNESDAY");break;
            case 5:document.writeln("THURSDAY");break;
            case 6:document.writeln("FRIDAY");break;
            case 7:document.writeln("SATURDAY");break;
            default:document.writeln("INLVAID");break;
        }


document.writeln("<br>===================================================================<br>");


// =======================================================================================================================

document.writeln("  <h1>SWITCH/CASE WITH COLOR</h1>");

let color="yellow";
        switch("color"){
            case "red":document.writeln("STOP");break;
            case "yellow":document.writeln("READY");break;
            case "green":document.writeln("GO");break;
            default:document.writeln("INLVAID");break;
        }

document.writeln("<br>===================================================================<br>");


// =======================================================================================================================

document.writeln(" <h1>SWITCH/CASE WITH GRADE</h1>")
   let grade="B";
        switch(day){
            case "A":document.writeln("EXECLLENT");break;
            case "B":document.writeln("GOOD");break;
            case "C":document.writeln("AVERAGE");break;
            case "D":document.writeln("PASS");break;
            case "F":document.writeln("FAILED");break;
            default:document.writeln("INLVAID GRADE");break;
        }

document.writeln("<br>===================================================================<br>");


// =======================================================================================================================


document.writeln(" <h1>HOW USE SWITCH/CASE TO CHECK CONDTIONS </h1>");

  let num=65;
        switch(true){
            case (num>=90):document.writeln("A");break;
            case (num>=80):document.writeln("B");break;
            case (num>=70):document.writeln("C");break;
            case (num>=60):document.writeln("D");break;
            default:document.writeln("FAILED");
        }

document.writeln("<br>===================================================================<br>");


// =======================================================================================================================
