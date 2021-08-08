let activeOperant= "";

function activateField(option){
    // if (option=="a") {
    //     activeOperant="a";
    // } else {
    //   activeOperant="b";
    // }
    activeOperant=option;
    
}

function addNumber(buttonNumber){
    // create the active operant id
    let operantId = "operant"+activeOperant;
    document.getElementById(operantId).value += buttonNumber;
}

function add(){
    let op1=document.getElementById("operanta").value;
    op1=Number(op1);
    let op2=document.getElementById("operantb").value;
    op2=Number(op2);
    document.getElementById("result").value = op1+op2;
}

function cancel(){
    document.getElementById("operanta").value = "";
    document.getElementById("operantb").value = "";
    document.getElementById("result").value = "";
}

function subtract(){
    let op1=document.getElementById("operanta").value;
    op1=Number(op1);
    let op2=document.getElementById("operantb").value;
    op2=Number(op2);
    document.getElementById("result").value = op1-op2;   
}

function multiply(){
    let op1=document.getElementById("operanta").value;
    op1=Number(op1);
    let op2=document.getElementById("operantb").value;
    op2=Number(op2);
    document.getElementById("result").value = op1*op2; 
}

function division(){
    let op1=document.getElementById("operanta").value;
    op1=Number(op1);
    let op2=document.getElementById("operantb").value;
    op2=Number(op2);
    document.getElementById("result").value = op1/op2;
}

function cancelLastOption() {
    if (activeOperant=='a') {
        document.getElementById("operanta").value = "";
    } else  {
        document.getElementById("operantb").value = "";
    }
    
}