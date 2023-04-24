

// create a variables that will keep track of all the settings


// create a variables that will keep track of all three totals.

function settingsBill(settingBillItem){

	var callTotal3=0.00
var smsTotal3=0.00;
var total3=0.00;

    
    if(settingBillItem==="call"){
  
    
    if(total3<criticalLevel){
    	  callTotal3+= callCost;
    total3+= callCost;    
    }
    

}

else if(settingBillItem==="sms"){
	
	if(total3<criticalLevel){
	smsTotal3+= smsCost;
        total3+= smsCost;
        }
        

	}


	return {
		callBill3: callTotal3,
		smsBill3:smsTotal3,
		totalBill3: total3
		}


}
         
       
    
    
  


}

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
