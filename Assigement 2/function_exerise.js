    //1

            function calculateBill(amt,tax=5){
                let total=amt+tax;
                return total;
            }
            document.writeln(calculateBill(50));
      

    
    //2
            function generateUsername(name,year){
                let first3=name.slice(0,3);
                let last2=year.slice(-2);
                return first3+last2
            }
            let names=prompt("ENTER THE NAME:");
            let dob=prompt("ENTER THE YEAR OF BIRTH:");
            document.writeln(generateUsername(names,dob));



    //3
            function discountPrice(price,discount){
                let disamt=price*(discount/100);
                return price-disamt

            }
            let Amt=Number(prompt("Enter the Amount"));
            let Discount=Number(prompt("Enter the Discount"));
            document.writeln("Total Price:"+discountPrice(Amt,Discount));
            
      


     