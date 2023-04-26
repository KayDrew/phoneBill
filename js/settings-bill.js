

// create a variables that will keep track of all the settings


// create a variables that will keep track of all three totals.

function settingsBill(settingBillItem,callCost1,smsCost1,warning,critical){

var callTotal3=0.00;
var smsTotal3=0.00
var total3=0.00;

var smsCost=0.00;
var callCost=0.00;
var warningLevel =0.00;
var criticalLevel =0.00;

if(settingBillItem!=undefined && smsCost1!=undefined && callCost1!= undefined && warning!=undefined && critical!=undefined){
    
 smsCost=smsCost1;
 callCost=callCost1;
 warningLevel =warning;
 criticalLevel =critical;

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

}

	return {
		callBill3: callTotal3,
		smsBill3:smsTotal3,
		totalBill3: total3,
		warning: warningLevel,
		critical: criticalLevel,
		
		}


}
         
       
    
    
