

function calculateRadio( billItem2){

    var callTotal2=0.00;
    var total2=0.00;
    var smsTotal2=0.00;	

    	
    if(billItem2==="call"){
    callTotal2 +=2.75;
    total2+=2.75;    
}

else if(billItem2==="sms"){
	smsTotal2+=0.75;
        total2+=0.75;
	}

    return {
        callBill2: callTotal2,
        smsBill2:smsTotal2,
        totalBill2: total2
        }
}
      
          

