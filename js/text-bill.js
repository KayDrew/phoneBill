
//add an event listener for when the add button is pressed
function calculateTextBill(item){

var total=0;
var callTotal=0;
var smsTotal=0;

    if(item==="call"){
     total+=2.75;
   callTotal+=2.75;
}

   else  if(item==="sms"){
        total+=0.75;
        smsTotal+=0.75;
    }
    
    return {
callBill: callTotal,
smsBill:smsTotal,
totalBill: total
}

    
<<<<<<< HEAD
    }
=======
if(total>=30.00 && total<50.00){

    totalText.style.color="orange";

}

else if(total>=50.00){
totalText.style.color="red";
}

else{
totalText.style.color="black";
}

    var roundedBillTotal=total.toFixed(2);
    var roundedCallTotal=callTotal.toFixed(2);
    var roundedSmsTotal=smsTotal.toFixed(2);

    totalText.innerHTML=roundedBillTotal;
    callBill.innerHTML=roundedCallTotal;
    smsBill.innerHTML=roundedSmsTotal;

}
addButton.addEventListener('click',addButtonClicked);
>>>>>>> a175e106426a282a0eff327443e546169d0968b0

    
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
