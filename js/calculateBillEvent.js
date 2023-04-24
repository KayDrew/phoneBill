var calculate= document.querySelector('.calculateBtn');
var billTotal=document.querySelector('.billTotal');
var billString=document.querySelector('.billString');

function calculateBillEvent(){

   
var str=billString.value;

var totalCost= calculateBillFunction (str);

var roundedTotal=totalCost.toFixed(2);

billTotal.innerHTML=roundedTotal;

if(roundedTotal>20 && roundedTotal<30){

    billTotal.style.color="orange";
}

else if(roundedTotal>30){
    billTotal.style.color="red";
 

}

else{
billTotal.style.color="black";
}

}
calculate.addEventListener('click',calculateBillEvent);