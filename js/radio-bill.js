

function calculateRadio( ){

    var callTotal2=0.00;
    var total2=0.00;
    var smsTotal2=0.00;	
    var warning=30;
var critical=50;

function setCost(billItem2){
    	
    if(billItem2==="call"){
    callTotal2 +=2.25;
    
}


else if(billItem2==="sms"){
	
        smsTotal2+=0.75;
	}
	
	}
	
	function getCallTotal (){
return  callTotal2;
}
	function getSmsTotal(){
return  smsTotal2;
}

	function  setTotal(){
total2=smsTotal2 +callTotal2 ;
}

	
	function  getTotal (){

return total2;
}

function getCritical(){
	
	return critical;
	}

function getWarning(){
	
	return warning;
	}



function getLevel(){

if(total2>=warning && total2<critical){

return "orange colour";

}

else if(total2>=critical){

return "red colour";
}

else {

return "normal colour";
}

}



    return {
    	setCost,
        callBill2: getCallTotal,
        smsBill2:getSmsTotal,
        totalBill2: getTotal,
        setTotal,
        getLevel, 
getCritical,
getWarning  }
}
      
          

