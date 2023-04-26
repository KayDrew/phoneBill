
//add an event listener for when the add button is pressed
function calculateTextBill(item){

var total=0;
var callTotal=0;
var smsTotal=0;


if(item!=undefined){

var item1= item.trim().toLowerCase();

    if(item1==="call"){
     total+=2.75;
   callTotal+=2.75;
}

   else  if(item1==="sms"){
        total+=0.75;
        smsTotal+=0.75;
    }
    
    return {
callBill: callTotal,
smsBill:smsTotal,
totalBill: total
}
}

    }

