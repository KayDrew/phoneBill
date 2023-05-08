

// create a variables that will keep track of all the settings


// create a variables that will keep track of all three totals.

function settingsBill(){

var callTotal3=0.00;
var smsTotal3=0.00
var total3=0.00;

var smsCost=0.00;
var callCost=0.00;
var warningLevel =0.00;
var criticalLevel =0.00;

function setSmsCost(cost){

if(cost!==undefined && isNaN(cost)===false ){
    
 smsCost=cost;
 
 }
 }
 
 function setCallCost(cost){

if(cost!==undefined && isNaN(cost)===false ){
    
 callCost=cost;
 
 }
 
 }
 
 
 function setCriticalLevel(level){

if(level!==undefined && isNaN(level)===false ){
    
 criticalLevel=level;
 
 }
 }
 
  function setWarningLevel(level){

if(level!==undefined && isNaN(level)===false ){
    
 warningLevel=level;
 
 }
 }


 
 function makeCall(){

 	if(total3<criticalLevel){

callTotal3 +=callCost;
}
}

function sendSms(){
	
	if(total3<criticalLevel){

smsTotal3 +=smsCost;
}

}

function getCallTotal(){

return callTotal3;
}

function getSmsTotal(){

return smsTotal3;
}
 
 
 function getCriticalLevel(){

return criticalLevel;
}

function getWarningLevel(){
	
	return  warningLevel;
	}
 
function setTotal (){
	

total3=smsTotal3 +callTotal3;

}

function getTotal(){

return total3;

}

function getLevel(){

if(total3>= warningLevel && total3<criticalLevel){
	
	return "orange colour";
}


else if(total3>=criticalLevel){
	
	return "red colour";
}

else{
	return  "normal colour";
}

}

  

	return {
		setCallCost,
		setSmsCost,
		makeCall,
		sendSms,
		setTotal,
		callBill3: getCallTotal,
		smsBill3: getSmsTotal,
		totalBill3: getTotal,
		setWarning: setWarningLevel,
		setCritical:setCriticalLevel, 
		getWarning: getWarningLevel,
		getCritical: getCriticalLevel,
		getLevel,
		
		}

}
         
       
    
    
