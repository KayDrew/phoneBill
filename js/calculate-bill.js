
function calculateBillFunction (items){
	
var stringArr=items.split(',');
  var totalCost=0;

for(let i=0;i<stringArr.length;++i){

    var billItem1=stringArr[i].toLowerCase();

    if(billItem1==='call'){
        totalCost+=2.75;

    }

    else if(billItem1==='sms'){

        totalCost+=0.75;
    }

}

<<<<<<< HEAD
return totalCost;
}

=======
var roundedTotal=totalCost.toFixed(2);

billTotal.innerHTML=roundedTotal;

if(roundedTotal>=20 && roundedTotal<30){

    billTotal.style.color="orange";
}

else if(roundedTotal>=30){
    billTotal.style.color="red";
 
>>>>>>> a175e106426a282a0eff327443e546169d0968b0


