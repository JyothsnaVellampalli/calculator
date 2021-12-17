'use strict';
let operation=[];

function insert(data){
    document.getElementById("display").innerHTML+=data ;
    operation.push(data);
    console.log(operation);

}
function CLEAR(){
    operation.splice(0,operation.length);
    document.getElementById("display").innerHTML="";
    console.log(operation);
}
function backspace(){
    operation.pop();
    document.getElementById("display").innerHTML=operation.join("");
    console.log(operation);
}

let index;
let numm=[];


function operate(data){

    
    operation.push(data);
    index=operation.indexOf(data);
    document.getElementById("display").innerHTML+=data ;
    console.log(operation);
    
   }

   let res;
function result(){
    numm.push((operation.slice(0,index)).join(""));
    numm.push((operation.slice(index+1,operation.length)).join(""));
let num=numm.map(b=>parseFloat(b));
console.log(operation);
console.log(numm);
if(operation.includes("mult")){CLEAR();
    res=num[0]*num[1];
    document.getElementById("display").innerHTML=res;}
if(operation.includes("divide")){CLEAR();
    res=num[0]/num[1];
    document.getElementById("display").innerHTML=res;}
if(operation.includes("minus")){CLEAR();
    res=num[0]-num[1];
    document.getElementById("display").innerHTML=res;}
if(operation.includes("add")){CLEAR();
    res=num[0]+num[1];
    document.getElementById("display").innerHTML=res;}
numm.splice(0,num.length)
operation.push(res);
console.log(operation);
}
        
console.log(operation);





