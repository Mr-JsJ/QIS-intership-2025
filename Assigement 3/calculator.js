let numarr = [];
let digit = "0";

function object_clear() {
    let number = document.getElementById("display");
    number.innerHTML = "";
    digit = "";
}

function clear_function() {
    object_clear();
    numarr = [];
}


function append_to_array(passed_digit, symbol) {
    numarr.push(passed_digit);
    numarr.push(symbol);
    console.log(numarr);
    object_clear();
}

function get_result() {  
    let result = parseInt(numarr[0]);
    numarr.push(digit);
    // console.log(numarr); 
    object_clear();
    for(let i=0;i<=numarr.length;i++){
        if(numarr[i] === "+"){
            result = result + parseInt(numarr[i+1]);
            // console.log(result);
        }
        else if(numarr[i] === "-"){
            result = result - parseInt(numarr[i+1]);
            // console.log(result);
        }
        else if(numarr[i] === "*"){
            result = result * parseInt(numarr[i+1]);
            // console.log(result);

        }
        else if(numarr[i] === "/"){
            result = result / parseInt(numarr[i+1]);
            // console.log(result);
        }
    }
    clear_function();
    numarr[0] = result;
    let number = document.getElementById("display");
    number.innerHTML = result;


    
}




function getvalue(val = '0') {
    if (digit === "0" && ["+", "-", "*", "/", "=", "0"].includes(val)) {
        digit = "0";
    }
    else {
        let number = document.getElementById("display");
        number.innerHTML += val;

        if (val === "clear") {
            clear_function();
            console.log("clear");

        }
        else if (["+", "-", "*", "/", '='].includes(val)) {
            if(val==='='){
                get_result();

            }
            else{
            console.log("symbol");
            append_to_array(digit, val);
            digit = "0";
            }

        }
        else {
            console.log("number");
            digit += val;
            console.log("current digit:", digit);
        }
    }
}