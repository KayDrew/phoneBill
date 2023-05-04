
//add an event listener for when the add button is pressed
function calculateTextBill(){

var total=0;
var callTotal=0;
var smsTotal=0;
var warning=20;
var critical=30;


function makeCallOrSendSms(item){
	
	if(item!== undefined){
	
	var act2= item.trim();
	var act= act2.toLowerCase();
	
	if(act==="call"){
  callTotal+=2.25;

}

else if (act==="sms"){

 smsTotal+=0.75;
   
}

}

}

function getCallTotal(){

return callTotal;
}

function getSmsTotal (){
return smsTotal;
}

function setTotal(){
	total=smsTotal +callTotal 
	
	}

function getTotal(){

return total;
}


function getCritical(){
	
	return critical;
	}

function getWarning(){
	
	return warning;
	}


function getLevel(){

if(total>=warning && total<critical){

return "orange colour";

}

else if(total>=critical){

return "red colour";
}

else {

return "normal colour";
}

}


    return {
callOrSms: makeCallOrSendSms,
callBill: getCallTotal, 
smsBill:getSmsTotal,
setTotal,
totalBill: getTotal,
level: getLevel,
getWarning,
getCritical

}
}

    

