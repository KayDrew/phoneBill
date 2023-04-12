var calculate= document.querySelector('.calculateBtn');
var billTotal=document.querySelector('.billTotal');
var billString=document.querySelector('.billString');

function calculateBtnClicked(){

    
    var totalCost=0;
    
var str=billString.value;
var stringArr=str.split(',');


for(let i=0;i<stringArr.length;++i){

    var billItem1=stringArr[i];

    if(billItem1==='call'){
        totalCost+=2.75;

    }

    else if(billItem1==='sms'){

        totalCost+=0.75;
    }

}

var roundedTotal=totalCost.toFixed(2);

billTotal.innerHTML=roundedTotal;

if(roundedTotal>20 && roundedTotal<30){

    billTotal.style.color="orange";
}

else if(roundedTotal>30){
    billTotal.style.color="red";

}

}
calculate.addEventListener('click',calculateBtnClicked);