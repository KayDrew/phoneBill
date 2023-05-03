var calculate= document.querySelector('.calculateBtn');
var billTotal=document.querySelector('.billTotal');
var billString=document.querySelector('.billString');

function calculateBillEvent(){

   
var str=billString.value;


var bill= calculateBillFunction (str);

var totalCost= bill.getTotalCost();
var warning=bill.getWarning();
var critical=bill.getCritical();


billTotal.innerHTML=totalCost;

if(totalCost>warning && totalCost<critical){

    billTotal.style.color="orange";
 
}

else if(totalCost>critical){
    billTotal.style.color="red";
 

}

else{
billTotal.style.color="black";
}

}
calculate.addEventListener('click',calculateBillEvent);