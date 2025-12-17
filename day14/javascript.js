// ==================================================== SET =============================================================

            let num=new Set([1,2,3,4,5,6]);//set decleration
            document.writeln(...num);
    

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

 let fruits=new Set();//set decleration
            fruits.add("apple");
            fruits.add("banana");
            fruits.add("orange");
            fruits.add("banana");//adding elements
            document.writeln([...fruits]);

// =======================================================================================================================

            document.writeln("size of :"+[fruits.size]);//size of 


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

            document.writeln("BEFORE DELETION"+[...fruits]); 
            fruits.delete("apple");// delete
            document.writeln("<br>")
            document.writeln("AFTER DELETION"+[...fruits]);



document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

             document.writeln("BEFORE CLEAR: "+[...fruits]); 
            fruits.clear();
            document.writeln("<br>")
            document.writeln("AFTER CLEAR: "+[...fruits]);


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

            let num2=new Set([1,2,3,4])
            document.writeln(num2.has(2))//to check 2 is in the set return true or false
            document.writeln("<br>")
            document.writeln(num2.has(5))


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================



           let myobj={//key value pair js object declaration
            name:"Shejin",
            age:22,
            1:"one"
        };
        
        document.writeln("NAME :"+myobj.name+"<br>");
        document.writeln("AGE :"+myobj.age+"<br>");
        document.writeln("1 :"+myobj[1]+"<br>");
        document.writeln(("name" in myobj)+"<br>")//to check the value exist or not.
        document.writeln(Object.keys(myobj)+"<br>");//to get keys exist in object
        document.writeln(Object.values(myobj)+"<br>");//to get values exist in object

   

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================
   

          let person={
            name:"Shejin",
            age:22,
            address:{city:"Kochi",state:"Kerala"} //object decleration inside object js.
        };

        document.writeln(person.name+"<br>");
        document.writeln(person.age+"<br>");
        document.writeln(person.address.city+"<br>");
        document.writeln(person.address.state+"<br>");
        document.writeln(person.address+"<br>");


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

// =======================================================================================================================


    // <!-- for in is a loop used to iterate overe the keys or property names of an object -->

       
    //     syntax:

    //     for(variable in object) 
    //     {
    //     //body
    //     }
   

// =======================================================================================================================


  
        let user1={
            name:"Arun",
            age:22,
            city:"Kochi"
        };
        for(let key in user1){
            document.writeln(key);
            document.writeln(user1[key]);
        }

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

   let user={
            name:"Arun",
            age:22,
            address:{city:"Kochi",state:"Kerala"}
        };
        for(let key in user){
            if(typeof user[key]==="object"){
                for(let subkey in user[key]){
                    document.writeln(subkey+":"+user[key][subkey]+"<br>");
                }
            }else{
                    document.writeln(key+":"+user[key]+"<br>");

            }
        }
   

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

// =======================================================================================================================



    //  for...of
        
    //    works on iterables:Array,string aets ,etc.
    //    does not work directly on plain objects
    //    provides values,not keys
    //    syntax:

    //    for(variable  of iterable  )
    //    {
    //    //body
    //    }
      

// =======================================================================================================================



        let nums=[10,20,30,40]
        for(let i of nums){
            document.writeln(i+"<br>");
        }
     


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================


         let str="Shejin Jose"
        for(let j of str){
            document.writeln(j+"<br>");
        }

        let colors=new Set(["red","yellow","blue"]);
        for(let color of colors)
        {
            document.writeln(color+"<br>");
        }


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

// =======================================================================================================================




//     foreach() is a built-in method used to loop through arrays ,sets
//    it runs a function for every elements in the collections.
   
//    syntax:
   
//    array.forEach(function(item,index){
//    //code;
//    })

// =======================================================================================================================


    let numbers=[10,20,30]
    numbers.forEach(function(num){
        document.writeln(num+"<br>")
    });


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================

     let numbers2=[10,20,30]
    numbers.forEach(function(value,index){
        document.writeln(index+":"+value+"<br>");
    });

document.writeln("<br>===================================================================<br>");

// =======================================================================================================================


      let numbers3=[10,20,30]
    numbers.forEach(function(value,index,arr){
        document.writeln("Value: "+value+"==Index: "+index+"==Full Array:"+arr+"<br>");
    });


document.writeln("<br>===================================================================<br>");

// =======================================================================================================================