// ==================================================== DOM IN JAVASCRIPT =============================================================
//  Document Object Model
// =======================================================================================================================

// =======================================================================================================================
// 1
let a = document.getElementById("head1");
console.log(a);
a.innerHTML = "SHEJIN JOSE";
a.style.color = "green";

// =======================================================================================================================

//2
 let userinput=document.getElementsByName("username");
    userinput[0].style.border="2px solid red";

// =======================================================================================================================

//3

//get elements using tag name
document.getElementsByTagName("h2")[1].style.color="red"; ////[1]--for getting tag in order. 
let headings =document.getElementsByTagName("h2");
headings[0].style.color="blue";

// =======================================================================================================================

//4
//using for-loop for itrating throug same tags in order for apply same design
let h1head=document.getElementsByTagName("h1");
for(let h of h1head)
    { 
h.style.color="green";
    }

// =======================================================================================================================

//5
///get element using class name
document.getElementsByClassName('p1')[0].style.fontWeight = "bold";
document.getElementsByClassName('p1')[1].style.color = "yellow";

// =======================================================================================================================

//6
let messages=document.getElementsByClassName("class1");
for(let i=0;i<messages.length;i++){
    messages[i].style.fontWeight="bold";
    messages[i].style.color="red";
}

// =======================================================================================================================

//7

function changeText(){
    let heads=document.getElementById("head2");
    heads.innerHTML="Hello,Javascript";
    heads.style.color="green";

}

// =======================================================================================================================

//8

let name1="SHEJIN";
let type1="A BOY";

document.write(`MY NAME IS ${name1} AND I AM ${type1}`);

// =======================================================================================================================


