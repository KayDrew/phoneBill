
//add an event listener for when the add button is pressed
function calculateTextBill(item){

var total=0;
var callTotal=0;
var smsTotal=0;


if(item!=undefined){

var item1= item.trim().toLowerCase();

    if(item1==="call"){
   
}

   else  if(item1==="sms"){
       
    }
    
}

function makeCall(){

    total+=2.75;
    callTotal+=2.75;
}

function sendSms(){

    total+=0.75;
    smsTotal+=0.75;
}
    
    function getTotal(){

        return result=total.toFixed(2);
        return result;
    }

    function getCallTotal(){

        return result=callTotal.toFixed(2);
        return result;
    }

    function getSmsTotal(){

        return result=smsTotal.toFixed(2);
        return result;
    }

    return {
callBill: getCallTotal,
smsBill:getSmsTotal,
totalBill: getTotal
}
}

    

