
// =================================================== PROMPT ==================================================================

document.writeln("TEMPERATURE");

let temp=Number(prompt("ENTER THE TEMPERATURE:"));
            if(temp>40){
                document.writeln("VERY HOT");
            }else if(temp>30){
                document.writeln(" HOT");

            }else if(temp<10){
                document.writeln("VERY COLD");
            }else{
                document.writeln("COOL DAY");
                
            }


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("DISCOUNT");

 let amount=Number(prompt("ENTER THE AMOUNT:"));
            let discount;
            if(amount>=500){
                if(amt>=1000){
                    discount=amountt*(20/100);
                    document.writeln("YOUR DISCOUNT IS "+discount);
                }else{
                    discount=amountt*(10/100);
                    document.writeln("YOUR DISCOUNT IS "+discount);

                }
            }else{
                    document.writeln("THERE IS NO DISCOUNT");

            }


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================


document.writeln("LOWER CASE OR UPPER CASE");

 let char=prompt("ENTER THE CHARATER");
            if(typeof(char)==="string"){

                  if(char>="a"&& char<="z")
                    {
                      document.writeln("LOWERCASE");
        
                    }
                  else{
                     document.writeln("UPPERCASE");

                    }

            }else{
                document.writeln("NOT AN ALPHABET");
            }


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================
document.writeln("GRADES");

 let mark=Number(prompt("ENTER THE NUMBER:"));
            if(mark>=50){
                if(mark>=90){
                    document.writeln("A GRADE");
                }
                else{
                    document.writeln("B GRADE");

                }
            }
            if (mark<50){
                if (mark>=30){
                    document.writeln("JUST PASSED");
                }else{
                    document.writeln("FAILED");
                }
            }


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("BALANCES WITHDRAWAL");


 let bal=10000;
            let amt=Number(prompt("ENTER THE AMOUNT:"))
            if(amt%100===0){
                if(amt<=bal){
                    document.writeln("WITHDRAW SUCCESSFUL");
                }else{
                    document.writeln("INSUFFICIENT BALANCE");

                }
            }else{
                    document.writeln("ENTER AMOUNT IN MULTIPLE OF 100");

            }

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("TRAFFIC");

     let color=prompt("ENTER THE COLOR:");
            if(color==="red")
        {
            let wait=prompt("DO YOU WANT TO CROSS (Y/N):");
            if(wait==="Y"){
                document.writeln("STOP AND ALLOW THE PEDESTRIAN");
            }
            else{
                document.writeln("STOP");
            }

        }
         else if(color==="yellow"){
                document.writeln("SLOW DOWN");

         }
         else{
            document.writeln("GO");
         }


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

document.writeln("MULTIPLES");


let num=Number(prompt("ENTER THE NUMBER:"));
            if(num%3===0){
            if(num%5===0){
                document.writeln("MULTIPLE OF 5 AND 3.");
            }
            else{
                document.writeln("MULTIPLE OF 3.");
            }
            }
            else if(num%5===0){
                document.writeln("MULTIPE OF 5.");

            }
            else{
                document.writeln(" NOT A MULTIPLE OF 5 AND 3.");

            }


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================


document.writeln("RECHARGE");

  let amt2=Number(prompt("ENTER THE AMOUNT"));
            if (amt2>=199){
                if(amt2>=399){
                    document.writeln("FULL TALKTIME + DATAPACK");
                }
                else{
                    document.writeln("DATAPACK +100 MINS FREE");

                }
            }
            if(amt2<=199){
                if(amt2>=99){
                    document.writeln("FULL TALKTIME ONLY");

                }
                else{
                    document.writeln("NO VALIED PLAN");
                    
                }
            }


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================
