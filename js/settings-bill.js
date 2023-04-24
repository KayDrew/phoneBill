// get a reference to the sms or call radio buttons
var settingRadioBtns =document.querySelectorAll("input[name='billItemTypeWithSettings']");

// get refences to all the settings fields
var callTotalSettings=document.querySelector('.callTotalSettings');

var smsTotalSettings=document.querySelector('.smsTotalSettings');

var totalSettings=document.querySelector('.totalSettings');

var callCostSetting =document.querySelector (".callCostSetting");
var smsCostSetting =document.querySelector (".smsCostSetting");

var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var warningLevelSetting =document.querySelector(".warningLevelSetting");
//get a reference to the add button
var addButton3=document.querySelector('.addBtn');

//get a reference to the 'Update settings' button
var updateSettings=document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings


// create a variables that will keep track of all three totals.
var callTotal3=0.00
var smsTotal3=0.00;
var total3=0.00;
var callCost=0.00;
var smsCost=0.00;
var warningLevel =0.00;
var criticalLevel =0.00;

function settingsUpdated(){
	
callCost=parseFloat(callCostSetting.value);    
smsCost=parseFloat(smsCostSetting.value);
warningLevel =parseFloat(warningLevelSetting.value);
criticalLevel=parseFloat(criticalLevelSetting.value);


  
if (total3>=warningLevel && total3<criticalLevel ){
	totalSettings.style.color="orange";
	}
 else if(total3>=criticalLevel){

totalSettings.style.color="red";

}

else{
	totalSettings.style.color="black";

	}
}

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click',settingsUpdated);


function addFunction(){
	
var settingBillItem="";

for(let radioBtn of settingRadioBtns){

  if(radioBtn.checked)  {
  	
	 settingBillItem=radioBtn.value;
	
    
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
         
       }
    
    
  
  if (total3>=warningLevel && total3<criticalLevel ){
	totalSettings.style.color="orange";
	}
 else if(total3>=criticalLevel){

totalSettings.style.color="red";

}

else{
	totalSettings.style.color="black";

	}


var roundedBillTotal3=total3.toFixed(2);
var roundedCallTotal3 =callTotal3.toFixed(2);
var roundedSmsTotal3 = smsTotal3.toFixed (2);

 totalSettings.innerHTML =roundedBillTotal3;
 smsTotalSettings.innerHTML=roundedSmsTotal3;
 callTotalSettings.innerHTML=roundedCallTotal3;

}

//add an event listener for when the add button is pressed
addButton3.addEventListener('click',addFunction);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
