
let total=0;
let consoleBuffer="";
let operator=null;

const display=document.querySelector(".console");

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    display.innerText=consoleBuffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'AC':
            total=0;
            consoleBuffer="";
            operator=null;
            break;
        case '=':
            if(operator===null){
                return;
            }
            if(consoleBuffer===""){
                calculateValues(0);
            }
            else{
                calculateValues(parseFloat(consoleBuffer));
                operator=null;
                consoleBuffer=total;
                total=0;
            }
            break;
        case '+':
        case '-':
        case '÷':
        case '×':
            handleOperator(symbol);
            break;
        case '.':
            handleNumber(".")
    }
}

function handleOperator(op){
   if(consoleBuffer===""){
    return;
   }
   const intBuffer =parseFloat(consoleBuffer);
   if(total===0){
    total=intBuffer;
   }
   else{
    calculateValues(intBuffer);
   }
   operator=op;
   consoleBuffer="";

}

function calculateValues(val){
    if(operator==='+'){
       total+=val;
    }
    if(operator==='-'){
        total-=val;
    }
    if(operator==='÷'){
        total/=val;
    }
    if(operator==='×'){
        total*=val;
    }
}

function handleNumber(val){
    if(consoleBuffer===""){
        consoleBuffer=val
    }
    else{
        consoleBuffer+=val;
    }
}

document.querySelector('.buttons').addEventListener('click',function(event){
    buttonClick(event.target.innerText);
    console.log(consoleBuffer);
});
