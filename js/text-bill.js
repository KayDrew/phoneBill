
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

    
    }

    
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
